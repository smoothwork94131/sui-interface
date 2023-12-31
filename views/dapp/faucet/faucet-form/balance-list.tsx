import { v4 } from 'uuid';

import { FAUCET_TOKENS } from '@/constants';
import { Box } from '@/elements';
import { useNetwork, useWeb3 } from '@/hooks';
import { ZERO_BIG_NUMBER } from '@/utils';

import ItemBalance from './item-balance';

const DEFAULT_COIN = {
  type: 'Unknown',
  name: 'Unknown',
  totalBalance: ZERO_BIG_NUMBER,
  objects: [],
  id: 'Unknown',
};

const BalanceList = () => {
  const { coinsMap } = useWeb3();

  const { network } = useNetwork();

  const tokens = FAUCET_TOKENS[network];

  return (
    <Box display="grid" overflowY="auto" gridGap="0.25rem" alignItems="start">
      {tokens.map(({ symbol, Icon, type, decimals }) => {
        const SVG = Icon;
        const coin = coinsMap[type]?.objects ? coinsMap[type] : DEFAULT_COIN;
        return (
          <ItemBalance
            SVG={SVG}
            key={v4()}
            symbol={symbol}
            decimals={decimals}
            totalBalance={coin.totalBalance}
            objectsData={coin.objects.map((elem) => ({
              id: elem.coinObjectId,
              balance: elem.balance.toString(),
            }))}
          />
        );
      })}
    </Box>
  );
};

export default BalanceList;
