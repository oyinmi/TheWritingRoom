import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.white,
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginBottom: 16,
    borderRadius: 8,
   shadowRadius: 3,
    ...Platform.select({
        ios: {
            shadowOpacity: 0.2,
            shadowOffset: {
                width: -2,
                height: 4,
            },
        },
        android: {
            elevation: 20,
        }
    })
  }
});
