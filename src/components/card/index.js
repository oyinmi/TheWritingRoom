import React from 'react';
import style from './style';
import {Pressable} from 'react-native';

export default function Card(props) {
  return (
    <Pressable onPress={props.onPress} style={style.container}>
        {props.children}
    </Pressable>
  );
}