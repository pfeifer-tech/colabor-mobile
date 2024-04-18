import { MaterialIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Pressable, View } from "react-native";
import UserNavMenu from "../../../components/UserNavMenu";

export default function PeopleLayout() {
    return <Stack
        screenOptions={{
            animation: 'none',
            headerTintColor: '#fff',
            headerTitle: "Co Labor",
            headerRight: () => (
                <View style={{flexDirection: 'row'}}>
                    <Pressable onPress={() => console.log('Search')} style={{padding: 8}}>
                        <MaterialIcons name="search" size={24} color="#fff" />
                    </Pressable>
                    <UserNavMenu />
                </View>
            ),
            headerStyle: {
                backgroundColor: '#3A3D4B',
            }
        }}
    />
}