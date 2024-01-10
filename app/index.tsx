import { View, ImageBackground, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

const index = () => {
    const router = useRouter()
    return (
        <View style={{flex: 1}}>
            <ImageBackground style={{flex: 1, justifyContent: 'center'}} source={image} resizeMode="cover">
                <Button title="Register" onPress={() => router.push('home')} />
            </ImageBackground>
        </View>
    )
}

export default index