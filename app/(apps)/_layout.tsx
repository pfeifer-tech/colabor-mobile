import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Pressable, View } from "react-native";


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
                    <View style={{flexDirection: 'row'}}>
                        <Pressable onPress={() => console.log('Search')}>
                            <MaterialIcons name="search" size={24} color="#fff" style={{paddingLeft: 8, paddingRight: 8}} />
                        </Pressable>
                        <MaterialIcons name="menu" size={24} color="#fff" style={{paddingLeft: 8, paddingRight: 8}} />
                    </View>
                ),
                headerStyle: {
                    backgroundColor: '#3A3D4B',
                },
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="apps" size={size} color={color} />
                ),
                tabBarLabel: 'Apps',
            }}
        />
    </Tabs>
}