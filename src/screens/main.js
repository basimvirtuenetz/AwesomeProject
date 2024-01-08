import React from 'react';
import {
    Scroll,
    Title,
    Wrapper,
    Items,
    SubTitle,
    RowScroll,
    RowItems,
    Seperater,
} from '../components/styledComp';
import { StyleSheet, RefreshControl } from 'react-native';
import { DATA } from '../components/reuseablecomps/data';

const Main = () => {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    return (
        <Wrapper>
            <Title>-: FlatList :-</Title>
            <RowScroll
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                data={DATA}
                renderItem={items => (
                    <RowItems>
                        <SubTitle>{items.item.name}</SubTitle>
                        <SubTitle>{items.item.des}</SubTitle>
                    </RowItems>
                )}
                ItemSeparatorComponent={() => <Seperater></Seperater>}
            />
            <Title>-: ScrollView :-</Title>
            <Scroll
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollItems}>
                {DATA.map((data, index) => (
                    <Items key={index}>
                        <SubTitle>{data.name}</SubTitle>
                        <SubTitle>{data.des}</SubTitle>
                    </Items>
                ))}
            </Scroll>
        </Wrapper>
    );
};

export default Main;

const styles = StyleSheet.create({
    scrollItems: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});
