import { IResolvers } from '@graphql-tools/utils';
import { listings } from '../listings';

export const resolvers: IResolvers = {
  Query: {
    listings: () => {
      return listings;
    },
  },
  Mutation: {
    deleteListing: (_parent: undefined, { id }: { id: string }) => {
      for (let i = 0; i < listings.length; i++) {
        if (listings[i].id === id) {
          return listings.splice(i, 1)[0];
        }
      }

      throw new Error('I could not find that ID');
    },
  },
};
