import { StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Octicons'
import { Colors } from '../colors/colors'
import { IconView, Title, Wrapper } from '../components/styledComp'

const Profile = ({ navigation }) => {
    return (
        <Wrapper>
            <IconView onPress={() => navigation.toggleDrawer()}>
                <Icon name={'three-bars'} size={20} color={Colors.black} />
            </IconView>
            <Title>Profile Screen</Title>
        </Wrapper>
    )
}

export default Profile

const styles = StyleSheet.create({})