import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image, Button } from "react-native-elements";
import { auth } from "../firebase";

export default function HomeScreen({ navigation }) {
  const signOut = () => {
    auth.signOut();
    navigation.navigate("Login");
    alert("Signed out");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back to Login",
      headerLeft: () => <Button onPress={signOut} title="Sign Out" />,
    });
  }, [navigation]);

  return (
    <View>
      <Text>This is the home screen</Text>
      <Image
        source={{ uri: auth.currentUser.photoURL }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 15,
  },
});
