import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 16,
    justifyContent: 'space-between',
  },

  otherIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  icon: {
    marginLeft: 16,
    height: 32,
    width: 32,
    borderRadius: 16,
    backgroundColor: colors.pinkFade,
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileImage: {
    marginLeft: 16,
    height: 30,
    width: 30,
    borderRadius: 15,
  },
});
