import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect, useContext} from 'react';
import {FlatList, View, Text, StatusBar, ScrollView, TouchableOpacity} from 'react-native';
import { DEL_POST_URL, USER_POST_URL } from '../../util/request/api';
import {request, GET_METHOD, DELETE_METHOD} from '../../util/request';
import { authContext } from "../../components/authContext";
import { ActivityIndicator } from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Card from '../../components/card';
import colors from '../../assets/colors';
import Header from '../../components/header';
import Icon from 'react-native-vector-icons/AntDesign';
import { showMessage } from "react-native-flash-message";
import { EDITPOST, VIEWARTICLE } from '../../constants/routeNames';


const MyPost = ({route}) => {
    const {navigate, goBack} = useNavigation();
    const inset = useSafeAreaInsets();
    const [isLoading, setIsLoading] = useState(false);
    const [articleData, setArticleData] = useState([]);
    const { user } = useContext(authContext);
    

    useEffect(()=>{
        getArticleData();
    }, []);

    async function getArticleData() {
        console.log(user)
        const response = await request(`${USER_POST_URL}${user.id}`, GET_METHOD);
        if (response){
            setArticleData(response);
        }
        setIsLoading(false);
    }

    async function onDeletePost(id) {
        await request(`${DEL_POST_URL}${id}`, DELETE_METHOD);
        setArticleData(prevState => prevState.filter(post => post.id !== id));
        showMessage({
            message: 'Article deleted successfully',
            type: 'info',
        });
    }

    function onEditPost(item) {
        navigate(EDITPOST, {
            title: item.title,
            body: item.body,
            id: item.id
        });
    }

    function onView(item) {
        navigate(VIEWARTICLE, {
            title: item.title,
            body: item.body,
            id: item.id
        });
    }

    if (isLoading) {
        return <ActivityIndicator />;
    }

    return (
        <>
            <StatusBar backgroundColor={colors.white} barStyle="dark-content" animated />
        
            <Header />
                <FlatList
                    data={articleData}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => {
                        return(
                        <ScrollView style={{ marginHorizontal: 16,  marginTop: 10}}>
                            <Card>
                                <Text style={{ fontSize: 18}}>{item.title}</Text>
                                <Text style={{ color:colors.grey,  marginTop: 10}}>{item.body}</Text>  
                                <View style={{paddingTop: 5, justifyContent: 'space-between', flexDirection:'row'}}>
                                    <Icon name="edit" color={colors.primary2} size={22} onPress={() => onEditPost(item)} />
                                    <Icon name="eye" color={colors.primary} size={22} onPress={() => onView(item)}/>
                                    <Icon name="delete" color={colors.red} size={22} onPress={() => onDeletePost(item.id)}/>
                                </View>
                            </Card>
                        </ScrollView>
                        )
                    }} 
                />
            
        </>
        
    );
}


export default MyPost;