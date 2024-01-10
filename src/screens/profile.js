import { StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Octicons'
import { Colors } from '../colors/colors'
import { IconView, Title, Wrapper } from '../components/styledComp'

const Profile = ({ navigation }) => {
    return (
        <Wrapper style={{ flexDirection: 'row' }}>
            <Title>Profile</Title>
            <IconView onPress={() => navigation.toggleDrawer()}
                style={{ position: 'absolute', top: 24, right: 24 }}>
                <Icon name={'three-bars'} size={24} color={Colors.black} />
            </IconView>
        </Wrapper>
    )
}

export default Profile

const styles = StyleSheet.create({})