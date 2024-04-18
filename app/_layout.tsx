import { Stack } from "expo-router";

export default function Layout() {
    return <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index"
            options={{
                animation: 'none',
            }}
        />
        <Stack.Screen name="(apps)"
            options={{
                animation: 'none',
            }} 
        />
    </Stack>
}