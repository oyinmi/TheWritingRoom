import React, {useState, useEffect} from "react";
import { 
    View, Text, ScrollView,
    TouchableOpacity, StatusBar 
} from "react-native";
import {request, GET_METHOD} from '../../util/request';
import { COMMENT_URL } from '../../util/request/api';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation, useRoute} from '@react-navigation/native';
import colors from "../../assets/colors";
import Back from "../../assets/icons/back";
import style from "./style";

export default function ViewArticle() {
    const { goBack} = useNavigation();
    const { params } = useRoute();
    const inset = useSafeAreaInsets();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComents();
    }, []);

    async function getComents() {
        const response = await request(COMMENT_URL(params.id), GET_METHOD);
        setComments(response);
    }

    return(
        <View style={{paddingTop: inset.top, marginBottom: inset.bottom}}>
            <StatusBar backgroundColor={colors.white} barStyle="dark-content" animated />
            <ScrollView
                style={style.containe}
            >
                    <TouchableOpacity
                        style={{
                            padding: 10,
                            borderRadius: 50,
                            marginRight: 340,
                            marginLeft: 15,
                        }}
                        onPress={goBack}
                    >
                        <Back />
                    </TouchableOpacity>

                    <Text style={style.title}>{params.title}</Text>
                    
                    <Text style={style.body}>{params.body}</Text>
                    <Text style={style.commentTitle}>Comments</Text>
                    {comments.map(comment => (
                        <View style={style.commentBody}>
                            <Text style={style.commentDetails}>
                                {comment.body}
                            </Text>
                            <Text style={style.commentAuthor}>
                                Author: {comment.email}
                            </Text>
                        </View>
                    ))}
            </ScrollView>
        </View>
    )
}