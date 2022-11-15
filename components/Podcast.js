import React, { useState, useCallback, useEffect } from "react";
import { View, Dimensions, ActivityIndicator, Text, StyleSheet } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { getYoutubeMeta } from "react-native-youtube-iframe";

const Podcast = (props) => {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [playing, setPlaying] = useState(false);
  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      getYoutubeMeta(props.videoId).then((meta) => {
        setTitle(meta.title);
        setLoading(false);
      });
    }, 2000);
  });

  return (
    <View>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator color="black" />
        </View>
      ) : (
        <View>
          <Text>{title}</Text>
          <YoutubePlayer
            width={Dimensions.get("screen").width * 0.95}
            height={230}
            play={playing}
            videoId={props.videoId}
            onChangeState={onStateChange}
          />
        </View>
      )}
    </View>
  );
};

export default Podcast;

const styles = StyleSheet.create({
  loading: {
    width: Dimensions.get("screen").width * 0.95,
    height: 230,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
