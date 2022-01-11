interface Listing {
  id: string;
  title: string;
  address: string;
  price: number;
  numOfGuests: number;
  numOfBeds: number;
}

export const listings: Listing[] = [
  {
    id: '001',
    title: 'Cool house number 1',
    address: '123 Fuck you street',
    price: 1000,
    numOfGuests: 3,
    numOfBeds: 4,
  },
  {
    id: '002',
    title: 'Cool house number 2',
    address: '123 Hello you street',
    price: 1000000,
    numOfGuests: 39,
    numOfBeds: 1,
  },
  {
    id: '003',
    title: 'Cool house number 3',
    address: '4700 Washington Lane, Ontario, CA',
    price: 1000,
    numOfGuests: 3,
    numOfBeds: 4,
  },
];
