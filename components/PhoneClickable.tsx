import { Text } from "react-native";
import * as Linking from 'expo-linking';

export default function PhoneClickable({phone}) {
    return <Text onPress={() => Linking.openURL(`tel:${phone}`)}>{phone}</Text>
}