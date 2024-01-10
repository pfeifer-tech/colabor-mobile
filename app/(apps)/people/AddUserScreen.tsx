import { View, Text, Pressable } from 'react-native'
import React, {useState} from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { MaterialIcons } from "@expo/vector-icons";
import DateTimePicker from '@react-native-community/datetimepicker';

function FormTextInput({name, icon, value, updateForm, placeholder, onPress}: {name: string, icon: string, value: string, updateForm: (name: string, value: string) => void, placeholder: string, onPress?: () => void}) {
  if(!!onPress) {
    return <Pressable 
      style={{backgroundColor: '#fff', flexDirection: 'row', margin: 12}}
      onPress={onPress}
    >
      <View style={{flexGrow: 1, backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center', padding: 4}}>
        <MaterialIcons name={icon} size={24} color='#919191' />
        <TextInput style={{color: '#919191'}} 
          placeholder={placeholder}
          value={value} 
          onChangeText={(txt) => updateForm(name, txt)} 
          editable={false}
        />
      </View>
    </Pressable>
  }
  return <View style={{flexGrow: 1, backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center', padding: 4, margin: 12}}>
    <MaterialIcons name={icon} size={24} color='#919191' />
    <TextInput style={{padding: 4, color: '#919191', flexGrow: 1}} 
      placeholder={placeholder}
      value={value} 
      onChangeText={(txt) => updateForm(name, txt)}
    />
  </View>
}


export default function AddUserScreen() {
  const [form, setForm] = useState({firstName: '', lastName: '', birthday: new Date()})
  
  function updateForm(name: string, value: string) {
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const [showBirthdayPicker, setShowBirthdayPicker] = useState(false)

  function onChange({type}, selectedDate) {
    if(type === 'set') {
      setShowBirthdayPicker(false)
      updateForm('birthday', selectedDate)
    }
  }

  return (
    <View style={{backgroundColor: 'EFEFEF'}}>
        <View style={{flexDirection: "column", alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 20}}>
          <FormTextInput name="firstName" icon='person' value={form.firstName} updateForm={updateForm} placeholder='First Name' />
          <FormTextInput name="lastName" icon='person' value={form.lastName} updateForm={updateForm} placeholder='Last Name' />
          <FormTextInput name="birthday" icon='cake' value={form.birthday.toDateString()} 
            updateForm={updateForm} placeholder='Birthday' 
            onPress={() => setShowBirthdayPicker(true)} 
          />
          
          
          {showBirthdayPicker&&<DateTimePicker
            mode="date"
            value={form.birthday}
            onChange={onChange}
          />}
        </View>
    </View>
  )
}