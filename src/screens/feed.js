import { StyleSheet } from 'react-native'
import React from 'react'
import { SubTitle, Wrapper, RowScroll, Items } from '../components/styledComp'
import { DATA } from '../components/reuseablecomps/data'

const Feed = () => {
    return (
        <Wrapper>
            <RowScroll
                showsHorizontalScrollIndicator={false}
                data={DATA}
                numColumns={2}
                renderItem={items => (
                    <Items>
                        <SubTitle>{items.item.name}</SubTitle>
                        <SubTitle>{items.item.des}</SubTitle>
                    </Items>
                )}
            />
        </Wrapper>
    )
}

export default Feed

const styles = StyleSheet.create({})