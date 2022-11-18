import { View, Text, StyleSheet, Button, Dimensions, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { setShowInfo } from "../../state/slices/userSlice";

const Show = (props) => {
  const { item, toggleViewShowModal } = props;
  const dispatch = useDispatch();

  const updateShowInfo = () => {
    dispatch(setShowInfo({ show: item }));
    toggleViewShowModal();
  };

  return (
    <Pressable onPress={updateShowInfo} key={item.id} style={styles.showBody}>
      <View style={styles.leftText}>
        <Text style={styles.comedian}>Tom Segura</Text>
        <Text style={styles.locationText}>
          {item.city}, {item.state}
        </Text>
        <Text style={styles.countryText}>{item.country}</Text>
        <Text style={styles.venueText}>{item.venue.substring(0, 20)}...</Text>
        {item.tickets_remaining ? <Text style={styles.seatsRemaining}>{item.num_tickets_remaining} seats remaining.</Text> : null}
      </View>
      <View style={styles.rightText}>
        <Text style={styles.dateText}>{item.date}</Text>
        <Text style={styles.timeText}>{item.time}</Text>
        <Button
          color={item.tickets_remaining ? "black" : "grey"}
          style={styles.button}
          title={item.tickets_remaining ? "BUY TICKETS" : "SOLD OUT"}
          disabled={item.tickets_remaining ? false : true}
          onPress={updateShowInfo}
        />
      </View>
    </Pressable>
  );
};

export default Show;

const styles = StyleSheet.create({
  showBody: {
    backgroundColor: "#D3D3D3",
    width: "95%",
    height: 100,
    alignSelf: "center",
    marginVertical: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  leftText: {
    margin: 10,
  },

  rightText: {
    margin: 10,
  },

  locationText: {
    fontSize: 16,
  },

  comedian: {
    marginTop: -10,
    fontSize: 10,
    color: "white",
    backgroundColor: "black",
    borderRadius: 3,
    paddingHorizontal: 5,
  },

  countryText: {
    fontSize: 10,
    marginBottom: 12,
  },

  venueText: {
    fontSize: 18,
  },

  seatsRemaining: {
    fontSize: 10,
  },

  dateText: {
    fontSize: 12,
  },

  timeText: {
    fontSize: 10,
    marginBottom: 15,
  },

  loading: {
    margin: 0,
    position: "absolute",
    top: Dimensions.get("screen").height / 2 - 100,
    left: Dimensions.get("screen").width / 2 - 15,
  },
});
