import { Slot, useGlobalSearchParams } from "expo-router";
import { View } from "react-native";
import TabLink from "../../../../components/TabLink";

export default function ProfileLayout() {
    const {user} = useGlobalSearchParams();
    return <>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#fff', height: 48, alignItems: 'center'}}>
            <TabLink href={`/people/${user}/ProfileScreen`} text="Profile" />
            {/* <TabLink href={`/people/${user}/feedback`} text="Feedback" /> */}
            <TabLink href={`/people/${user}/notes`} text="Notes" />
        </View>
        <Slot />
    </>
}