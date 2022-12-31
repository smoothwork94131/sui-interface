import { ThemeProvider } from '@emotion/react';
import { FC, useState } from 'react';

import { DAppDarkTheme, DAppLightTheme } from '@/design-system/dapp-theme';
import { Layout } from '@/views/dapp/components';

import { WebManagerWrapperProps } from './web-manager.type';

const WebManagerWrapper: FC<WebManagerWrapperProps> = ({
  pageTitle,
  children,
}) => {
  const [dark, setDark] = useState(false);

  return (
    <ThemeProvider
      theme={{ setDark, ...(dark ? DAppDarkTheme : DAppLightTheme) }}
    >
      <Layout pageTitle={pageTitle}>{children}</Layout>
    </ThemeProvider>
  );
};

export default WebManagerWrapper;
