import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import express, { Application } from 'express';
import { connectDatabase } from './database';
import { resolvers, typeDefs } from './graphql';

// const app = express();
const port = 4000;

const mount = async (app: Application) => {
  const db = await connectDatabase();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
    context: () => ({ db }),
  });

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  await server.start();
  server.applyMiddleware({ app, path: '/api' });
  app.listen(port);
  console.log(`[app] : http://localhost:${port}/api`);

  // const listings = await db.listings.find({}).toArray();
  // console.log(listings);
};

mount(express());
