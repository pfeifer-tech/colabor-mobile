import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('db.db')
// import { atom } from 'jotai'


export default function getUser() {
    return new Promise((resolve) => {
        db.transaction(tx => {
            tx.executeSql(
                `select * from user`,
                [],
                (_, { rows }) => {
                    resolve(rows._array)
                },
            )
        })
    })
}