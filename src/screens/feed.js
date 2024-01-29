import {StyleSheet} from 'react-native';
import React from 'react';
import {SubTitle, Wrapper, RowScroll, Des} from '../components/styledComp';
import {DATA} from '../components/reuseablecomps/data';
import {Colors} from '../colors/colors';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';

const Feed = () => {
  const themeMode = useSelector(state => state.theme.mode);
  return (
    <Wrapper style={{backgroundColor: themeMode.background, marginBottom: 35}}>
      <RowScroll
        showsVerticalScrollIndicator={false}
        data={DATA}
        numColumns={2}
        contentContainerStyle={styles.container}
        renderItem={items => (
          <LinearGradient colors={Colors.Toad} style={styles.item}>
            <SubTitle>{items.item.name}</SubTitle>
            <Des>{items.item.des}</Des>
          </LinearGradient>
        )}
      />
    </Wrapper>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    padding: 6,
    paddingBottom: 18,
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
