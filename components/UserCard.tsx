import { Text, View, Image } from 'react-native'
import { Link } from 'expo-router';
import TimeSince from './TimeSince';
import SkillBubble from './SkillBubble';


export default function UserCard({item}: {item: any}) {
    const {skills} = item;
  
    return <View style={{marginTop: 8, marginBottom: 8, marginLeft: 6, marginRight: 6}}>
        <Link href={`/people/${item.name}/ProfileScreen`}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={{uri: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`}} style={{width: 48, height: 48, borderRadius: 100}} />
                <View style={{marginLeft: 8}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontWeight: '600'}}>{item.name}</Text>
                    <Text style={{color: '#919191', marginLeft: 8}}>
                        <TimeSince>{item.lastActive}</TimeSince> @ Westridge Mall
                    </Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 6}}>
                    {skills.map((skill: string) => <SkillBubble key={skill}>{skill}</SkillBubble>)}
                </View>
                </View>
            </View>
        </Link>
    </View>
}