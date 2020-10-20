import React from "react";
import { ScrollView, StatusBar } from "react-native";

import spaceQuestions from "../data/space";
import westernsQuestions from "../data/westerns";
import computerQuestions from "../data/computers";

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
          questions: spaceQuestions,
          color: "#36b1f0"
        })
      }
    />
    <RowItem
      name="Emoji Test 2"
      color="#799496"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Emoji Test 2",
          questions: westernsQuestions,
          color: "#799496"
        })
      }
    />
  </ScrollView>
);
