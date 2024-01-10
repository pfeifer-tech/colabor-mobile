import { useGlobalSearchParams } from "expo-router";
import { View, Text, Image } from "react-native";
import DynamicComponents from "../../../../components/DynamicComponents";
import { useEffect, useState } from "react";


export default function ProfileScreen() {
    const {user} = useGlobalSearchParams();
    const [dynamicData, setDynamicData] = useState(null)

    useEffect(() => {
        fetch(`http://192.168.50.224:3000/profile`)
        .then(async res => {
            setDynamicData(await res.json())
        })
        .then(console.log)
    }, [])

    return <>
        <View style={{backgroundColor: 'EFEFEF'}}>
            <View style={{flexDirection: "column", alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 20}}>
                <Image source={{uri: 'https://xsgames.co/randomusers/avatar.php?g=male'}} style={{width: 160, height: 160, borderRadius: 100}} />
                <Text style={{fontSize: 18, fontWeight: '500'}}>{user}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontSize: 14}}>aka</Text>
                    <Text style={{fontSize: 16, color: '#919191', paddingLeft: 4}}>{(user+'').split(' ')[0]}</Text>
                </View>
            </View>
            {dynamicData?<DynamicComponents {...dynamicData} />:null}
        </View>
    </>
}