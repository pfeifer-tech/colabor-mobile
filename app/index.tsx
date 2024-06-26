import { View, Text } from 'react-native'
import React from 'react'
import SignIn from '../components/SignIn';
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from 'expo-router';

export default function App() {
    return (
        <View style={{ flex: 1, paddingVertical: 32, backgroundColor: '#031C33' }}>
            <View style={{ paddingTop: 80, paddingBottom: 20, alignItems: 'center', justifyContent: 'center' }}>
                <MaterialIcons name="people" size={48} color='#CCC' />
                <Text style={{ fontSize: 36, fontWeight: '600', color: '#fff' }}>Co Labor</Text>
            </View>

            <View style={{ height: 280, paddingTop: 20, margin: 20, justifyContent: 'center', backgroundColor: '#f7f7f7' }}>
                <SignIn />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={{ color: '#AFAFAF', paddingVertical: 4}}>Don't have an account?</Text>
                <Link href="/signup" style={{ color: '#fff', paddingHorizontal: 8, paddingVertical: 4}}>Sign up</Link>

            </View>
        </View>
    )
}