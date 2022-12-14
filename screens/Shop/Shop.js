import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet, Dimensions, TextInput, FlatList, Image, Alert, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Cart from "./Cart";
import { addItemToList } from "../../state/slices/userSlice";
import { useDispatch } from "react-redux";

// Items need to stay here as I will not get access to shopify collaborator API from YMH.

const products = [
  {
    id: 1,
    itemName: "Christina P's Perfect Red Lipstick",
    itemDescription: "",
    itemPrice: 30,
    inStock: "true",
    image_uri: "https://ymh-content.s3.amazonaws.com/shop-screenshots/perfect_red1.PNG",
    quantity: 1,
  },

  {
    id: 2,
    itemName: "Fat Sticks T-Shirt",
    itemDescription: "",
    itemPrice: 33,
    inStock: "true",
    image_uri: "https://ymh-content.s3.amazonaws.com/shop-screenshots/fat_sticks1.PNG",
    quantity: 1,
  },

  {
    id: 3,
    itemName: "Where are the bodies G? T-Shirt",
    itemDescription: "",
    itemPrice: 33,
    inStock: "false",
    image_uri: "https://ymh-content.s3.amazonaws.com/shop-screenshots/where_are_the_bodies_garth1.PNG",
    quantity: 1,
  },

  {
    id: 4,
    itemName: "Two Bears One Cave Tie-Dye",
    itemDescription: "",
    itemPrice: 37,
    inStock: "true",
    image_uri: "https://ymh-content.s3.amazonaws.com/shop-screenshots/two_bears_one_cave_tyedye1.PNG",
    quantity: 1,
  },

  {
    id: 5,
    itemName: "Problems Koozie",
    itemDescription: "",
    itemPrice: 15,
    inStock: "false",
    image_uri: "https://ymh-content.s3.amazonaws.com/shop-screenshots/problems_koozie1.PNG",
    quantity: 1,
  },
];

const Shop = ({ navigation }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [showCartModal, setShowCartModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      // Simulate fetching from server
      setLoading(false);
    }, 10000);
  });

  const toggleCartModal = () => {
    setShowCartModal((prevState) => !prevState);
  };

  const addItemToListAlert = (title, list) =>
    Alert.alert(`Added to ${list}:`, `${title}`, [{ text: "OK", onPress: () => console.log("OK Pressed") }]);

  return (
    <View>
      {loading ? (
        <ActivityIndicator style={styles.loading} size="large" color="#333" />
      ) : (
        <View>
          {showCartModal ? (
            <Cart toggleCartModal={toggleCartModal} />
          ) : (
            <View>
              <View style={styles.searchBarContainer}>
                <Ionicons name="search" />
                <TextInput style={styles.searchBar} placeholder="Searching for something?" />
                <Pressable onPress={toggleCartModal} style={[styles.viewCart, styles.blackBackground]}>
                  <Ionicons name="eye" color="white" size={25} />
                </Pressable>
                <Pressable onPress={toggleCartModal} style={[styles.viewCart, styles.blackBackground]}>
                  <Ionicons name="cart" color="white" size={25} />
                </Pressable>
              </View>

              <FlatList
                data={products}
                renderItem={({ item }) => (
                  <View key={item.id} style={styles.itemBody}>
                    <Text style={styles.itemName}>{item.itemName}</Text>
                    <View style={styles.middleContainer}>
                      <Image style={styles.image} source={{ uri: item.image_uri }} />

                      <View style={styles.buttonContainer}>
                        <Pressable
                          onPress={() => {
                            addItemToListAlert(item.itemName, "cart");
                            dispatch(addItemToList({ item, list: "cart" }));
                          }}
                          style={[styles.button, styles.blackBackground]}
                        >
                          <Text style={styles.whiteText}>ADD TO CART</Text>
                        </Pressable>

                        <Pressable
                          onPress={() => {
                            addItemToListAlert(item.itemName, "Watch List");
                            dispatch(addItemToList({ item, list: "saveForLater" }));
                          }}
                          style={styles.button}
                        >
                          <Text style={styles.blackText}>SAVE FOR LATER</Text>
                        </Pressable>

                        <Pressable style={[styles.button, styles.blackBackground]}>
                          <Text style={styles.whiteText}>VIEW DETAILS</Text>
                        </Pressable>
                      </View>
                    </View>
                    <Text style={styles.itemPrice}>${item.itemPrice}.00</Text>
                  </View>
                )}
              />
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default Shop;

const styles = StyleSheet.create({
  loading: {
    margin: 0,
    position: "absolute",
    top: Dimensions.get("screen").height / 2 - 100,
    left: Dimensions.get("screen").width / 2 - 15,
  },

  searchBarContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#3D3D3D",
    borderStyle: "solid",
    borderBottomWidth: 1,
    marginBottom: 10,
    width: Dimensions.get("screen").width,
    alignSelf: "center",
  },

  searchBar: {
    width: "60%",
    marginHorizontal: 10,
  },

  itemBody: {
    backgroundColor: "#FFF",
    width: Dimensions.get("screen").width * 0.95,
    height: Dimensions.get("screen").height * 0.35,
    alignSelf: "center",
    marginVertical: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },

  itemName: {
    fontSize: 20,
  },

  middleContainer: {
    display: "flex",
    flexDirection: "row",
  },

  image: {
    width: Dimensions.get("screen").width * 0.6,
    height: Dimensions.get("screen").height * 0.25,
    marginVertical: 10,
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    width: "40%",
    justifyContent: "space-between",
  },

  button: {
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 5,
    marginVertical: 15,
    marginHorizontal: 5,
  },

  viewCart: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 5,
    marginVertical: 2,
    marginLeft: 10,
  },

  blackBackground: {
    backgroundColor: "black",
    color: "white",
  },

  blackText: {
    color: "black",
    textAlign: "center",
  },

  whiteText: {
    color: "white",
    textAlign: "center",
  },

  itemPrice: {
    fontSize: 15,
    padding: 5,
  },
});
