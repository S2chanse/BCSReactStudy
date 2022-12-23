import React from 'react';
import { CountryType } from './App';
import CountryItem from './CountryItem';
import styles from './styles';

type CountryListPropsType = {
  countires: CountryType[];
};
export default function CountryList({ countires }: CountryListPropsType) {
  let makeList = countires.map((item, idx) => {
    return <CountryItem countryItem={item} />;
  });
  return (
    <>
      <ul style={styles.listItemStyle}>{makeList}</ul>
    </>
  );
}
