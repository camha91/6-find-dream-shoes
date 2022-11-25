import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {ICONS} from '../../../commons/Images';
import {styles} from '../styles/styles';
import {SIZES} from '../../../commons/Themes';

function SearchBar(props) {
  console.log('Rendering Search Bar');
  console.log('Search term', props.search);
  return (
    <View style={styles.searchBar}>
      <Text style={styles.searchBar__header}>Find Your</Text>
      <Text style={styles.searchBar__header}>Dream Shoes</Text>
      <View style={styles.searchBar__container}>
        <View style={styles.searchBar__textBox}>
          <Image style={styles.icon} source={ICONS.search} />
          <TextInput
            style={{padding: SIZES.padding}}
            onChangeText={props.changeSearchTerm}
            placeholder="Search Shoes..."
          />
        </View>
        <TouchableOpacity
          style={[styles.icon__border, {marginTop: SIZES.padding}]}>
          <Image style={styles.icon} source={ICONS.list} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default memo(SearchBar);
