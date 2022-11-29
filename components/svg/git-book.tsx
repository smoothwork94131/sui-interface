import { FC } from 'react';

import { SVGProps } from './svg.types';

const GitBook: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxWidth: maxWidth, maxHeight: maxHeight }}
    viewBox="0 0 64 64"
    {...props}
  >
    <path
      fill="currentColor"
      d="M28.8,47.4c1,0,1.9,0.8,1.9,1.9c0,1-0.8,1.9-1.9,1.9c-1,0-1.9-0.8-1.9-1.9     C26.9,48.2,27.8,47.4,28.8,47.4 M58.2,35.8c-1,0-1.9-0.8-1.9-1.9c0-1,0.8-1.9,1.9-1.9c1,0,1.9,0.8,1.9,1.9     C60.1,34.9,59.2,35.8,58.2,35.8 M58.2,28.1c-3.2,0-5.8,2.6-5.8,5.8c0,0.6,0.1,1.2,0.3,1.8L33.6,45.9c-1.1-1.6-2.9-2.5-4.8-2.5     c-2.2,0-4.2,1.3-5.2,3.2L6.4,37.6c-1.8-1-3.2-3.9-3-6.7c0.1-1.4,0.6-2.5,1.3-2.9c0.5-0.3,1-0.2,1.7,0.1l0.1,0.1     c4.6,2.4,19.5,10.2,20.1,10.5c1,0.4,1.5,0.6,3.2-0.2l30.8-16c0.5-0.2,1-0.6,1-1.3c0-0.9-0.9-1.3-0.9-1.3     c-1.8-0.8-4.5-2.1-7.1-3.3c-5.6-2.6-12-5.6-14.8-7.1c-2.4-1.3-4.4-0.2-4.7,0l-0.7,0.3C20.7,16.2,3.9,24.5,2.9,25.1     c-1.7,1-2.8,3.1-2.9,5.7c-0.2,4.1,1.9,8.4,4.9,9.9l18.2,9.4c0.4,2.8,2.9,5,5.7,5c3.2,0,5.7-2.5,5.8-5.7l20-10.8     c1,0.8,2.3,1.2,3.6,1.2c3.2,0,5.8-2.6,5.8-5.8C64,30.7,61.4,28.1,58.2,28.1"
    />
  </svg>
);

export default GitBook;
