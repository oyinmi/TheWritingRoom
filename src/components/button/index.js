import React from 'react';
import style from './style';
// import colors from '../../assets/colors';
import {TouchableOpacity} from 'react-native';

export default function Button(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={[style.container, props.style]}>
        {props.children}
    </TouchableOpacity>
  );
}
