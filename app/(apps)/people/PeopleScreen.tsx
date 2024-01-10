import { View, TextInput, Text } from 'react-native'
import React, { useState } from 'react'
import { FlashList } from "@shopify/flash-list";
import UserCard from '../../../components/UserCard';
import { MaterialIcons } from "@expo/vector-icons";


type User = {
  username: string,
  name: string,
  lastActive: string,
  skills: string[],
  pathStatus: number,
}

const users = [
  {username: 'johndoe', name: 'John Doe', lastActive: '2023-11-01', skills: ['Bubble Tech'], pathStatus: 0},
  {username: 'bobman', name: 'Bob', lastActive: '2022-05-13', skills: ['Blender'], pathStatus: 8},
  {username: 'fredster', name: 'Fred', lastActive: '2023-10-13', skills: ['Register'], pathStatus: 24},
  {username: 'georgeyboy', name: 'George', lastActive: '2023-05-13', skills: ['Jammer'], pathStatus: 1},
]

enum PathStatus {
  NO_STATUS = 0,
  OPOSITIONAL = 1,
  INTERESTED = 2,
  VOLUNTEERING = 4,
  IN_GROUP = 8,
  BELIEVER = 16,
  BAPTIZED = 32,
  DISCIPLING = 64,
  EVANGELIZING = 128,
}

enum Skill {
  BUBBLE_TECH = 0,
  BLENDER = 1,
  REGISTER = 2,
  JAMMER = 3,
}

function hasStatus(status: number, statusToCheck: PathStatus): boolean {
  return (status & statusToCheck) === statusToCheck
}

export default function PeopleScreen() {
  const [text, setText] = useState('')

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flexGrow: 1, backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center', padding: 4, margin: 12}}>
          <MaterialIcons name="search" size={24} color='#919191' />
          <TextInput style={{padding: 4, color: '#919191', flexGrow: 1}} 
            placeholder='Search'
            value={text} 
            onChangeText={(searchString) => setText(searchString)} 
          />
        </View>
      </View>

      <View style={{height: 600}}>
        <FlashList 
          data={users.filter(user => user.name.toLowerCase().includes(text.toLowerCase()))} 
          renderItem={UserCard}
          estimatedItemSize={200}
        />
      </View>
    </View>
  )
}