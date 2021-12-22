import { Links, LiveReload, Meta, Scripts } from 'remix';

type DocumentProps = {
  children: React.ReactNode;
  title?: string;
};

export const Document = ({ children, title }: DocumentProps) => {
  return (
    <html lang='ja'>
      <head>
        <meta charSet='utf-8' />
        <Meta />
        {title ? <title>{title}</title> : null}
        <Links />
      </head>
      <body>
        {children}
        <Scripts />
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  );
};
