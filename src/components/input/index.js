import {TextInput, StyleSheet, View, Text, Pressable} from 'react-native';
import colors from '../../assets/colors';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Input(props) {
  return (
    <View>
      {props.label && <Text style={styles.label}>{props.label}</Text>}
      <View style={styles.wrapper}>
        <TextInput
          style={[styles.input, props.error && styles.errorInput]}
          placeholder={props.label}
          placeholderTextColor={colors.greywhite}
          onChangeText={props.onChange}
          error={props.error}
          value={props.value}
          secureTextEntry={props.secureTextEntry}
          autoCapitalize='none'
        />
        {props.iconName && (
          <Pressable onPress={props.onIconClick}>
            <Icon name={props.iconName} color={colors.primarytext} size={16} />
          </Pressable>
        )}
      </View>
      {props.error && <Text style={styles.error}>{props.error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.primarytext,
    marginBottom: 8,
    marginTop: 12,
  },
  wrapper: {
    borderWidth: 2,
    borderRadius: 24,
    padding: 16,
    borderColor: colors.cloudywhite,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderWidth: 0,
    padding: 0,
    flex: 1,
    fontSize: 16,
  },
  errorInput: {
    borderColor: colors.red,
  },
  error: {
    fontSize: 16,
    color: colors.red,
  },
});
