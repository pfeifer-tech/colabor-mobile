import { Text } from 'react-native'
import moment from 'moment';
import { Children, ReactNode } from 'react';

export default function TimeSince({children}: {children?: ReactNode}) {
    if(!children) {return <Text></Text>;}
    const time: string = ''+Children.map(children, child => child)[0]
    const days = moment().diff(time, 'days')
    const weeks = moment().diff(time, 'weeks')
    const months = moment().diff(time, 'months')
    const years = moment().diff(time, 'years')

    if (days < 7) {
        return <Text>{days}d</Text>
    } else if (weeks < 4) {
        return <Text>{weeks}wk</Text>
    } else if (months < 12) {
        return <Text>{months}mo</Text>
    } else if (years > 0) {
        return <Text>{years}yr</Text>
    }
}