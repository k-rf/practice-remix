import type { LinksFunction } from 'remix';

import { App } from './app';
import globalLargeStylesUrl from './styles/global-large.css';
import globalMediumStylesUrl from './styles/global-medium.css';
import globalStylesUrl from './styles/global.css';

export default App;

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: globalStylesUrl },
    {
      rel: 'stylesheet',
      href: globalMediumStylesUrl,
      media: 'print, (min-width: 640px)',
    },
    {
      rel: 'stylesheet',
      href: globalLargeStylesUrl,
      media: 'screen and (min-width: 1024px)',
    },
  ];
};
