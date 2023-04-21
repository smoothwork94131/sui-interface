import { FC } from 'react';

import { SVGProps } from './svg.types';

const Dribbble: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 21 20"
    fill="none"
    {...props}
  >
    <path
      d="M1.13039 6.97232C1.13032 6.97253 1.13025 6.97274 1.13018 6.97296L1.07087 6.95322C1.0554 7.0031 1.05052 7.05566 1.05654 7.10753C1.06255 7.1594 1.07934 7.20944 1.10581 7.25445C1.13229 7.29946 1.16788 7.33845 1.21029 7.36891C1.25271 7.39937 1.30102 7.42064 1.35212 7.43135C2.3318 7.64276 3.33115 7.74961 4.33337 7.7501C6.37154 7.75267 8.38584 7.31393 10.2379 6.46433C10.2253 6.44719 10.2126 6.43008 10.1999 6.41301M1.13039 6.97232C1.11764 7.01371 1.11363 7.0573 1.11862 7.10033C1.12363 7.14355 1.13762 7.18526 1.15969 7.22277C1.18175 7.26027 1.2114 7.29276 1.24675 7.31815C1.28209 7.34353 1.32235 7.36125 1.36494 7.37018L1.36531 7.37025C2.34066 7.58074 3.3356 7.68711 4.33341 7.6876H4.33345C6.35821 7.69015 8.35931 7.25525 10.1999 6.41301M1.13039 6.97232C1.77996 5.02059 3.02774 3.32303 4.69663 2.12057C4.74416 2.09032 4.79846 2.07232 4.85467 2.06821C4.91108 2.06408 4.96761 2.07407 5.01919 2.09725C7.06377 3.10551 8.83929 4.58481 10.1999 6.41301M1.13039 6.97232L10.2579 6.3863C10.2386 6.39525 10.2193 6.40415 10.1999 6.41301M19.6709 10.872C19.7203 10.8778 19.768 10.8933 19.8114 10.9177C19.8547 10.9421 19.8927 10.9749 19.9233 11.0142C19.9538 11.0535 19.9762 11.0984 19.9892 11.1464C20.0022 11.1944 20.0056 11.2445 19.999 11.2938M19.6709 10.872L19.9371 11.2855L19.999 11.2938M19.6709 10.872C19.0619 10.7888 18.448 10.748 17.8334 10.7501L19.6709 10.872ZM19.999 11.2938C19.7866 12.8702 19.1921 14.3707 18.2672 15.6648C17.3424 16.9589 16.1153 18.0073 14.6927 18.7188L14.6052 14.847C14.6052 14.847 14.6052 14.847 14.6052 14.847C14.6046 16.0123 14.4751 17.1739 14.2194 18.3107L14.2192 18.3116C14.2052 18.3696 14.2082 18.4304 14.2277 18.4868C14.2473 18.5431 14.2826 18.5928 14.3294 18.6297C14.3762 18.6667 14.4327 18.6895 14.492 18.6954C14.5514 18.7013 14.6113 18.6901 14.6645 18.6631L14.6648 18.6629C16.0782 17.956 17.2975 16.9143 18.2164 15.6285C19.1353 14.3427 19.726 12.8518 19.937 11.2856M19.999 11.2938L19.937 11.2856M19.937 11.2856C19.9425 11.2445 19.9397 11.2028 19.9289 11.1628C19.9181 11.1227 19.8994 11.0853 19.8739 11.0526C19.8485 11.0199 19.8168 10.9925 19.7807 10.9722C19.7446 10.9518 19.7048 10.9389 19.6636 10.934L19.6624 10.9339C19.0564 10.8511 18.4453 10.8106 17.8336 10.8126L17.8333 10.8126C16.6084 10.8111 15.3887 10.969 14.2047 11.2824L19.937 11.2856ZM4.33331 9.3126C6.67264 9.31517 8.98287 8.79618 11.096 7.79369C11.5463 8.56505 11.9179 9.37979 12.2049 10.2256C8.84563 11.5114 6.0214 13.8994 4.19514 16.9996L4.19453 17.0007C4.17185 17.041 4.14023 17.0756 4.10211 17.1018C4.064 17.128 4.02039 17.1451 3.97462 17.1519C3.92886 17.1586 3.88216 17.1548 3.8381 17.1407C3.79404 17.1267 3.75378 17.1027 3.72042 17.0706L3.71974 17.07C2.74944 16.1657 1.97577 15.0713 1.44693 13.855C0.918082 12.6387 0.645402 11.3265 0.645875 10.0001V10.0001C0.645875 9.74537 0.655194 9.49381 0.673825 9.2454L0.6115 9.24072L0.673803 9.24567C0.677313 9.20147 0.690186 9.15853 0.711569 9.11969L0.656921 9.0896L0.711569 9.11969C0.732952 9.08085 0.762355 9.04701 0.797823 9.02041C0.833292 8.9938 0.874016 8.97505 0.917287 8.9654C0.960494 8.95576 1.00526 8.95542 1.04861 8.96438C2.12827 9.19528 3.22923 9.312 4.33331 9.3126ZM4.33331 9.3126L4.33337 9.2501L4.33334 9.3126C4.33333 9.3126 4.33332 9.3126 4.33331 9.3126ZM7.11319 1.40636L7.11285 1.40615C7.06219 1.37517 7.0214 1.33039 6.99526 1.27706C6.96913 1.22373 6.95873 1.16406 6.96529 1.10503C6.97185 1.04601 6.99509 0.990073 7.03229 0.943781C7.0695 0.897489 7.11912 0.862757 7.17535 0.843654L7.17568 0.84354C8.5333 0.373886 9.97859 0.212961 11.4063 0.372487C12.8339 0.532013 14.2081 1.00797 15.4285 1.7657L15.4285 1.76571L15.4295 1.76627C15.4676 1.789 15.5004 1.81958 15.5257 1.85597C15.5511 1.89236 15.5684 1.93373 15.5765 1.97733C15.5846 2.02093 15.5834 2.06577 15.5729 2.10885C15.5623 2.1519 15.5428 2.19222 15.5155 2.22713C14.4421 3.58922 13.1342 4.74864 11.6536 5.65097C10.4341 3.95145 8.89123 2.50898 7.11319 1.40636ZM17.8335 9.1876H17.8335C16.4575 9.18571 15.0872 9.36418 13.7578 9.71839C13.4317 8.78054 13.0199 7.87477 12.5274 7.01261C14.1589 6.02226 15.5981 4.74511 16.7756 3.24264C16.804 3.20911 16.8389 3.18173 16.8782 3.16219C16.9179 3.1425 16.9612 3.13119 17.0054 3.12898C17.0496 3.12677 17.0938 3.1337 17.1352 3.14934C17.1764 3.16491 17.214 3.18877 17.2456 3.21944C18.769 4.76969 19.7268 6.78719 19.965 8.94757L20.0271 8.94072L19.965 8.94732C19.9699 8.99367 19.9644 9.04053 19.9489 9.08448C19.9333 9.12842 19.9081 9.16833 19.8752 9.20129C19.8422 9.23425 19.8023 9.25942 19.7584 9.27495C19.7145 9.29047 19.6677 9.29599 19.6213 9.29109C19.0278 9.22353 18.4309 9.18898 17.8335 9.1876ZM5.48427 18.019L5.48458 18.0185C7.09477 15.1867 9.62318 12.9901 12.6506 11.7913C12.8692 12.7951 12.9797 13.8195 12.9802 14.847V14.8471C12.9822 16.3731 12.7364 17.8893 12.2522 19.3365L12.2519 19.3375C12.2356 19.3891 12.2052 19.4352 12.1643 19.4706C12.1234 19.5061 12.0734 19.5296 12.02 19.5384L12.019 19.5386C11.463 19.6402 10.8988 19.6901 10.3336 19.6876H10.3333C8.67544 19.6908 7.04514 19.264 5.60161 18.4488L5.60146 18.4487C5.56531 18.4284 5.53356 18.4012 5.50805 18.3685C5.48255 18.3358 5.46379 18.2984 5.45289 18.2584C5.44198 18.2184 5.43914 18.1767 5.44453 18.1356C5.44992 18.0945 5.46343 18.0549 5.48427 18.019Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.125"
    />
  </svg>
);

export default Dribbble;