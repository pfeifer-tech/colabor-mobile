import { View, Text } from "react-native";
import PhoneClickable from "./PhoneClickable";

export default function ContactMethod({phone, email}) {
    return <View style={{padding: 4, marginTop: -8}}>
        <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 12, paddingRight: 12, paddingTop: 8, paddingBottom: 8}}>
            <Text style={{marginRight: 8}}>Phone</Text>
            <PhoneClickable phone={phone} />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 12, paddingRight: 12, paddingTop: 8, paddingBottom: 8}}>
            <Text style={{marginRight: 8}}>Email</Text>
            <PhoneClickable phone={phone} />
        </View>
    </View>
}