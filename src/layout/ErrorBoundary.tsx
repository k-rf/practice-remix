import { Document } from '.';

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return (
    <Document title='Uh-oh!'>
      <div className='error-container'>
        <h1>App Error</h1>
        <pre>{error.message}</pre>
      </div>
    </Document>
  );
}
