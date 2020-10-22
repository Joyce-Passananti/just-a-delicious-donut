import React from "react";
import { ScrollView, StatusBar } from "react-native";

import frequencyEmojis from "../data/frequencyemojis";
import frequencyEmojis2 from "../data/frequencyemojis2";

import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Test A"
      color="#92817a"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Emoji Test 1",
          questions: frequencyEmojis,
          color: "#fff"
        })
      }
    />
    <RowItem
      name="Test B"
      color="#92817a"
      onPress={() =>
        navigation.navigate("Quiz2", {
          title: "Emoji Test 2",
          questions: frequencyEmojis2,
          color: "#799496"
        })
      }
    />
    <RowItem
      name="Test C"
      color="#92817a"
      onPress={() =>
        navigation.navigate("Quiz2", {
          title: "Emoji Test 3",
          questions: frequencyEmojis2, // TODO: replace
          color: "#799496"
        })
      }
    />
  </ScrollView>
);
