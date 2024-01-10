import { MaterialIcons } from "@expo/vector-icons";
import { Link, Stack, useGlobalSearchParams } from "expo-router";
import { Pressable, View } from "react-native";

export default function PeopleLayout() {
    const {user} = useGlobalSearchParams();

    return <Stack>
        <Stack.Screen name="PeopleScreen" 
            options={{
                animation: 'none',
                headerTintColor: '#fff',
                headerTitle: 'People',
                headerRight: () => (
                    <View style={{flexDirection: 'row'}}>
                        <Link href="/people/AddUserScreen">
                            <MaterialIcons name="person-add" size={24} color="#fff" style={{paddingLeft: 8, paddingRight: 8}} />
                        </Link>
                        <MaterialIcons name="menu" size={24} color="#fff" style={{paddingLeft: 8, paddingRight: 8}} />
                    </View>
                ),
                headerStyle: {
                    backgroundColor: '#3A3D4B',
                }
            }}
        />
        <Stack.Screen name="AddUserScreen" 
            options={{
                animation: 'none',
                headerTintColor: '#fff',
                headerTitle: 'Add User',
                headerRight: () => (
                    <View style={{flexDirection: 'row'}}>
                        <MaterialIcons name="menu" size={24} color="#fff" style={{paddingLeft: 8, paddingRight: 8}} />
                    </View>
                ),
                headerStyle: {
                    backgroundColor: '#3A3D4B',
                }
            }}
        />
        <Stack.Screen name="[user]"
            options={{
                animation: 'none',
                headerTintColor: '#fff',
                headerTitle: user+'',
                headerRight: () => (
                    <View style={{flexDirection: 'row'}}>
                        <Link href="/people/PeopleScreen">
                            <MaterialIcons name="search" size={24} color="#fff" style={{paddingLeft: 8, paddingRight: 8}} />
                        </Link>
                        <MaterialIcons name="menu" size={24} color="#fff" style={{paddingLeft: 8, paddingRight: 8}} />
                    </View>
                ),
                headerStyle: {
                    backgroundColor: '#3A3D4B',
                }
            }}
        />
    </Stack>
}