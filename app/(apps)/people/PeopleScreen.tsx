import { View, TextInput, Text, Pressable } from 'react-native'
import React, { Suspense, useEffect, useMemo, useState } from 'react'
import { FlashList } from "@shopify/flash-list";
import UserCard from '../../../components/UserCard';
import { MaterialIcons } from "@expo/vector-icons";
import { Link, router } from 'expo-router';


type User = {
  username: string,
  firstName: string,
  lastName: string,
  lastActive: string,
  skills?: string[],
  pathStatus?: number, // bitwise indication of major milestones
}



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
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const getData = setTimeout(() => {
      fetch(`https://colabor-admin.vercel.app/api/people?pageLimit=10&query=${text}`)
        .then(response => response.json())
        .then(data => {
          setUsers(data.data)
        })
    }, 1000)

    return () => clearTimeout(getData)
  }, [text])

  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexGrow: 1, backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center', padding: 4, margin: 12 }}>
          <MaterialIcons name="search" size={24} color='#919191' />
          <TextInput style={{ padding: 4, color: '#919191', flexGrow: 1 }}
            placeholder='Search'
            value={text}
            onChangeText={(searchString) => setText(searchString)}
            placeholderTextColor={'#c0c0c0'}
          />
        </View>
      </View>

      <View style={{ height: 600 }}>
        <Suspense fallback={<Text>Loading...</Text>}>
          {users&&!users.length?<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontWeight: '600', color: '#727272', fontSize: 16, height: 80}}>No users found</Text>

            {/* <Pressable style={{flexDirection: 'row', backgroundColor: '#346fe1', paddingVertical: 8, paddingHorizontal: 12, margin: 12, alignItems: 'center', justifyContent: 'center', borderRadius: 8}}
              onPress={(()=> router.push('/people/AddUserScreen'))}
            >
              <Text style={{fontSize: 16, lineHeight: 24, justifyContent: 'flex-start', color: '#fff', fontWeight: '600', marginRight: 6}}>Add User</Text>
              <View>
                <MaterialIcons name="person-add" size={24} color="#fff" />
              </View>
            </Pressable> */}
          </View>:null}
          {users&&users.length?<FlashList
            data={users}
            renderItem={UserCard}
            estimatedItemSize={200}
          />:null}
        </Suspense>
      </View>
    </View>
  )
}