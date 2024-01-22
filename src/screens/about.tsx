import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Fonts} from '../fonts/fonts';
import {Colors} from '../colors/colors';

const About = () => {
  return (
    <ScrollView style={styles.Wrapper} showsVerticalScrollIndicator={false}>
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quibusdam
        minima quis quae consequuntur eligendi asperiores tenetur earum iure?
        Reiciendis error dolor officiis minus similique quo, itaque aliquid quos
        optio quod voluptate facilis veritatis possimus? Iure a deserunt
        accusantium quaerat aperiam quisquam aut, id assumenda porro, sit neque
        vel facere! Commodi consequuntur amet incidunt numquam consectetur
        repellendus sapiente suscipit nisi! Aliquid cupiditate laudantium quod.
        Aliquam, dolores! Consequatur magni dolore, facere porro vero incidunt
        illo nulla tempore corporis suscipit natus eaque quam atque! Amet
        expedita vel aliquid ea aperiam illum rerum suscipit, voluptatibus
        necessitatibus est modi, commodi soluta nihil veniam labore. Lorem Ipsum
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged.
      </Text>
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quos
        corrupti placeat atque necessitatibus labore quam molestias mollitia
        dignissimos tempora! Perferendis sint beatae repellendus? Illum quis
        officiis veritatis iure quasi! Lorem Ipsum is simply dummy text of the
        printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised in the
        1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
      </Text>
      <Text style={styles.content}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
      <Text style={styles.content}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
      <Text style={styles.content}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
  },
  content: {
    fontFamily: Fonts.reg,
    fontSize: 16,
    color: Colors.Dblue,
    textAlign: 'center',
    marginVertical: 10,
  },
});
