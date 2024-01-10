import { Link, usePathname } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

type TabProps = {
    href: string; 
    text: string;
}

export default function TabLink({href, text}: TabProps) {
    const pathname = usePathname();
    const styles = StyleSheet.create({
        link: {
            fontWeight: '500', 
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            height: 48,
            paddingLeft: 20, 
            paddingRight: 20
        },
        text: {
            borderBottomWidth: 1, 
            borderColor: href===pathname?'#000':'rgba(0,0,0,0)'
        }
    })

    return <Link href={href} >
        <View style={styles.link}><Text style={styles.text}>{text}</Text></View>
    </Link>
}