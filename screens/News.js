import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, FlatList, ActivityIndicator } from "react-native";
import axios from "axios";
import { useSelector } from "react-redux";

const News = ({ navigation }) => {
  const token = useSelector((user) => user.user.token);
  const [posts, setPosts] = useState([]);

  const fetchNewsPosts = async () => {
    try {
      const response = await axios.get("https://v6n6cm02tj.execute-api.us-east-1.amazonaws.com/dev/news", {
        headers: {
          authorizationToken: token,
        },
      });
      setPosts(response.data);
    } catch (error) {
      // Eventually handle errors here
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNewsPosts();
  }, []);

  return (
    <View>
      {posts.length < 1 ? (
        <View>
          <ActivityIndicator style={styles.loading} size="large" color="#333" />
        </View>
      ) : (
        <View>
          <View style={styles.mainView}>
            <FlatList
              data={posts}
              renderItem={({ item, index }) => (
                <View key={item.id}>
                  <Text style={index % 2 === 0 ? styles.postTitleLeft : styles.postTitleRight}>{item.title}</Text>
                  <Image style={styles.thumbnail} source={{ uri: item.thumbnail_URL }} />
                  <Text style={index % 2 === 0 ? styles.descriptionLeft : styles.descriptionRight}>{item.description}</Text>
                </View>
              )}
            />
          </View>
        </View>
      )}
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

  loading: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: "100%",
  },
});

export default News;
