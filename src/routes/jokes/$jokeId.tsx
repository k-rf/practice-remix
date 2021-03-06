import type { Joke } from '@prisma/client';
import { Link, LoaderFunction, useLoaderData, useParams } from 'remix';

import { db } from '~/lib/db.server';

type LoaderData = { joke: Joke };

export const loader: LoaderFunction = async ({ params }) => {
  const joke = await db.joke.findUnique({
    where: { id: params.jokeId },
  });

  if (!joke) {
    throw new Error('Joke not found');
  }

  const data: LoaderData = { joke };
  return data;
};

const JokeRoute = () => {
  const data = useLoaderData<LoaderData>();

  return (
    <div>
      <p>Here&apos;s your hilarious joke:</p>
      <p>
        Why don&apos;t you find hippopotamuses hiding in trees? They&apos;re
        really good at it.
      </p>
      <Link to='.'>{data.joke.name} Permalink</Link>
    </div>
  );
};

export default JokeRoute;

export const ErrorBoundary = () => {
  const { jokeId } = useParams();

  return (
    <div className='error-container'>{`There was an error loading joke by the id ${jokeId}. Sorry.`}</div>
  );
};
