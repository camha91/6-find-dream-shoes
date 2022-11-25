import React, {useCallback, useEffect, useMemo, useState} from 'react';

import {Text, View} from 'react-native';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import ShoesList from './components/ShoesList';

export default function HomeScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  const [dataShoes, setDataShoes] = useState([]);

  useEffect(() => {
    console.log('Fetching api');
    fetchProduct();
  }, []);

  console.log('Rerender HomeScreen');

  const fetchProduct = async () => {
    try {
      const res = await fetch('http://svcy3.myclass.vn/api/Product');

      const json = await res.json();
      setDataShoes(json.content);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeSearch = newSearchTerm => {
    setSearchTerm(newSearchTerm);
  };

  const callBackChangeSearchTerm = useCallback(handleChangeSearch, []);

  const filteredShoesList = useMemo(() => {
    if (!searchTerm) {
      return dataShoes;
    }
    return dataShoes.filter(shoe => {
      return shoe.description.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [searchTerm, dataShoes]);

  console.log('filtered list shoes', filteredShoesList.length);
  console.log('New search term', searchTerm);

  return (
    <View style={{flex: 1}}>
      <NavBar />
      <SearchBar changeSearchTerm={callBackChangeSearchTerm} />
      <ShoesList shoesList={filteredShoesList} />
    </View>
  );
}
