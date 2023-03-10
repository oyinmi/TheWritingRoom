import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';


export default StyleSheet.create({
    
    firstText: {
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 30,
        letterSpacing: 0,
        textAlign: 'center',
        paddingTop: 5,
    },

    secondText: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: 'left',
        paddingLeft: 30,
        paddingTop: 5,
        color: colors.primarytext,
    },

    firstName: {
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 26,
        letterSpacing: 0,
        textAlign: 'left',
        paddingTop: 15,
        paddingBottom: 5,
        color: colors.grey,
    },

    fnTextBox: {
        borderWidth: 2,
        borderRadius: 25,
        padding: 15,
        borderColor: colors.cloudywhite,
        paddingStart: 25,
        marginLeft: 25,
        marginRight: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    btn: {
        marginTop: 20,
    },

    btnText: {
        color: colors.white,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        paddingLeft: 10,
    },
});