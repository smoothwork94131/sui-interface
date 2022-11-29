import { DEFAULT_ACCOUNT } from '@/constants';
import { GAAction } from '@/constants/google-analytics';
import { VAULTS_CALL_MAP } from '@/constants/vaults';
import { useSafeContractRead } from '@/hooks';
import InterestViewEarnABI from '@/sdk/abi/interest-view-earn.abi.json';
import { getInterestViewEarnAddress } from '@/utils';
import { logException } from '@/utils/analytics';

export const useGetVaultsSummary = (
  chainId: number,
  account: string | undefined
) => {
  const dineroVaultsArray = VAULTS_CALL_MAP[chainId].dineroVaults;

  return useSafeContractRead({
    addressOrName: getInterestViewEarnAddress(chainId),
    contractInterface: InterestViewEarnABI,
    functionName: 'getVaultsSummary',
    args: [account || DEFAULT_ACCOUNT, dineroVaultsArray],
    enabled: !!dineroVaultsArray.length,
    onError: () =>
      logException({
        action: GAAction.ReadBlockchainData,
        label: `Transaction: getVaultsSummary`,
      }),
  });
};