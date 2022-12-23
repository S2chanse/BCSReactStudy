import React, { useState } from 'react';
import { CountryType } from './App';

type CountryItemProps = {
  countryItem: CountryType;
};
export default function CountryItem({ countryItem }: CountryItemProps) {
  const [visited, setVisited] = useState<boolean>(countryItem.visited);
  return (
    <li
      onClick={() => setVisited(!visited)}
      key={countryItem.no}
      className={visited ? 'list-group-item active' : 'list-group-item'}
    >
      {countryItem.country}
    </li>
  );
}
