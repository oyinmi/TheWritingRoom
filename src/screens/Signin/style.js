import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';


export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },

    firstText: {
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 30,
        letterSpacing: 0,
        textAlign: 'left',
        paddingTop: 10,
        paddingBottom: 10,
    },

    forgotPassword: {
        textAlign: 'right',
        padding: 20,
        color: colors.primary1,
    },
    
    btnText: {
        color: colors.white,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        paddingLeft: 10,
    },

    btn: {
        marginTop: 16,
    },

    line: {
        height: 2,
        flex: 1,
        backgroundColor: colors.greyWhite,
    },

    orText: {
        marginHorizontal: 8
    },

    underline: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16,
    },

    icon: {
        flexDirection: 'row',
    },

});