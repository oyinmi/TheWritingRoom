import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';


export default StyleSheet.create({
    container: {
        backgroundColor: colors.white
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

    titleCon: {
        borderRadius: 10,
        borderWidth: 1,
        padding: 8,
        borderColor: colors.grey,
        marginHorizontal: 32,
        fontSize: 18,
        fontWeight: '400',
        marginTop: 10
    },

    title: {
        paddingTop: 10,
        textAlign: 'left',
    },

    postCon: {
        padding: 12,
        marginTop: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.grey,
        marginHorizontal: 32,
        fontSize: 14,
        fontWeight: '400',
    },

    post: {
        paddingTop: 10,
       
        textAlign: 'left',
    },

    btn: {
        marginTop: 30,
        marginLeft: 28,
        marginHorizontal: 28
    },

    btnText: {
        color: colors.white,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        paddingLeft: 10,
    },
});