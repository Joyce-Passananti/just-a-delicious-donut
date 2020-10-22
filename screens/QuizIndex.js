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
          title: "Test A",
          questions: frequencyEmojis,
          color: "#c7b6af"
        })
      }
    />
    <RowItem
      name="Test B"
      color="#92817a"
      onPress={() =>
        navigation.navigate("Quiz2", {
          title: "Test B",
          questions: frequencyEmojis2,
          color: "#c7b6af"
        })
      }
    />
    <RowItem
      name="Test C"
      color="#92817a"
      onPress={() =>
        navigation.navigate("Quiz2", {
          title: "Test C",
          questions: frequencyEmojis2, // FIXME: replace
          color: "#c7b6af"
        })
      }
    />
  </ScrollView>
);
