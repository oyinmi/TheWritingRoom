import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cloudywhite,
  },

  logout: {
    color: colors.primary2,
    marginHorizontal: 32,
    marginVertical: 32,
    fontSize: 20,
    textAlign: 'right'
  }
});
