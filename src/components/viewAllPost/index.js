import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {FlatList, View, Text} from 'react-native';
import { ALL_POST_URL } from '../../util/request/api';
import {request, GET_METHOD} from '../../util/request';
import { ActivityIndicator } from 'react-native';
import Card from '../card';
import colors from '../../assets/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import { VIEWARTICLE } from '../../constants/routeNames';
// import {ONEPOST} from '../../constants/routeNames';

const ViewAllPost = () => {
    const {navigate} = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
    const [articleData, setArticleData] = useState([]);

    useEffect(()=>{
        getArticleData();
    }, []);

    async function getArticleData() {
        const response = await request( ALL_POST_URL, GET_METHOD);
        if (response){
            setArticleData(response);
        }
        setIsLoading(false);
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
          <FlatList
          data={articleData}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return(
              <View style={{ marginHorizontal: 16,  marginTop: 10}}>
                <Card>
                  <Text style={{ fontSize: 18}}>{item.title}</Text>
                  <Text style={{ color:colors.grey,  marginTop: 10}}>{item.body}</Text> 
                  <View style={{paddingTop: 5, justifyContent: 'space-between', flexDirection:'row'}}>
                      <Icon name="eye" color={colors.primary} size={22} onPress={() => onView(item)}/>
                  </View> 
                </Card>
              </View>
            )
          }} 
        />
    );
}


export default ViewAllPost;