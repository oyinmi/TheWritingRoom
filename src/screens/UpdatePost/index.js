import React, {useState, useEffect, useContext} from "react";
import { 
    View, Text, ScrollView,
    TouchableOpacity, StatusBar, TextInput 
} from "react-native";
import { MYPOST } from "../../constants/routeNames";
import {request, PUT_METHOD} from '../../util/request';
import { UPDATE_POST_URL } from '../../util/request/api';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation, useRoute} from '@react-navigation/native';
import { showMessage } from "react-native-flash-message";
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import colors from "../../assets/colors";
import Back from "../../assets/icons/back";
import style from "./style";
import Button from "../../components/button";
import { authContext } from "../../components/authContext";



export default function UpdatePost() {
    const {navigate, goBack} = useNavigation();
    const { params } = useRoute();
    const inset = useSafeAreaInsets();
    const {height} = useWindowDimensions();
    const [title, setTitle] = useState(params.title);
    const [body, setBody] = useState(params.body);
    const { user } = useContext(authContext);

    async function onUpdate() {
        if (title && body && params.id) {
            const response = await request(`${UPDATE_POST_URL}${params.id}`, PUT_METHOD, {
                title,
                body,
                id: params.id,
                userId: user.id
            });
            if (response) {
                showMessage({
                    message: 'Article updated successfully',
                    type: 'info',
                });
                setBody(response.body);
                setTitle(response.title)
            }
            navigate(MYPOST)
        }
    }

    return(
        <>
            <StatusBar backgroundColor={colors.white} barStyle="dark-content" animated />
            <ScrollView
                style={[
                    style.container,
                    {paddingTop: inset.top, paddingBottom: inset.bottom},
                ]}
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

                <TextInput 
                    style={style.titleCon}
                    multiline
                    numberOfLines={4}
                    placeholder="Title"
                    value={title}
                    onChangeText={setTitle}
                />

                <View style={style.postCon}>
                    <TextInput 
                        style={[style.post, {height: (height - 32) / 2}]}
                        multiline
                        numberOfLines={4}
                        placeholder="What is on your mind"
                        value={body}
                        onChangeText={setBody}
                    />
                </View>

                <View style={style.btn}>
                    <Button onPress={onUpdate}> 
                        <Text style={style.btnText}>Update Article</Text>   
                    </Button>
                </View>
                
            
            </ScrollView>
        </>
    )
}