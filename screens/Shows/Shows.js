import { View, Text, StyleSheet, FlatList, ActivityIndicator, Dimensions } from "react-native";
import { useEffect, useState } from "react";
import Show from "../../components/Shows/Show";
import ViewShowModal from "./ViewShowModal";

const showData = [
  {
    id: 1,
    city: "Fort Myers",
    state: "FL",
    country: "United States",
    date: "November 21, 2022",
    time: "7:00PM",
    venue: "Barbara B. Mann Performing Arts Hall",
    tickets_remaining: false,
    num_tickets_remaining: 0,
    coordinates: {
      latitude: 26.5546539666996,
      longitude: -81.88694642175722,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },

  {
    id: 2,
    city: "Fort Myers",
    state: "FL",
    country: "United States",
    date: "November 22, 2022",
    time: "7:00PM",
    venue: "Barbara B. Mann Performing Arts Hall",
    tickets_remaining: true,
    num_tickets_remaining: 2,
    coordinates: {
      latitude: 26.5546539666996,
      longitude: -81.88694642175722,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },

  {
    id: 3,
    city: "Lakeland",
    state: "FL",
    country: "United States",
    date: "November 23, 2022",
    time: "7:00PM",
    venue: "Youkey Theatre at The RP Funding Center",
    tickets_remaining: false,
    num_tickets_remaining: 0,
    coordinates: {
      latitude: 26.5546539666996,
      longitude: -81.88694642175722,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },

  {
    id: 4,
    city: "Melbourne",
    state: "FL",
    country: "United States",
    date: "November 25, 2022",
    time: "7:00PM",
    venue: "Maxwell C. King Center for the Performing Arts",
    tickets_remaining: false,
    num_tickets_remaining: 0,
    coordinates: {
      latitude: 26.5546539666996,
      longitude: -81.88694642175722,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },

  {
    id: 5,
    city: "Melbourne",
    state: "FL",
    country: "United States",
    date: "November 25, 2022",
    time: "10:00PM",
    venue: "Maxwell C. King Center for the Performing Arts",
    tickets_remaining: true,
    num_tickets_remaining: 18,
    coordinates: {
      latitude: 28.17082423137966,
      longitude: -80.66941173041211,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },

  {
    id: 6,
    city: "Hollywood",
    state: "FL",
    country: "United States",
    date: "November 26, 2022",
    time: "8:00PM",
    venue: "Seminole Hard Rock Hotel & Casino",
    tickets_remaining: false,
    num_tickets_remaining: 0,
    coordinates: {
      latitude: 26.5546539666996,
      longitude: -81.88694642175722,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },

  {
    id: 7,
    city: "Hollywood",
    state: "FL",
    country: "United States",
    date: "November 26, 2022",
    time: "8:00PM",
    venue: "Seminole Hard Rock Hotel & Casino",
    tickets_remaining: false,
    num_tickets_remaining: 0,
    coordinates: {
      latitude: 26.5546539666996,
      longitude: -81.88694642175722,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },

  {
    id: 8,
    city: "Hollywood",
    state: "FL",
    country: "United States",
    date: "November 26, 2022",
    time: "8:00PM",
    venue: "Seminole Hard Rock Hotel & Casino",
    tickets_remaining: false,
    num_tickets_remaining: 0,
    coordinates: {
      latitude: 26.5546539666996,
      longitude: -81.88694642175722,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
];

const Shows = () => {
  const [loading, setLoading] = useState(true);
  const [viewShowModal, setViewShowModal] = useState(false);

  const toggleViewShowModal = () => {
    setViewShowModal((prevState) => !prevState);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
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
