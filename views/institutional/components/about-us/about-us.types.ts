import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface AboutUsCardProps {
  name: 'earn' | 'trade' | 'lend';
  link: string;
  Illustration: FC;
}

export interface IconWrapperProps {
  size: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  shining?: boolean;
  floating?: boolean;
  Icon: FC<SVGProps>;
}
