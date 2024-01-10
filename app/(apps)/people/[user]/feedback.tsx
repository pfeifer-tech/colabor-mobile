import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function FeedbackScreen() {

    const [pressed, setPressed] = useState(false)
    return <>
        <View style={{backgroundColor: 'EFEFEF'}}>
            <Pressable onPress={() => setPressed(!pressed)}>
                <MaterialIcons name="qr-code-2" size={24} />
                <Text>Feedback</Text>
            </Pressable>
        </View>
    </>
}