import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import Podcast from "../components/Podcast";

const videos = [
  { id: "N0jKZbWDslM" },
  { id: "TCuTEfmEQxA" },
  { id: "KeeiX4VWO2E" },
  { id: "SZRSsatdG1I" },
  { id: "U4fYsRTh3TY" },
  { id: "l5MCUjYVo1c" },
];

const Podcasts = () => {
  return (
    <View style={styles.videoContainer}>
      <FlatList
        data={videos}
        renderItem={({ item }) => (
          <View>
            <Podcast key={item.id} videoId={item.id} />
          </View>
        )}
      />
    </View>
  );
};

export default Podcasts;

const styles = StyleSheet.create({
  videoContainer: {
    alignSelf: "center",
  },
});
