import type { Joke } from '@prisma/client';
import { LoaderFunction, useLoaderData, Link } from 'remix';

import { db } from '~/lib/db.server';

type LoaderData = { randomJoke: Joke };

export const loader: LoaderFunction = async () => {
  const count = await db.joke.count();
  const randomRowNumber = Math.floor(Math.random() * count);
  const [randomJoke] = await db.joke.findMany({
    take: 1,
    skip: randomRowNumber,
  });

  const data: LoaderData = { randomJoke };

  return data;
};

const IndexJokesRoute = () => {
  const data = useLoaderData<LoaderData>();

  return (
    <div>
      <p>Here&apos;s a random joke:</p>
      <p>I was wondering why the frisbee was getting bigger, then it hit me.</p>
      <Link to={data.randomJoke.id}>
        &quot;{data.randomJoke.name}&quot; Permalink
      </Link>
    </div>
  );
};

export default IndexJokesRoute;

export const ErrorBoundary = () => {
  return <div className='error-container'>I did a whoopsies.</div>;
};
