import { useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet, Dimensions, TextInput, FlatList } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const products = [
  {
    id: 1,
    itemName: "Christina P's Perfect Red Lipstick",
    itemDescription: "",
    itemPrice: "$30.00",
    inStock: "true",
    image_uri: "https://ymh-content.s3.amazonaws.com/shop-screenshots/perfect_red.PNG",
  },

  {
    id: 2,
    itemName: "Fat Sticks T-Shirt",
    itemDescription: "",
    itemPrice: "$33.00",
    inStock: "true",
    image_uri: "https://ymh-content.s3.amazonaws.com/shop-screenshots/fat_sticks.PNG",
  },

  {
    id: 3,
    itemName: "Where are the bodies G? T-Shirt",
    itemDescription: "",
    itemPrice: "$33.00",
    inStock: "false",
    image_uri: "https://ymh-content.s3.amazonaws.com/shop-screenshots/where_are_the_bodies_garth.PNG",
  },

  {
    id: 4,
    itemName: "Two Bears One Cave Tie-Dye",
    itemDescription: "",
    itemPrice: "$37.00",
    inStock: "true",
    image_uri: "https://ymh-content.s3.amazonaws.com/shop-screenshots/two_bears_one_cave_tyedye.PNG",
  },

  {
    id: 5,
    itemName: "Problems Koozie",
    itemDescription: "",
    itemPrice: "$15.00",
    inStock: "false",
    image_uri: "https://ymh-content.s3.amazonaws.com/shop-screenshots/problems_koozie.PNG",
  },
];

const Shop = () => {
  const [loading, setLoading] = useState(false);
  return (
    <View>
      {loading ? (
        <ActivityIndicator style={styles.loading} size="large" color="#333" />
      ) : (
        <View>
          <View style={styles.searchBarContainer}>
            <Ionicons name="search" />
            <TextInput style={styles.searchIcon} placeholder="Searching for something?"></TextInput>
          </View>

          <FlatList data={products} renderItem={({ item, index }) => <View key={item.id} style={styles.showBody}></View>} />
        </View>
      )}
    </View>
  );
};

export default Shop;

const styles = StyleSheet.create({
  searchBarContainer: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 15,
    alignItems: "center",
    height: 50,
  },

  searchIcon: {
    marginHorizontal: 5,
  },

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
