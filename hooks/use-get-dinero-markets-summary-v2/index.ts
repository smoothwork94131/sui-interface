import { DEFAULT_ACCOUNT } from '@/constants';
import { DINERO_MARKET_SUMMARY_CALL_MAP } from '@/constants/dinero-markets';
import { GAAction } from '@/constants/google-analytics';
import InterestViewDineroV2ABI from '@/sdk/abi/interest-view-dinero-v2.abi.json';
import { getInterestViewDineroV2Address } from '@/utils';
import { logException } from '@/utils/analytics';

import { useSafeContractRead } from '../use-safe-contract-read';
import { useIdAccount } from './../use-id-account';

export const useGetDineroMarketsSummaryV2 = () => {
  const { chainId, account } = useIdAccount();

  const callMap = DINERO_MARKET_SUMMARY_CALL_MAP[chainId] || {};

  return useSafeContractRead({
    addressOrName: getInterestViewDineroV2Address(chainId),
    contractInterface: InterestViewDineroV2ABI,
    functionName: 'getDineroMarketsSummary',
    args: [
      account || DEFAULT_ACCOUNT,
      callMap.nativeMarket,
      callMap.erc20Markets,
      callMap.lpFreeMarkets,
    ],
    onError: () =>
      logException({
        action: GAAction.ReadBlockchainData,
        label: `Transaction: getDineroMarketsSummary`,
        trackerName: ['hooks/use-get-dinero-markets-summary-v2/index.ts'],
      }),
  });
};