import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {memo, useState} from 'react';
import {ICONS} from '../../../commons/Images';
import {styles} from '../styles/styles';
import StaggeredList from '@mindinventory/react-native-stagger-view';
import {SIZES} from '../../../commons/Themes';

function ShoesList(props) {
  console.log('Rendering Shoes List');

  const [isLoading, setIsLoading] = useState(true);

  const renderChildren = item => {
    return (
      <View style={getChildrenStyle()} key={item.id}>
        <View style={styles.avatarImage}>
          <Image
            onError={() => {}}
            style={styles.img}
            source={item.image}
            resizeMode={'cover'}
          />
          <Text style={styles.text20}>{item.name}</Text>
          <Text style={styles.text12}>{item.name}</Text>
          <Text style={styles.text16}>{item.price}</Text>
        </View>
      </View>
    );
  };

  const getChildrenStyle = () => {
    return {
      width: (SIZES.width - 18) / 2,
      height: Number(Math.random() * 20 + 12) * 10,
      backgroundColor: 'gray',
      margin: 4,
      borderRadius: 18,
    };
  };

  return (
    <View>
      <StaggeredList
        data={props.shoesList}
        animationType={'FADE_IN_FAST'}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => renderChildren(item)}
        isLoading={isLoading}
        LoadingView={
          <View style={styles.activityIndicatorWrapper}>
            <ActivityIndicator color={'black'} size={'large'} />
          </View>
        }
      />
    </View>
  );
}

export default memo(ShoesList);
