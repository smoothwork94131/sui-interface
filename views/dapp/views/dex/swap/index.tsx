import { not } from 'ramda';
import { FC, useMemo, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';

import { Box } from '@/elements';
import { useLocalStorage } from '@/hooks';
import { CogsSVG } from '@/svg';
import { isSameAddressZ } from '@/utils';

import SwapSelectCurrency from '../components/swap-select-currency';
import InputBalance from './input-balance';
import Settings from './settings';
import { SWAP_MESSAGES } from './swap.data';
import {
  ISwapForm,
  LocalSwapSettings,
  OnSelectCurrencyData,
} from './swap.types';
import SwapButton from './swap-button';
import SwapManager from './swap-manager';
import SwapMessage from './swap-message';

const Swap: FC = () => {
  const [localSettings, setLocalSettings] = useLocalStorage<LocalSwapSettings>(
    'interest-swap-settings',
    { slippage: '1', deadline: 5, autoFetch: true }
  );

  const { register, control, setValue, getValues } = useForm<ISwapForm>();

  const [showSettings, setShowSettings] = useState(false);
  const [hasNoMarket, setHasNoMarket] = useState(false);
  const [isFetchingAmountOutTokenIn, setFetchingAmountOutTokenIn] =
    useState(false);
  const [isFetchingAmountOutTokenOut, setFetchingAmountOutTokenOut] =
    useState(false);
  const [isTokenInOpenModal, setTokenInIsOpenModal] = useState(false);
  const [isTokenOutOpenModal, setTokenOutIsOpenModal] = useState(false);
  const [swapBase, setSwapBase] = useState<string | null>(null);
  const [amountOutError, setAmountOutError] = useState<null | string>(null);

  // We want the form to re-render if addresses change
  const tokenInAddress = useWatch({ control, name: 'tokenIn.address' });
  const tokenOutAddress = useWatch({ control, name: 'tokenOut.address' });

  const toggleSettings = () => setShowSettings(not);

  const flipTokens = () => {
    const { tokenOut, tokenIn } = getValues();
    const prevTokenOut = tokenOut;
    const prevTokenIn = tokenIn;
    setValue('tokenIn', prevTokenOut);
    setValue('tokenOut', prevTokenIn);
  };

  const onSelectCurrency =
    (name: 'tokenIn' | 'tokenOut') =>
    ({ address, decimals, symbol }: OnSelectCurrencyData) => {
      setValue(`${name}.address`, address);
      setValue(`${name}.decimals`, decimals);
      setValue(`${name}.symbol`, symbol);
      setValue('tokenOut.value', '0.0');
      setValue('tokenIn.value', '0.0');
      setHasNoMarket(false);
      setTokenInIsOpenModal(false);
      setTokenOutIsOpenModal(false);
    };

  const isDisabled = useMemo(
    () =>
      !!(
        isSameAddressZ(tokenInAddress, tokenOutAddress) ||
        isFetchingAmountOutTokenOut ||
        isFetchingAmountOutTokenIn ||
        amountOutError ||
        hasNoMarket
      ),
    [
      tokenInAddress,
      tokenOutAddress,
      isFetchingAmountOutTokenIn,
      isFetchingAmountOutTokenOut,
      amountOutError,
      hasNoMarket,
    ]
  );
  return (
    <>
      <Box
        my="L"
        px="L"
        pb="L"
        color="text"
        width="100%"
        bg="foreground"
        borderRadius="2rem"
        minWidth={['20rem', '40rem']}
      >
        <Box
          pt="L"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Box display="flex" flexDirection="column" alignItems="flex-end">
            <Box
              display="flex"
              cursor="pointer"
              alignItems="center"
              justifyContent="center"
              transform="rotate(0deg)"
              transition="all 300ms ease-in-out"
              color="text"
              hover={{
                color: 'accent',
                transform: 'rotate(90deg)',
              }}
              onClick={toggleSettings}
            >
              <CogsSVG width="1.5rem" maxHeight="1.5rem" maxWidth="1.5rem" />
            </Box>
            {showSettings && (
              <Settings
                toggle={toggleSettings}
                setLocalSettings={setLocalSettings}
                localSettings={localSettings}
              />
            )}
          </Box>
        </Box>
        <Box color="text" width="100%" display="grid" gridGap="1rem">
          <Box
            py="L"
            display="flex"
            borderRadius="M"
            flexDirection="column"
            justifyContent="space-evenly"
          >
            <InputBalance
              balance={1}
              max="1"
              name="tokenIn"
              register={register}
              setValue={setValue}
              disabled={isFetchingAmountOutTokenIn}
              handleSelectedByUser={() => {
                setValue(`tokenIn.setByUser`, true);
                setValue(`tokenOut.setByUser`, false);
              }}
              currencySelector={
                <SwapSelectCurrency
                  currentToken={tokenInAddress}
                  isModalOpen={isTokenInOpenModal}
                  symbol={getValues('tokenIn.symbol')}
                  address={getValues('tokenIn.address')}
                  setIsModalOpen={setTokenInIsOpenModal}
                  onSelectCurrency={onSelectCurrency('tokenIn')}
                />
              }
            />
            <Box
              width="3rem"
              height="3rem"
              display="flex"
              bg="background"
              cursor="pointer"
              borderRadius="50%"
              border="1px solid"
              mx={['XL', 'auto']}
              position="relative"
              alignItems="center"
              borderColor="accent"
              onClick={flipTokens}
              justifyContent="center"
              mt={['-1rem', '-1.5rem']}
              mb={['-1.2rem', '-1.5rem']}
              hover={{
                boxShadow: '0 0 0.5rem #0055FF',
              }}
            >
              ⥯
            </Box>
            <InputBalance
              name="tokenOut"
              register={register}
              setValue={setValue}
              disabled={isFetchingAmountOutTokenOut}
              balance={1}
              handleSelectedByUser={() => {
                setValue(`tokenIn.setByUser`, false);
                setValue(`tokenOut.setByUser`, true);
              }}
              currencySelector={
                <SwapSelectCurrency
                  currentToken={tokenOutAddress}
                  isModalOpen={isTokenOutOpenModal}
                  symbol={getValues('tokenOut.symbol')}
                  disabled={isFetchingAmountOutTokenOut}
                  address={getValues('tokenOut.address')}
                  setIsModalOpen={setTokenOutIsOpenModal}
                  onSelectCurrency={onSelectCurrency('tokenOut')}
                />
              }
            />
          </Box>
        </Box>
        {(isFetchingAmountOutTokenOut || isFetchingAmountOutTokenIn) && (
          <SwapMessage {...SWAP_MESSAGES['loading-amount']} />
        )}
        {amountOutError && (
          <SwapMessage {...SWAP_MESSAGES['error-amount-out']} />
        )}
        {/*balancesError && <SwapMessage {...SWAP_MESSAGES['error-balances']} />*/}
        {isSameAddressZ(tokenInAddress, tokenOutAddress) && (
          <SwapMessage {...SWAP_MESSAGES['error-same-token']} />
        )}
        {hasNoMarket && <SwapMessage {...SWAP_MESSAGES['info-no-pool']} />}
        <SwapButton
          control={control}
          swapBase={swapBase}
          disabled={isDisabled}
          getValues={getValues}
          setSwapBase={setSwapBase}
          needsApproval={/* needsApproval */ true}
          /*localSettings={localSettings}*/
          fetchingBalancesData={/* loading */ true}
          tokenInAddress={tokenInAddress}
          fetchingBaseData={/* !balancesData && !balancesError */ true}
          fetchingAmount={
            isFetchingAmountOutTokenOut || isFetchingAmountOutTokenIn
          }
        />
      </Box>
      {localSettings.autoFetch && (
        <SwapManager
          setValue={setValue}
          isFetchingAmountOutTokenIn={isFetchingAmountOutTokenIn}
          isFetchingAmountOutTokenOut={isFetchingAmountOutTokenOut}
          hasNoMarket={hasNoMarket}
          setHasNoMarket={setHasNoMarket}
          setFetchingAmountOutTokenIn={setFetchingAmountOutTokenIn}
          setFetchingAmountOutTokenOut={setFetchingAmountOutTokenOut}
          setSwapBase={setSwapBase}
          setAmountOutError={setAmountOutError}
        />
      )}
    </>
  );
};

export default Swap;
