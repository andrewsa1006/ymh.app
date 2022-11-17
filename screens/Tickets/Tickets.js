import { View, Text, StyleSheet, Button, FlatList, ActivityIndicator, Dimensions } from "react-native";
import { useEffect, useState } from "react";

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
  },

  {
    id: 2,
    city: "Fort Myers",
    state: "FL",
    country: "United States",
    date: "November 22, 2022",
    time: "7:00PM",
    venue: "Barbara B. Mann Performing Arts Hall",
    tickets_remaining: false,
    num_tickets_remaining: 0,
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
  },
];

const Tickets = () => {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("tomsegura");
  const [items, setItems] = useState([
    { label: "Tom Segura", value: "tomsegura" },
    { label: "Christina P", value: "christinap" },
  ]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 900);
  }, []);

  return (
    <View>
      {loading ? (
        <ActivityIndicator style={styles.loading} size="large" color="#333" />
      ) : (
        <View>
          <FlatList
            data={showData}
            renderItem={({ item, index }) => (
              <View key={item.id} style={styles.showBody}>
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
                  />
                </View>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default Tickets;

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
