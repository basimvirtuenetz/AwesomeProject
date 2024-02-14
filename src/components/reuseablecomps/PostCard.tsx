import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {PostType} from '../../apis/post.interface';
import {Fonts} from '../../fonts/fonts';
import {Colors} from '../../colors/colors';
import {BtnTxt} from '../styledComp';
import {Post} from '../../apis/api';

interface CardProps {
  setIsEdit?: (state: boolean) => void;
  post: PostType;
  setPostID: (id: number) => void;
  posts: PostType[];
  setPosts: (updatedPost: PostType[]) => void;
}
const PostCard: React.FC<CardProps> = ({
  post,
  setIsEdit,
  setPostID,
  posts,
  setPosts,
}) => {
  const handleDelete = (id: number) => {
    Post.deletePost(id)
      .then(data => {
        let updatedPost = posts.filter(post => post.id !== id);
        setPosts(updatedPost);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <View
      style={{
        width: '80%',
        padding: 10,
        backgroundColor: '#FFF',
        elevation: 7,
        borderRadius: 10,
        marginVertical: '4%',
      }}>
      <Text
        style={{
          fontFamily: Fonts.bold,
          fontSize: 20,
          color: Colors.Dblue,
          textAlign: 'center',
          marginBottom: '4%',
        }}>
        {post.title}
      </Text>
      {post.image ? (
        <Image
          source={{uri: post.image}}
          style={{width: 200, height: 150, alignSelf: 'center'}}
        />
      ) : null}
      <Text
        style={{
          fontFamily: Fonts.med,
          fontSize: 16,
          color: Colors.Lblue,
          textAlign: 'center',
        }}>
        {post.description}
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setIsEdit(true);
            setPostID(post.id!);
          }}
          style={{
            width: 90,
            height: 30,
            backgroundColor: Colors.red,
            borderRadius: 10,
            justifyContent: 'center',
            margin: '3%',
          }}>
          <BtnTxt>Edit</BtnTxt>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => handleDelete(post.id!)}
          style={{
            width: 90,
            height: 30,
            backgroundColor: Colors.red,
            borderRadius: 10,
            justifyContent: 'center',
            margin: '3%',
          }}>
          <BtnTxt>Delete</BtnTxt>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({});
