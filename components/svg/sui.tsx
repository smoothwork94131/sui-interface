import { FC } from 'react';

import { SVGProps } from './svg.types';

const Sui: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxWidth: maxWidth, maxHeight: maxHeight }}
    viewBox="0 0 185 269"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.506 222.289C20.4894 236.463 32.0943 248.258 46.1319 256.466C60.1694 264.674 76.1348 269 92.3925 269C108.65 269 124.616 264.674 138.653 256.466C152.691 248.258 164.296 236.463 172.279 222.289C180.472 208.088 184.785 191.978 184.785 175.58C184.785 159.182 180.472 143.073 172.279 128.872L102.017 5.62721C101.055 3.91963 99.6572 2.49867 97.9659 1.50988C96.2747 0.521085 94.3512 0 92.3925 0C90.4339 0 88.5104 0.521085 86.8191 1.50988C85.1279 2.49867 83.7296 3.91963 82.7676 5.62721L12.506 128.872C4.31318 143.073 0 159.182 0 175.58C0 191.978 4.31318 208.088 12.506 222.289V222.289ZM72.5998 64.2605L87.5801 37.9825C88.0611 37.1287 88.7602 36.4183 89.6058 35.9239C90.4514 35.4295 91.4132 35.1689 92.3925 35.1689C93.3719 35.1689 94.3336 35.4295 95.1792 35.9239C96.0249 36.4183 96.724 37.1287 97.205 37.9825L154.836 139.073C160.01 148.036 163.217 157.999 164.245 168.299C165.273 178.598 164.098 188.999 160.798 198.81C160.081 195.466 159.095 192.185 157.85 189C149.889 168.655 131.89 152.954 104.341 142.334C85.401 135.058 73.3107 124.357 68.3981 110.524C62.0711 92.7025 68.6797 73.2632 72.5998 64.2605ZM47.0552 109.068L29.9489 139.073C23.5444 150.173 20.1727 162.765 20.1727 175.583C20.1727 188.402 23.5444 200.994 29.9489 212.094C35.1261 221.273 42.2588 229.199 50.8406 235.308C59.4225 241.418 69.2431 245.562 79.6051 247.446C89.9671 249.33 100.616 248.908 110.797 246.209C120.978 243.511 130.44 238.602 138.512 231.832C142.973 220.418 143.132 207.77 138.96 196.248C133.114 181.548 119.04 169.813 97.1304 161.361C72.3646 151.848 56.2763 136.995 49.317 117.229C48.3797 114.563 47.624 111.837 47.0552 109.068V109.068Z"
      fill={props.fill || '#1D2947'}
    />
  </svg>
);

export default Sui;