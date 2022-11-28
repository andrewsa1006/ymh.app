import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet, Dimensions, TextInput, FlatList, Image, Pressable, Modal, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../../components/Shop/CartItem";

const Cart = (props) => {
  const [loading, setLoading] = useState(true);
  const cartState = useSelector((user) => user.user.cart);

  const displayTotal = () => {
    let total = 0;
    cartState.forEach((item) => {
      total += item.itemPrice * item.quantity;
    });
    return total;
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  });
  return (
    // Nested ternary for loading and then cart vs empty cart
    <View>
      <View style={styles.closeButton}>
        <Button onPress={props.toggleCartModal} color="black" title="Close Cart" />
      </View>
      <View style={styles.checkOut}>
        <Button disabled={cartState.length > 0 ? false : true} color="green" title="Checkout" />
      </View>
      {loading ? (
        <View>
          <ActivityIndicator style={styles.loading} size="large" color="#333" />
        </View>
      ) : (
        <View>
          {cartState.length > 0 ? (
            <View>
              <View style={styles.cartContainer}>
                {cartState.map((item) => {
                  return <CartItem key={item.id} item={item} />;
                })}
              </View>
              <Text style={styles.total}>Total: ${displayTotal()}.00</Text>
            </View>
          ) : (
            <View style={styles.emptyCart}>
              <Text>Add items to your cart to see them here.</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  loading: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: "100%",
  },

  emptyCart: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: "100%",
  },

  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    width: Dimensions.get("screen").width * 0.3,
  },

  cartContainer: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    marginTop: "15%",
    backgroundColor: "#bbb",
    height: Dimensions.get("window").height * 0.67,
  },

  checkOut: {
    position: "absolute",
    top: 10,
    left: 10,
    width: Dimensions.get("screen").width * 0.3,
  },

  total: {
    alignSelf: "center",
    fontSize: 20,
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    borderRadius: 3,
    width: "90%",
  },
});
