import { View, Text } from 'react-native'
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from 'expo-router';

const apps = [
  {name: 'People', description: 'People', icon: 'people', path: '/people/PeopleScreen'},
  {name: 'Tasks', description: 'Tasks', icon: 'add-task'},
  {name: 'Events', description: 'Events', icon: 'event'},
  {name: 'Schedule', description: 'Schedule', icon: 'schedule'},
]

function AppIcon({name, description, icon, path='/'}, key: number) {
  return (
    <Link href={path} key={key} style={{padding: 8, margin: 4}}>
      <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <MaterialIcons name={icon||'open-in-new'} size={32} style={{color: '#727272'}} />
        <Text style={{color: '#727272'}}>{name}</Text>
      </View>
    </Link>
  )
}

const index = () => {
  return (
    <View style={{flexDirection: 'column'}}>
      <View style={{paddingLeft: 12, paddingRight: 12}}>
        <Text style={{marginTop: 12, marginBottom: 12, fontWeight: '600'}}>Effeciency</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
          {apps.map(AppIcon)}
        </View>
      </View>
      <View style={{paddingLeft: 12, paddingRight: 12}}>
        <Text style={{marginTop: 12, marginBottom: 12, fontWeight: '600'}}>Manage</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
          {apps.map(AppIcon)}
        </View>
      </View>
      <View style={{paddingLeft: 12, paddingRight: 12}}>
        <Text style={{marginTop: 12, marginBottom: 12, fontWeight: '600'}}>Reports</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
          {apps.map(AppIcon)}
        </View>
      </View>
    </View>
  )
}

export default index