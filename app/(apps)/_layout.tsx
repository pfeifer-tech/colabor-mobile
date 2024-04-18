import { MaterialIcons } from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";
import { Pressable, View, Text } from "react-native";
import UserNavMenu from "../../components/UserNavMenu";


export default function TabLayout() {
    return <Tabs screenOptions={{tabBarHideOnKeyboard: true}}>
        <Tabs.Screen 
            name="home" 
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="home" size={size} color={color} />
                ),
                tabBarLabel: 'Home',
            }}
        />
        <Tabs.Screen 
            name="people" 
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="people" size={size} color={color} />
                ),
                tabBarLabel: 'People',
            }}
        />
        <Tabs.Screen
            name="index"
            options={{
                headerTintColor: '#fff',
                headerTitle: "Apps",
                headerRight: () => (
                    <View style={{flexDirection: 'row', paddingRight: 16}}>
                        <Pressable onPress={() => console.log('Search')} style={{padding: 8}}>
                            <MaterialIcons name="search" size={24} color="#fff" />
                        </Pressable>
                        <UserNavMenu />
                    </View>
                ),
                headerStyle: {
                    backgroundColor: '#3A3D4B'
                },
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="apps" size={size} color={color} />
                ),
                tabBarLabel: 'Apps',
            }}
        />
    </Tabs>
}