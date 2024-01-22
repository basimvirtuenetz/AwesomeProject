import React from 'react';
import {Scroll, Wrapper, SubTitle, Des} from '../components/styledComp';
import {StyleSheet, RefreshControl} from 'react-native';
import {DATA} from '../components/reuseablecomps/data';
import {Colors} from '../colors/colors';
import LinearGradient from 'react-native-linear-gradient';

const Main = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <Wrapper style={{backgroundColor: Colors.white}}>
      <Scroll
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollItems}>
        {DATA.map((data, index) => (
          <LinearGradient key={index} colors={Colors.Toad} style={styles.item}>
            <SubTitle>{data.name}</SubTitle>
            <Des>{data.des}</Des>
          </LinearGradient>
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
    padding: 6,
    paddingBottom: 54,
  },
  item: {
    width: 150,
    height: 150,
    borderRadius: 8,
    margin: 4,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    elevation: 8,
  },
});
