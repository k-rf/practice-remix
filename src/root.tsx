import { LinksFunction, Outlet } from 'remix';

import { Document } from './layout';
import globalLargeStylesUrl from './styles/global-large.css';
import globalMediumStylesUrl from './styles/global-medium.css';
import globalStylesUrl from './styles/global.css';

export { CatchBoundary, ErrorBoundary } from './layout';

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

export const App = () => {
  return (
    <Document>
      <Outlet />
    </Document>
  );
};
export default App;
