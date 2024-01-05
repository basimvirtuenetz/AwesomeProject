import React from 'react'
import { Title, Wrapper } from '../components/styledComp'

const Data = ({ route }) => {
    const Name = route.params.name;

    return (
        <Wrapper style={{ justifyContent: 'center' }}>
            {Name ?
                <>
                    <Title style={{ lineHeight: 40 }}>Thankyou for Creating Account {Name}!</Title>
                </>
                :
                <>
                    <Title>Please Create Account!</Title>
                </>

            }
        </Wrapper>
    )
}

export default Data