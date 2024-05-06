import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <View styles={styles.container}>
        <Text styles={styles.userName.fontSize}>Hello samuel</Text>
        <Text styles={styles.userName.fontSize}>Find your perfect Job</Text>
      </View>
      <View></View>
    </View>
  );
};

export default Welcome;
