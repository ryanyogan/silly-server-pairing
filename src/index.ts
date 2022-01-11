import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { resolvers, typeDefs } from './graphql';
import { listings } from './listings';

const app = express();
const port = 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello Prateek');
});

app.get('/listings', (_req, res) => {
  res.send(listings);
});

app.post('/delete-listing', (req, res) => {
  const id: string = req.body.id;

  for (let i = 0; i < listings.length; i++) {
    if (listings[i].id === id) {
      return res.send(listings.splice(i, 1));
    }
  }

  return res.send('I could not find that ID');
});

const mount = async () => {
  await server.start();
  server.applyMiddleware({ app, path: '/api' });
  app.listen(port);
  console.log(`[app] : http://localhost:${port}`);
};

mount();
