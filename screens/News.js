import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable, Image, FlatList } from "react-native";

const posts = [
  {
    id: 1,
    title: "YMH #677 Out Now!",
    post_date: "2022-11-11 11:45:04",
    description: "Watch as Tom and Christina explore new depths of degeneracy, only on YMH!",
    thumbnail_url: "https://ymh-content.s3.amazonaws.com/news-screenshots/ymh.PNG",
    redirect_url: "",
    category: "podcast",
  },
  {
    id: 2,
    title: "New Shows Alert",
    post_date: "2022-11-12 11:45:04",
    description: "Tom just added a ton of new dates to his 'I'm coming everywhere' tour. Be sure to check them out!",
    thumbnail_url: "https://ymh-content.s3.amazonaws.com/news-screenshots/tom_segura.jpg",
    redirect_url: "",
    category: "tickets",
  },
  {
    id: 3,
    title: "Heaviest of the heavy",
    post_date: "2022-11-13 11:45:04",
    description: "Get your barf bags ready, Tim and Kathleen have a whole new gaggle of clips for you.",
    thumbnail_url: "https://ymh-content.s3.amazonaws.com/news-screenshots/ymh_live.PNG",
    redirect_url: "",
    category: "live",
  },
  {
    id: 4,
    title: "Perfect Red? We think so.",
    post_date: "2022-11-14 11:45:04",
    description: "Be sure to place your order for Christina P's new shade of lipstick, while supplies last.",
    thumbnail_url: "https://ymh-content.s3.amazonaws.com/news-screenshots/ymh_lipstick.PNG",
    redirect_url: "",
    category: "product",
  },
];

const News = ({ navigation }) => {
  return (
    <View>
      <View style={styles.mainView}>
        <FlatList
          data={posts}
          renderItem={({ item, index }) => (
            <View key={item.id}>
              <Text style={index % 2 === 0 ? styles.postTitleLeft : styles.postTitleRight}>{item.title}</Text>
              <Image style={styles.thumbnail} source={{ uri: item.thumbnail_url }} />
              <Text style={index % 2 === 0 ? styles.descriptionLeft : styles.descriptionRight}>{item.description}</Text>
            </View>
          )}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    marginTop: 65,
    marginHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    borderStyle: "solid",
  },

  postTitleLeft: {
    textAlign: "left",
    marginLeft: 10,
    marginTop: 10,
    fontSize: 18,
  },

  postTitleRight: {
    textAlign: "right",
    marginRight: 10,
    marginTop: 10,
    fontSize: 18,
  },

  thumbnail: {
    width: "95%",
    height: 210,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 15,
    alignSelf: "center",
  },

  descriptionLeft: {
    textAlign: "left",
    marginHorizontal: 10,
    marginTop: 5,
    fontSize: 14,
    borderStyle: "solid",
    borderColor: "#333",
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingHorizontal: 8,
  },

  descriptionRight: {
    textAlign: "right",
    marginHorizontal: 10,
    marginTop: 5,
    fontSize: 14,
    borderStyle: "solid",
    borderColor: "#333",
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingHorizontal: 8,
  },
});

export default News;
