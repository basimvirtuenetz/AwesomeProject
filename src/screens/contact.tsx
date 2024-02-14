import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {Post} from '../apis/api';
import {PostType} from '../apis/post.interface';
import PostCard from '../components/reuseablecomps/PostCard';
import {Btn, BtnTxt} from '../components/styledComp';
import {Colors} from '../colors/colors';
import CreatePost from '../components/reuseablecomps/CreatePostModal';
import EditPost from '../components/reuseablecomps/EditModal';

const Contact = () => {
  const [posts, setPosts] = React.useState<PostType[]>([]);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [is1Visible, setIs1Visible] = React.useState<boolean>(false);
  const [postID, setPostID] = React.useState<number | null>(null);
  const themeMode = useSelector((state: any) => state.theme.mode);

  const Toggle = () => {
    setIsVisible(!isVisible);
  };
  const Toggle1 = () => {
    setIs1Visible(!is1Visible);
  };

  React.useEffect(() => {
    Post.getPosts()
      .then(data => {
        setPosts(data);
      })
      .catch(err => {
        setIsError(err);
      });
    return () => {};
  }, []);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: themeMode.background,
      }}
      contentContainerStyle={{
        alignItems: 'center',
        paddingBottom: '25%',
      }}>
      <CreatePost
        visible={isVisible}
        close={Toggle}
        setPosts={setPosts}
        post={posts}
      />
      <EditPost
        visible={is1Visible}
        close={Toggle1}
        setPosts={setPosts}
        post={posts}
        postID={postID}
      />
      <View style={{alignItems: 'center'}}>
        <Btn
          activeOpacity={0.7}
          style={{backgroundColor: Colors.Dblue, justifyContent: 'center'}}
          onPress={Toggle}>
          <BtnTxt>Create</BtnTxt>
        </Btn>
      </View>
      {isError ? (
        <Text style={{color: Colors.Dblue}}>Error getting Posts</Text>
      ) : (
        posts.map(post => (
          <PostCard
            key={post.id}
            post={post}
            setIsEdit={Toggle1}
            setPostID={setPostID}
            posts={posts}
            setPosts={setPosts}
          />
        ))
      )}
    </ScrollView>
  );
};

export default Contact;

const styles = StyleSheet.create({});
