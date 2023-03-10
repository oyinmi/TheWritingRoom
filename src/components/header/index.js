import React from 'react';
import {View, Pressable, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {PROFILE} from '../../constants/routeNames';
import style from './style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Back from '../../assets/icons/back'


export default function Header() {
  const {goBack, navigate} = useNavigation();
  const inset = useSafeAreaInsets();

  function onNavigate(route) {
    return () => navigate(route);
  }

  return (
    <View style={[style.wrapper, {marginTop: inset.top}]}>
      <Pressable onPress={goBack}>
        <Back />
      </Pressable>

      <View style={style.otherIcons}>
        {/* <Pressable onPress={onNavigate(LANDINGPROFILE)}> */}
        <Pressable onPress={onNavigate(PROFILE)}>
          <Image
            source={{uri: 'https://picsum.photos/id/1027/200/300'}}
            style={style.profileImage}
          />
        </Pressable>
      </View>
    </View>
  );
}
