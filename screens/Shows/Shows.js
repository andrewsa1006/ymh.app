import { View, Text, StyleSheet, FlatList, ActivityIndicator, Dimensions } from "react-native";
import { useEffect, useState } from "react";
import Show from "../../components/Shows/Show";
import ViewShowModal from "./ViewShowModal";
import axios from "axios";
import { useSelector } from "react-redux";

const Shows = () => {
  const [loading, setLoading] = useState(true);
  const [viewShowModal, setViewShowModal] = useState(false);
  const [showData, setShowData] = useState([]);
  const token = useSelector((user) => user.user.token);
  const attractionId = "K8vZ917CZRf";
  const page = 0;

  const toggleViewShowModal = () => {
    setViewShowModal((prevState) => !prevState);
  };

  const getShowData = async () => {
    let response = await axios.get(`https://v6n6cm02tj.execute-api.us-east-1.amazonaws.com/dev/shows?attractionId=${attractionId}&page=${page}`, {
      headers: {
        authorizationToken: token,
      },
    });
    setShowData(response.data.showsList);
    setLoading(false);
  };

  useEffect(() => {
    getShowData();
  }, []);

  return (
    <View>
      {loading ? (
        <ActivityIndicator style={styles.loading} size="large" color="#333" />
      ) : (
        <View>
          {viewShowModal ? (
            <ViewShowModal toggleViewShowModal={toggleViewShowModal} />
          ) : (
            <FlatList data={showData} renderItem={({ item }) => <Show item={item} toggleViewShowModal={toggleViewShowModal} />} />
          )}
        </View>
      )}
    </View>
  );
};

export default Shows;

const styles = StyleSheet.create({
  loading: {
    margin: 0,
    position: "absolute",
    top: Dimensions.get("screen").height / 2 - 100,
    left: Dimensions.get("screen").width / 2 - 15,
  },
});
