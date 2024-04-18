import { Pressable, View, Text } from 'react-native'
import React from 'react'
import FormTextInput from './Form/FormTextInput';
import { useForm } from '../hooks/useForm';
import { router } from 'expo-router';

export default function SignIn() {
    const {form, updateForm} = useForm()

    async function submitForm() {
        const response = await fetch('https://colabor-auth.vercel.app/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        if(response.status !== 200) {
            return alert('Email or password is incorrect. Please try again.')
        }
        
        router.replace('/home')    
    }

    return (
        <View style={{flex: 1}}>
            <View>
                <FormTextInput form={form} updateForm={updateForm} name="email" icon="person" label="Email" />
                <FormTextInput form={form} updateForm={updateForm} name="password" icon="lock" label="Password" contentType='password' />
            </View>

            <Pressable
                onPress={submitForm}
                style={{backgroundColor: '#346fe1', padding: 12, margin: 12, alignItems: 'center', justifyContent: 'center', borderRadius: 8}}
            >
                <Text style={{color: '#fff', fontWeight: '600', fontSize: 16}}>Submit</Text>
            </Pressable>
        </View>
    )
}