import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useState } from 'react';
import { View, Text, Image, Pressable } from "react-native";

export default function Accordion({title='Title', editPath, children}) {
    const [expanded, setExpanded] = useState(false)

    return <View style={{backgroundColor: '#fff', margin: 8}}>
        <Pressable onPress={() => setExpanded(!expanded)}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 4, paddingRight: 4, paddingTop: 8, paddingBottom: 8}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontWeight: '600', fontSize: 16}}>{title}</Text>
                    {editPath&&expanded?<Link style={{marginLeft: 10, paddingLeft: 10, paddingRight: 10}} href={editPath}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <MaterialIcons style={{color: '#DDDCDC'}} name="edit" size={16} />
                            <Text style={{color: '#DDDCDC'}}>Edit</Text>
                        </View>
                    </Link>:null}
                </View>
                <MaterialIcons name={expanded?'expand-less':'expand-more'} size={24} />
            </View>
        </Pressable>
        <View style={{padding: 4, marginTop: -8, display: expanded?'flex':'none'}}>
            {children}
        </View>
    </View>
}