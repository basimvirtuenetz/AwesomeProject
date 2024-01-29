import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Colors } from '../colors/colors'
import { Fonts } from '../fonts/fonts'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

export interface User {
    name: string,
    age: number,
}

export interface Student extends User {
    studentId: number,
    grade: number,
}

export interface Lecturar extends User {
    rank: number,
    subjects: string,
}

const User1: Student = {
    name: "Ali",
    age: 20,
    studentId: 5053,
    grade: 12,
}

const User2: Lecturar = {
    name: "Mazhar",
    age: 30,
    rank: 17,
    subjects: "Maths"
}
const User: User[] = [];
User.push(User1);
User.push(User2);
console.log("Current Users", User);

const Videos = () => {
    const themeMode = useSelector((state: any) => state.theme.mode)
    const navigation = useNavigation();
    return (
        <ScrollView style={[styles.container, { backgroundColor: themeMode.background }]}>
            <View style={styles.wrapper}>
                <Text style={[styles.Title, { color: themeMode.text }]}>Student :</Text>
                <View style={styles.contentContainer}>
                    <Text style={[styles.content, { color: themeMode.text }]} >Student Name :{User1.name}</Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={[styles.content, { color: themeMode.text }]}>Student Age :{User1.age}</Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={[styles.content, { color: themeMode.text }]}>Student Id: {User1.studentId}</Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={[styles.content, { color: themeMode.text }]}>Student Class : {User1.grade}</Text>
                </View>
                <Text style={[styles.Title, { color: themeMode.text }]}>Lecturar :</Text>
                <View style={styles.contentContainer}>
                    <Text style={[styles.content, { color: themeMode.text }]}>Leacturar Name :{User2.name}</Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={[styles.content, { color: themeMode.text }]}>Leaturar Age :{User2.age}</Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={[styles.content, { color: themeMode.text }]}>Lecturar Rank : {User2.rank}</Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={[styles.content, { color: themeMode.text }]}> Lecturar Subj: {User2.subjects}</Text>
                </View>
            </View>
        </ScrollView >
    )
}

export default Videos

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        width: "100%",
        height: 20,
        paddingHorizontal: 20,
        marginVertical: 10
    },
    content: {
        fontFamily: Fonts.med,
        fontSize: 18,
        color: Colors.Dblue
    },
    Title: {
        fontFamily: Fonts.bold,
        fontSize: 26,
        color: Colors.Dblue,
        paddingLeft: 20,
        marginVertical: 10
    },
    wrapper: {
        flex: 1,
        paddingBottom: 80
    }
})