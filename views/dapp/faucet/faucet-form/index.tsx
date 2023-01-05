import { Network } from '@mysten/sui.js';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { v4 } from 'uuid';

import { FAUCET_TOKENS } from '@/constants';
import { Box, Typography } from '@/elements';
import { useWeb3 } from '@/hooks';
import { getCoinBalance, ZERO_BIG_NUMBER } from '@/utils';

import { IFaucetForm } from '../faucet.types';
import InputBalance from '../input-balance';
import FaucetTokensDropdown from './faucet-tokens-dropdown';
import ItemBalance from './item-balance';
import MintButton from './mint-button';

const tokens = FAUCET_TOKENS[Network.DEVNET];

const DEFAULT_COIN = {
  type: 'Unkown',
  name: 'Unkown',
  totalBalance: ZERO_BIG_NUMBER,
  objects: [],
  id: 'Unknown',
};

const FaucetForm: FC = () => {
  const t = useTranslations();
  const { coinsMap } = useWeb3();
  const { register, getValues, setValue } = useForm<IFaucetForm>({
    defaultValues: {
      type: tokens?.[0]?.type ?? '',
      amount: 0,
    },
  });
  console.log(coinsMap);

  const onSelectCurrency = (type: string) => {
    setValue('type', type);
    setValue('amount', 0);
  };

  return (
    <>
      <Box
        py="XL"
        color="text"
        width="100%"
        display="grid"
        gridGap="1rem"
        height={['auto', 'auto', 'auto', '22rem']}
        gridTemplateColumns={['1fr', '1fr', '1fr', '1fr 1fr']}
      >
        <Box
          py="L"
          display="flex"
          bg="foreground"
          px={['L', 'XL']}
          borderRadius="M"
          flexDirection="column"
        >
          <InputBalance
            name="amount"
            register={register}
            label={t('common.chooseToken')}
            setValue={setValue}
            currencyPrefix={
              <FaucetTokensDropdown
                tokens={tokens}
                defaultValue={tokens?.[0]?.type ?? ''}
                onSelectCurrency={onSelectCurrency}
              />
            }
          />
          <Box display="flex" justifyContent="center">
            <MintButton getValues={getValues} />
          </Box>
        </Box>
        <Box
          py="L"
          display="flex"
          bg="foreground"
          px={['L', 'XL']}
          borderRadius="M"
          flexDirection="column"
        >
          <Typography variant="normal" textTransform="uppercase" my="L">
            {t('common.balance')}
          </Typography>
          <Box
            display="grid"
            overflowY="auto"
            gridGap="0.25rem"
            alignItems="start"
          >
            {tokens.map(({ symbol, Icon, type, decimals }) => {
              const SVG = Icon;
              const coin = coinsMap[type]?.objects
                ? coinsMap[type]
                : DEFAULT_COIN;
              return (
                <ItemBalance
                  SVG={SVG}
                  totalBalance={coin.totalBalance}
                  objectsData={coin.objects.map((elem) => ({
                    id: coin.id,
                    balance: getCoinBalance(elem)!,
                  }))}
                  key={v4()}
                  symbol={symbol}
                  decimals={decimals}
                />
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FaucetForm;
