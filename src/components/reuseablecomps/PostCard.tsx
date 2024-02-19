import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
        width: '100%',
        padding: 20,
        backgroundColor: '#FFF',
        elevation: 7,
        marginVertical: '4%',
      }}>
      <Text
        style={{
          fontFamily: Fonts.bold,
          fontSize: 20,
          color: Colors.Dblue,
          textAlign: 'center',
          marginBottom: '4%',
          letterSpacing: -0.333,
        }}>
        {post.title}
      </Text>
      {post.image ? (
        <Image
          source={{uri: post.image}}
          resizeMode="contain"
          style={{
            width: 200,
            height: 150,
            alignSelf: 'center',
            marginVertical: 15,
          }}
        />
      ) : null}
      <Text
        style={{
          fontFamily: Fonts.med,
          fontSize: 14,
          color: Colors.black,
        }}>
        {post.description}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginVertical: 15,
        }}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setIsEdit(true);
            setPostID(post.id!);
          }}
          style={{
            width: 110,
            height: 40,
            backgroundColor: Colors.cyan,
            borderRadius: 20,
            justifyContent: 'center',
          }}>
          <BtnTxt>Edit</BtnTxt>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => handleDelete(post.id!)}
          style={{
            width: 110,
            height: 40,
            backgroundColor: Colors.red,
            borderRadius: 20,
            justifyContent: 'center',
          }}>
          <BtnTxt>Delete</BtnTxt>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({});
