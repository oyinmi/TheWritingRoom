import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import Input from '../input';
import PropTypes from 'prop-types';

export default function Picker(props) {
  return (
    <RNPickerSelect
      onValueChange={props.onChange}
      items={props.items || []}
      placeholder={{label: props.placeholder, value: props.placeholder}}
      pickerProps={{
        onBlur: props.onBlur,
      }}
      value={props.value}>
      <Input
        value={props.items.find(item => item.value === props.value)?.label}
        label={props.label}
        error={props.error}
        iconName="chevron-down"
        disabled
      />
    </RNPickerSelect>
  );
}

Picker.defaultProps = {
  items: [],
};

Picker.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.number,
    }),
  ),
};
