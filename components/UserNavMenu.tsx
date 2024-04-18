import { useState, useEffect } from "react"
import { Modal, View, Pressable, Text } from "react-native"
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

const user = {
    name: 'John Doe'
}

export default function UserNavMenu() {
    const [open, setOpen] = useState(false)

    return <View>
        <Pressable onPress={() => setOpen(!open)} style={{ padding: 8 }}>
            <MaterialIcons name="menu" size={24} color="#fff" />
        </Pressable>
        <Modal visible={open}
            transparent={true}
            onRequestClose={() => setOpen(false)}
        >
            <Pressable style={{ flex: 1 }} onPress={() => setOpen(false)}>
                <View style={{ flex: 1, alignItems: 'flex-end', backgroundColor: "rgba(0,0,0,.6)" }}>
                    <View style={{ flex: 1, justifyContent: 'flex-start', width: '70%', marginVertical: 4, backgroundColor: '#333' }}>
                        <View style={{
                            borderBottomWidth: 2,
                            borderBottomColor: 'rgba(141,141,141,0.3)'
                        }}>
                            <Link href={`/people/${user.name}/ProfileScreen`} style={{
                                color: '#fff',
                                fontSize: 18,
                                paddingVertical: 14,
                                textAlign: 'center',
                                fontWeight: '600'
                            }}>{user.name}</Link>
                        </View>
                        <View style={{
                            borderBottomWidth: 2,
                            borderBottomColor: 'rgba(141,141,141,0.3)'
                        }}>
                            <Link href="/" style={{
                                color: '#fff',
                                fontSize: 18,
                                paddingVertical: 14,
                                textAlign: 'center',
                            }}>My Ministries</Link>
                            <Link href="/" style={{
                                color: '#fff',
                                fontSize: 18,
                                paddingVertical: 14,
                                textAlign: 'center',
                            }}>Join Ministry</Link>
                            <Link href="/" style={{
                                color: '#fff',
                                fontSize: 18,
                                paddingVertical: 14,
                                textAlign: 'center',
                            }}>Send Invite</Link>

                        </View>
                        <View style={{
                            borderBottomWidth: 2,
                            borderBottomColor: 'rgba(141,141,141,0.3)'
                        }}>
                            <Link href="/" style={{
                                color: '#fff',
                                fontSize: 18,
                                paddingVertical: 14,
                                textAlign: 'center',
                            }}>Settings</Link>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                            <Link href="/" style={{
                                color: '#fff',
                                fontSize: 18,
                                paddingVertical: 14,
                                textAlign: 'center',
                            }}>Sign out</Link>
                        </View>
                    </View>
                </View>
            </Pressable>

        </Modal>
    </View>
}