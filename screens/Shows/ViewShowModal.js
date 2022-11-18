import { View, Text, StyleSheet, Button, FlatList, ActivityIndicator, Dimensions, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MapView, { Marker } from "react-native-maps";
import Ionicons from "react-native-vector-icons/Ionicons";

const ViewShowModal = (props) => {
  const { toggleViewShowModal } = props;
  const show = useSelector((user) => user.user.viewShowInfo);
  const [fullScreenMap, setFullScreenMap] = useState(false);

  const toggleMapSize = () => {
    setFullScreenMap((prevState) => !prevState);
  };
  return (
    <View style={styles.container}>
      {fullScreenMap ? (
        <Pressable onPress={toggleMapSize}>
          <Text style={styles.button}>
            <Ionicons name={fullScreenMap ? "arrow-down" : "arrow-up"} /> MINIMIZE MAP <Ionicons name={fullScreenMap ? "arrow-down" : "arrow-up"} />
          </Text>
        </Pressable>
      ) : null}
      <View style={styles.closeButton}>
        <Button onPress={toggleViewShowModal} color="black" title="BACK" />
      </View>

      <View style={styles.showInfoBox}>
        <Text style={styles.venue}>{show.venue}</Text>
        <Text style={styles.location}>
          {show.city}, {show.state}
        </Text>
        <Text style={styles.location}>{show.country}</Text>
        <Text style={styles.performingComedians}>Performing Comedians:</Text>
        <Text style={styles.comedians}>Tom Segura</Text>
        <Text style={styles.date}>{show.date}</Text>
        <Text style={styles.time}>{show.time}</Text>

        <View style={styles.notifyButton}>
          <Button color="green" title="NOTIFY ME" />
        </View>

        <View style={styles.bookingButton}>
          <Button disabled={show.tickets_remaining ? false : true} color="black" title="GET TICKET" />
        </View>
      </View>
      {fullScreenMap ? null : (
        <Pressable onPress={toggleMapSize}>
          <Text style={styles.button}>
            <Ionicons name={fullScreenMap ? "arrow-down" : "arrow-up"} /> FULL SCREEN MAP{" "}
            <Ionicons name={fullScreenMap ? "arrow-down" : "arrow-up"} />
          </Text>
        </Pressable>
      )}
      <MapView style={fullScreenMap ? styles.mapFullScreen : styles.map} initialRegion={show.coordinates}>
        <Marker title={show.venue} coordinate={{ latitude: show.coordinates.latitude, longitude: show.coordinates.longitude }} />
      </MapView>
    </View>
  );
};

export default ViewShowModal;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  closeButton: {
    width: 75,
    position: "absolute",
    top: 5,
    right: 5,
  },

  showInfoBox: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.29,
    alignSelf: "center",
    backgroundColor: "white",
    marginTop: 50,
    borderRadius: 5,
    backgroundColor: "#D3D3D3",
  },

  map: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.6,
    bottom: 0,
  },

  mapFullScreen: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.95,
    bottom: 0,
  },

  button: {
    alignSelf: "center",
    textAlign: "center",
    height: 25,
    backgroundColor: "black",
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 2,
    marginTop: 3,
    width: 200,
    padding: 2,
    color: "white",
  },

  bookingButton: {
    width: 95,
    position: "absolute",
    bottom: 5,
    right: 5,
  },

  notifyButton: {
    width: 95,
    position: "absolute",
    bottom: 5,
    right: 105,
  },

  venue: {
    fontSize: 18,
    marginLeft: 5,
  },

  location: {
    fontSize: 10,
    marginLeft: 5,
  },

  date: {
    position: "absolute",
    fontSize: 14,
    bottom: 20,
    left: 5,
  },

  time: {
    position: "absolute",
    fontSize: 10,
    bottom: 5,
    left: 5,
  },

  performingComedians: {
    fontSize: 16,
    marginLeft: 5,
    marginTop: 15,
  },

  comedians: {
    marginLeft: 5,
  },
});
