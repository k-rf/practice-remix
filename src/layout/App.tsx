import { Outlet } from 'react-router-dom';
import { LiveReload } from 'remix';

import { Document } from './Document';

export const App = () => {
  return (
    <Document>
      <Outlet />
      {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
    </Document>
  );
};
