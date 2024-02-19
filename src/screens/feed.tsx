import {StyleSheet} from 'react-native';
import React from 'react';
import {SubTitle, Wrapper, RowScroll, Des} from '../components/styledComp';
import {DATA} from '../components/reuseablecomps/data';
import {Colors} from '../colors/colors';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';

const Feed = () => {
  const themeMode = useSelector((state: any) => state.theme.mode);
  return (
    <Wrapper style={{backgroundColor: themeMode.background}}>
      <RowScroll
        showsVerticalScrollIndicator={false}
        data={DATA}
        numColumns={2}
        contentContainerStyle={styles.container}
        renderItem={({item}) => (
          <LinearGradient colors={Colors.Toad} style={styles.item}>
            <SubTitle>{item.name}</SubTitle>
            <Des>{item.des}</Des>
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
