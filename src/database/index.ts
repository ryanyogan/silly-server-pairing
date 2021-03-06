import { MongoClient } from 'mongodb';
import { Database, Listing } from '../lib/types';

const user = 'admin';
const password = 'fuckoff';
const url = `mongodb+srv://${user}:${password}@cluster0.oqarn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

export const connectDatabase = async (): Promise<Database> => {
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db('main');

    console.log('Connected to Atlas...');

    return {
      listings: db.collection<Listing>('listings'),
    };
  } catch (e) {
    throw new Error(`Unable to connect: ${e}`);
  }
};
