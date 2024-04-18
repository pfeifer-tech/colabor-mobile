import { View, Text } from 'react-native'
import React from 'react'
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from 'expo-router';
import SignUp from '../components/SignUp';

export default function SignUpScreen() {
    return (
        <View style={{ flex: 1, paddingVertical: 32, backgroundColor: '#031C33' }}>
            <View style={{ paddingTop: 40, paddingBottom: 10, alignItems: 'center', justifyContent: 'center' }}>
                <MaterialIcons name="people" size={48} color='#CCC' />
                <Text style={{ fontSize: 36, fontWeight: '600', color: '#fff' }}>Co Labor</Text>
            </View>

            <View style={{ height: 440, paddingTop: 20, margin: 20, justifyContent: 'center', backgroundColor: '#f7f7f7' }}>
                <SignUp />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={{ color: '#AFAFAF', paddingVertical: 4}}>Already have an account?</Text>
                <Link href="/" style={{ color: '#fff', paddingHorizontal: 8, paddingVertical: 4}}>Sign In</Link>

            </View>
        </View>
    )
}