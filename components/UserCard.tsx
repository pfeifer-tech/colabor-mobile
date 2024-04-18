import { Text, View, Image } from 'react-native'
import { Link } from 'expo-router';
import TimeSince from './TimeSince';
import SkillBubble from './SkillBubble';
import { MaterialIcons } from "@expo/vector-icons";


export default function UserCard({item}: {item: any}) {
    const {skills, url} = item;
    //`https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`
  
    return <View style={{marginTop: 8, marginBottom: 8, marginLeft: 6, marginRight: 6}}>
        <Link href={`/people/${item.firstName} ${item.lastName}/ProfileScreen`}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {url?<Image source={{uri: url}} style={{width: 48, height: 48, borderRadius: 100}} />:<MaterialIcons name="account-circle" size={48} color={'#ccc'} />}
                <View style={{marginLeft: 8}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontWeight: '600'}}>{item.firstName} {item.lastName}</Text>
                    <Text style={{color: '#919191', marginLeft: 8}}>
                        <TimeSince>{item.lastActive}</TimeSince> @ Westridge Mall
                    </Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 6}}>
                    {skills&&skills.map((skill: string) => <SkillBubble key={skill}>{skill}</SkillBubble>)}
                </View>
                </View>
            </View>
        </Link>
    </View>
}