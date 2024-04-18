import { MaterialIcons } from "@expo/vector-icons";
import { Link, Stack, useGlobalSearchParams } from "expo-router";
import { Pressable, View } from "react-native";
import UserNavMenu from "../../../components/UserNavMenu";

export default function PeopleLayout() {
    const { user } = useGlobalSearchParams();

    return <Stack>
        <Stack.Screen name="PeopleScreen"
            options={{
                animation: 'none',
                headerTintColor: '#fff',
                headerTitle: 'People',
                headerRight: () => (
                    <View style={{ flexDirection: 'row' }}>
                        <Link href="/people/AddUserScreen" style={{ padding: 8 }}>
                            <MaterialIcons name="person-add" size={24} color="#fff" />
                        </Link>
                        <UserNavMenu />

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
                    <View style={{ flexDirection: 'row' }}>
                        <UserNavMenu />

                    </View>
                ),
                headerStyle: {
                    backgroundColor: '#3A3D4B',
                }
            }}
        />
        <Stack.Screen name="EditUserScreen"
            options={{
                animation: 'none',
                headerTintColor: '#fff',
                headerTitle: 'Edit User',
                headerRight: () => (
                    <View style={{ flexDirection: 'row' }}>
                        <UserNavMenu />

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
                headerTitle: user + '',
                headerRight: () => (
                    <View style={{ flexDirection: 'row' }}>
                        <Link href="/people/PeopleScreen" style={{padding: 8}}>
                            <MaterialIcons name="search" size={24} color="#fff" />
                        </Link>
                        <UserNavMenu />

                    </View>
                ),
                headerStyle: {
                    backgroundColor: '#3A3D4B',
                }
            }}
        />
    </Stack>
}