import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable, Image, FlatList } from "react-native";
import axios from "axios";

const News = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const fetchNewsPosts = async () => {
    let res = await axios.get("http://192.168.1.104:3000/news");
    setPosts(res.data);
  };

  // Grab posts from db
  useEffect(() => {
    let subscribed = true;
    if (subscribed) {
      fetchNewsPosts();
    }

    return () => {
      subscribed = false;
    };
  });

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
