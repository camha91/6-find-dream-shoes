import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {memo} from 'react';
import {ICONS, IMAGES} from '../../../commons/Images';
import {styles} from '../styles/styles';

function NavBar() {
  console.log('Rendering NavBar');
  return (
    <View style={styles.navBar}>
      <View style={styles.icon__border}>
        <TouchableOpacity>
          <Image style={styles.icon} source={ICONS.back} resizeMode="contain" />
        </TouchableOpacity>
      </View>

      <Image
        style={styles.avatar}
        source={IMAGES.avatar_3}
        resizeMode="contain"
      />
    </View>
  );
}

export default memo(NavBar);
