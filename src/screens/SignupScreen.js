import React from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Text h3>Sign Up</Text>
      <Input label="Email" />
      <Input label="Password" />
      <Button title="Sign Up" />
    </>
  );
};

const style = StyleSheet.create({});

export default SignupScreen;
