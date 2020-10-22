import React from "react";
import { ScrollView, StatusBar } from "react-native";

import frequencyEmojis from "../data/frequencyemojis";
import frequencyEmojis2 from "../data/frequencyemojis2";

import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Emoji Test 1"
      color="#36b1f0"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Emoji Test 1",
          questions: frequencyEmojis,
          color: "#fff"
        })
      }
    />
    <RowItem
      name="Emoji Test 2 "
      color="#799496"
      onPress={() =>
        navigation.navigate("Quiz2", {
          title: "Emoji Test 2",
          questions: frequencyEmojis2,
          color: "#799496"
        })
      }
    />
  </ScrollView>
);
