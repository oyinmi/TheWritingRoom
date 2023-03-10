import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';


export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
    },

    title: {
        paddingTop: 10,
        fontSize: 20,
        fontWeight: "bold",
        marginHorizontal: 32,
        marginBottom: 32
    },

    commentTitle: {
        paddingTop: 32,
        fontSize: 16,
        fontWeight: "bold",
        marginHorizontal: 32,
        marginBottom: 32,
        textDecorationLine: 'underline'
    },

    commentDetails: {
        fontSize: 16,
        marginBottom: 8,
    },

    commentBody: {
        marginHorizontal: 32,
        marginBottom: 16,
        padding: 8,
    },

    commentAuthor: {
        fontSize: 14,
        fontWeight: "bold",
    },

    body: {
        marginHorizontal: 32,
        fontSize: 16,
        fontWeight: '400',
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