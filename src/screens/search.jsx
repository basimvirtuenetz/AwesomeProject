import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import {Fonts} from '../fonts/fonts';
import {Colors} from '../colors/colors';
import {Input} from '../components/styledComp';

const Search = () => {
  const themeMode = useSelector(state => state.theme.mode);
  const [data, setData] = React.useState([]);
  const [searchitem, setSearchitem] = React.useState('');
  const [searchData, setSearchdata] = React.useState([]);

  const search = () => {
    return data == searchitem;
  };

  React.useEffect(() => {
    const unsubscribe = firestore()
      .collection('posts')
      .onSnapshot(snapshot => {
        const postData = [];
        snapshot.forEach(doc => {
          postData.push({
            key: doc.id,
            ...doc.data(),
          });
        });
        setData(postData);
      });
    return () => unsubscribe();
  }, []);

  React.useEffect(() => {
    const items = firestore()
      .collection('posts')
      .where('title', '==', searchitem)
      .onSnapshot(Items => {
        const matchingItems = [];
        Items.forEach(doc => {
          matchingItems.push({
            key: doc.id,
            ...doc.data(),
          });
        });
        setSearchdata(matchingItems);
      });
    return () => items();
  }, [searchitem]);

  return (
    <View style={{flex: 1, backgroundColor: themeMode.background}}>
      <Text style={[styles.title, {color: themeMode.text}]}>Posts :</Text>
      <View style={{marginHorizontal: 20}}>
        <Input
          placeholder="Search"
          placeholderTextColor={Colors.Dblue}
          cursorColor={Colors.Dblue}
          value={searchitem}
          onChangeText={text => setSearchitem(text)}
        />
      </View>
      {searchitem ? (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          data={searchData}
          renderItem={({item}) => (
            <View
              style={[
                styles.itemView,
                {backgroundColor: themeMode.background},
              ]}>
              <Text style={[styles.itemTitle, {color: themeMode.text}]}>
                {item.title}
              </Text>
              <Text style={[styles.itemDes, {color: themeMode.text}]}>
                Description : <Text style={{fontSize: 18}}>{item.descr}</Text>
              </Text>
              <Text style={[styles.priccText, {color: themeMode.text}]}>
                Price : <Text style={{fontSize: 20}}>{item.price}</Text>
              </Text>
            </View>
          )}
        />
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          data={data}
          renderItem={({item}) => (
            <View
              style={[
                styles.itemView,
                {backgroundColor: themeMode.background},
              ]}>
              <Text style={[styles.itemTitle, {color: themeMode.text}]}>
                {item.title}
              </Text>
              <Text style={[styles.itemDes, {color: themeMode.text}]}>
                Description : <Text style={{fontSize: 18}}>{item.descr}</Text>
              </Text>
              <Text style={[styles.priccText, {color: themeMode.text}]}>
                Price : <Text style={{fontSize: 20}}>{item.price}</Text>
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.bold,
    fontSize: 30,
    paddingLeft: 20,
    marginVertical: 6,
  },
  itemView: {
    width: 320,
    height: '80%',
    borderRadius: 10,
    elevation: 20,
    paddingHorizontal: 20,
    margin: 20,
    justifyContent: 'space-evenly',
  },
  itemTitle: {
    fontSize: 30,
    fontFamily: Fonts.bold,
    textAlign: 'center',
  },
  itemDes: {
    fontFamily: Fonts.med,
    fontSize: 22,
  },
  priccText: {
    fontFamily: Fonts.med,
    fontSize: 22,
  },
});
