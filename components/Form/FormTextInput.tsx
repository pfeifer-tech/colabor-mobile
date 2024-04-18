import { View, Pressable, Text, TextInput } from 'react-native'
import React, {useState, useMemo } from 'react'
import { MaterialIcons } from "@expo/vector-icons";

type KeyboardTypeOptions = 'default'| 'numeric'| 'email-address'| 'ascii-capable'| 'numbers-and-punctuation'| 'url'| 'number-pad'| 'phone-pad'| 'name-phone-pad'| 'decimal-pad'| 'twitter'| 'web-search';
type TextContentType = 'none'| 'URL'| 'addressCity'| 'addressCityAndState'| 'addressState'| 'countryName'| 'creditCardNumber'| 'emailAddress'| 'familyName'| 'fullStreetAddress'| 'givenName'| 'jobTitle'| 'location'| 'middleName'| 'name'| 'namePrefix'| 'nameSuffix'| 'nickname'| 'organizationName'| 'postalCode'| 'streetAddressLine1'| 'streetAddressLine2'| 'sublocality'| 'telephoneNumber'| 'username'| 'password'| 'newPassword'| 'oneTimeCode';

export default function FormTextInput({name, 
        form, 
        icon, 
        updateForm, 
        label, 
        onPress,
        keyboardType='default',
        contentType='none'
    }: {name: string, 
        form: any, 
        icon: keyof typeof MaterialIcons.glyphMap, 
        updateForm?: (name: string, value: string) => void, 
        label: string, 
        onPress?: () => void, 
        keyboardType?: KeyboardTypeOptions,
        contentType?: TextContentType
    }) {
    const [focussed, setFocussed] = useState(false)
    const [secure, setSecure] = useState(contentType=='password')
    function getRandom(array: any[]) {
        return array[Math.floor(Math.random() * array.length)]
    }

    function formatValue(value: any) {
        if(value instanceof Date) {
            return value.toDateString()
        }
        if(name=='phone'&&typeof value==='string') {
            if(value.replace(/[^\d]/g, "").length<4) {
                return value.replace(/[^\d]/g, "")
            }
            let phone = value.replace(/\D/g, '');
            const match = phone.match(/^(\d{1,3})(\d{0,3})(\d{0,4})(\d{0,4})$/);
            if (match) {
                phone = `(${match[1]}${match[2] ? ') ' : ''}${match[2]}${match[3] ? '-' : ''}${match[3]}${match[4] ? ' x' : ''}${match[4]}`;
            }
            return phone;
        }
        return value
    }

    const value = useMemo(() => {
        return name.split('.').reduce((a,b) => a?a[b]:undefined, form)
    }, [form, name])

    const placeholder = useMemo(() => {
        const haystack = name.toLowerCase()
        if(haystack.includes('name')) {
            if(haystack.includes('first')) {
                return getRandom(['Matthew', 'Mark', 'Luke', 'John', 'Peter', 'Paul', 'Barnabas', 'Deborah', 'Mary', 'Rachel', 'Rebecca', 'Sarah', 'Naomi', 'Hannah'])
            }
            if(haystack.includes('last')) {
                return getRandom(['Smith', 'Miller', 'Anderson', 'Davis', 'Lee', 'Clark', 'Wilson', 'Washer', 'McArthur', 'Piper', 'Lewis', 'Graham', 'Evans', 'Lawson', 'Keller'])
            }
        }
        else if(haystack.includes('date')||haystack.includes('day')) {
            return 'Select a date'
        }
        else if(haystack=='phone'||haystack=='phonenumber') {
            return '(555) 555-5555'
        }
        else if(haystack.includes('email')) {
            return 'example@email.com'
        }
        return label
    }, [name, label])

    if(!!onPress) {
      return <View style={{width: '100%', paddingVertical: 2}}>
        <Text style={{marginLeft: 14, fontWeight: '500', color: '#a7a7a7'}}>{label}</Text>
        <Pressable
            style={{flexDirection: 'row', marginHorizontal: 12, marginVertical: 8}}
            onPress={onPress}
        >
                <View style={{flexGrow: 1, 
                backgroundColor: '#fff', 
                flexDirection: 'row', 
                alignItems: 'center', 
                height: 44,
                paddingHorizontal: 8,
                borderLeftColor: value?'#52b84c':'#c0c0c0',
                borderLeftWidth: 5,
                borderBottomWidth: 1,
                borderBottomColor: focussed?'#346fe1':'#E8E8E8',
                borderRightWidth: 1,
                borderRightColor: '#E8E8E8'
            }}>
            <MaterialIcons name={icon} size={24} color='#919191' />
            {value&&<Text style={{color: '#919191', fontWeight: '500', marginLeft: 8}}>{formatValue(value)}</Text>}
            {!value&&<Text style={{color: '#c0c0c0', fontWeight: '400', marginLeft: 8}}>{placeholder}</Text>}
            </View>
        </Pressable>
        </View>
    }
    return <View style={{width: '100%', paddingVertical: 2}}>
        <Text style={{marginLeft: 14, fontWeight: '500', color: '#a7a7a7'}}>{label}</Text>
        <View style={{flexGrow: 1, 
            backgroundColor: '#fff', 
            flexDirection: 'row', 
            alignItems: 'center', 
            paddingHorizontal: 8,
            height: 44,
            marginHorizontal: 12, 
            marginVertical: 8,
            borderLeftColor: focussed?'#2684fc':(value?'#52b84c':'#c0c0c0'),
            borderLeftWidth: 5,
            borderBottomWidth: 1,
            borderBottomColor: '#E8E8E8',
            borderRightWidth: 1,
            borderRightColor: '#E8E8E8'
        }}>
            <MaterialIcons name={icon} size={24} color='#919191' />
            <TextInput style={{padding: 4, paddingLeft: 8, color: '#919191', fontWeight: value?'500':'400', flexGrow: 1}} 
                value={formatValue(value)} 
                keyboardType={keyboardType}
                onChangeText={(txt) => updateForm(name, txt)}
                placeholder={placeholder}
                placeholderTextColor='#c0c0c0'
                onFocus={()=>setFocussed(true)}
                onBlur={()=>setFocussed(false)}
                selectionColor={'#2684fc'}
                secureTextEntry={secure}
            />
            {contentType=='password'?<Pressable>
                <MaterialIcons name={secure?'visibility':'visibility-off'} size={24} color='#919191' onPress={()=>setSecure(!secure)} />
            </Pressable>:null}
        </View>
    </View>
}