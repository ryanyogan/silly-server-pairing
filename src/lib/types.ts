import { Collection, ObjectId } from 'mongodb';

export interface Listing {
  _id: ObjectId;
  title: string;
  address: string;
  price: number;
  numOfGuests: number;
  numOfBeds: number;
}

export interface Database {
  listings: Collection<Listing>;
}
