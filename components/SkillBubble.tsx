import { View, Text } from 'react-native'
import React, {ReactNode} from 'react'

export default function SkillBubble({children}: {children: ReactNode}) {
    const style = {
        backgroundColor: '#CCC', 
        color: '#5E5E5E',
        borderRadius: 100, 
        paddingTop: 2, 
        paddingBottom: 2, 
        paddingLeft: 6, 
        paddingRight: 6, 
        fontSize: 11
    }
    return (
        <View style={{marginLeft: 2, marginRight: 2}}>
            <Text style={style}>{children}</Text>
        </View>
    )
}