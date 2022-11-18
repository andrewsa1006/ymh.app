import { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Image, Pressable, Button } from "react-native";
import { decreaseItemQuantity, increaseItemQuantity, removeItemFromList } from "../../state/slices/userSlice";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const { itemName, itemPrice, quantity, image_uri, id } = props.item;
  const dispatch = useDispatch();
  return (
    <Pressable
      style={styles.itemBox}
      onPress={() => {
        console.log("pressable");
      }}
    >
      <Text style={styles.itemTitle}>{itemName}</Text>
      <Image style={styles.itemThumbnail} source={{ uri: image_uri }} />
      <Text style={styles.itemPrice}>${itemPrice}.00</Text>
      <Text style={styles.itemQuantity}>Quantity: {quantity}</Text>
      <View style={styles.removeFromCartButtonContainer}>
        <Button
          onPress={() => {
            dispatch(removeItemFromList({ item: props.item, list: "cart" }));
          }}
          color="red"
          title="Remove"
        />
      </View>

      <View style={styles.increaseQuantity}>
        <Button
          onPress={() => {
            dispatch(increaseItemQuantity({ item: props.item }));
          }}
          color="green"
          title="+"
        />
      </View>

      <View style={styles.decreaseQuantity}>
        <Button
          onPress={() => {
            dispatch(decreaseItemQuantity({ item: props.item }));
          }}
          color="black"
          title="-"
        />
      </View>
    </Pressable>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  itemBox: {
    height: Dimensions.get("screen").height * 0.15,
    width: Dimensions.get("screen").width * 0.95,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
    marginVertical: 5,
  },

  itemTitle: {
    fontSize: 16,
    marginRight: 5,
    marginBottom: 5,
    alignSelf: "flex-end",
  },

  itemThumbnail: {
    height: 120,
    width: 120,
    position: "absolute",
    top: 1,
    left: 1,
  },

  itemPrice: {
    fontSize: 12,
    marginRight: 5,
    alignSelf: "flex-end",
  },

  itemQuantity: {
    fontSize: 12,
    position: "absolute",
    bottom: 50,
    right: 5,
  },

  removeFromCartButtonContainer: {
    position: "absolute",
    width: 80,
    bottom: 5,
    right: 5,
  },

  increaseQuantity: {
    position: "absolute",
    width: 50,
    bottom: 5,
    right: 90,
  },

  decreaseQuantity: {
    position: "absolute",
    width: 50,
    bottom: 5,
    right: 145,
  },
});
