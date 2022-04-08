
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import * as Fathom from 'fathom-client';
import ErrorBoundary from '@/components/dom/error-boundary';
import { darkTheme, lightTheme } from '@/theme/stitches.config';
import { globalStyles } from "@/theme/globalStyles"
import { usePrefersDarkMode } from "@/utils/hooks/usePrefersDarkMode"
import Box from '@/components/dom/box';

function MyApp({ Component, pageProps }) {
  const [dark, setDark] = useState(false)
  const prefersDarkMode = usePrefersDarkMode();
  const router = useRouter();

  useEffect(() => {
    Fathom.load('YANNQPPK', {
      includedDomains: ['cv.bjorkman.kim', 'wwww.cv.bjorkman.kim', 'bjorkman.kim', 'www.bjorkman.kim'],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setDark(prefersDarkMode)
  }, [prefersDarkMode])

  globalStyles();

  return (
    <ErrorBoundary>
      <div data-app className={dark ? darkTheme : lightTheme}>
        <Box css={{ backgroundColor: '$bg_body', color: '$text_body', minHeight: '100vh' }}>
          <Component {...pageProps} />
        </Box>
      </div>
    </ErrorBoundary>
  )
}

export default MyApp
