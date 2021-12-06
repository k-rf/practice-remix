import ReactDOMServer from 'react-dom/server';
import type { EntryContext } from 'remix';
import { RemixServer } from 'remix';

const handleRequest = (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) => {
  const view = ReactDOMServer.renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set('Content-Type', 'text/html');

  return new Response('<!DOCTYPE html>' + view, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
};

export default handleRequest;
