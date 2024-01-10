import { MaterialIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Pressable, View } from "react-native";

export default function PeopleLayout() {
    return <Stack
        screenOptions={{
            animation: 'none',
            headerTintColor: '#fff',
            headerTitle: "Co Labor",
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
            }
        }}
    />
}