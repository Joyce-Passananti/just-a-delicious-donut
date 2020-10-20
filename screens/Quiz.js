import React from "react";
import { View, StyleSheet, StatusBar, Text, SafeAreaView, Vibration, Image} from "react-native";

import { Button, TempButton, ButtonContainer } from "../components/Button";
import { Alert } from "../components/Alert";
import { withNavigation } from "react-navigation";

const ONE_SECOND_IN_MS = 1000;
const PATTERN_1 = [1 * ONE_SECOND_IN_MS];
const PATTERN_2 = [1 * ONE_SECOND_IN_MS, 1 * ONE_SECOND_IN_MS];
const PATTERN_3 = [1 * ONE_SECOND_IN_MS, 1 * ONE_SECOND_IN_MS, 1 * ONE_SECOND_IN_MS ];
const PATTERN_4 = [1 * ONE_SECOND_IN_MS, 1 * ONE_SECOND_IN_MS, 1 * ONE_SECOND_IN_MS, 1 * ONE_SECOND_IN_MS ];
const PATTERN_5 = [1 * ONE_SECOND_IN_MS, 1 * ONE_SECOND_IN_MS, 1 * ONE_SECOND_IN_MS, 1 * ONE_SECOND_IN_MS, 1 * ONE_SECOND_IN_MS ];
const PATTERN_6 = [1 * ONE_SECOND_IN_MS, 1 * ONE_SECOND_IN_MS, 1 * ONE_SECOND_IN_MS, 1 * ONE_SECOND_IN_MS, 1 * ONE_SECOND_IN_MS, 1 * ONE_SECOND_IN_MS ];


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#36B1F0",
    flex: 1,
    paddingHorizontal: 20
  },
  text: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600"
  },
  safearea: {
    flex: 1,
    marginTop: 100,
    justifyContent: "space-between"
  }
});

class Quiz extends React.Component {
  state = {
    correctCount: 0,
    totalCount: this.props.navigation.getParam("questions", []).length,
    activeQuestionIndex: 0,
    answered: false,
    answerCorrect: false
  };

  answer = correct => {
    this.setState(
      state => {
        const nextState = { answered: true };

        if (correct) {
          nextState.correctCount = state.correctCount + 1;
          nextState.answerCorrect = true;
        } else {
          nextState.answerCorrect = false;
        }

        return nextState;
      },
      () => {
        setTimeout(() => this.nextQuestion(), 750);
      }
    );
  };

  nextQuestion = () => {
    console.log("hmm");
    this.setState(state => {
      const nextIndex = state.activeQuestionIndex + 1;

      if (nextIndex >= state.totalCount) {
        this.props.navigation.popToTop();
      }

      return {
        activeQuestionIndex: nextIndex,
        answered: false
      };
    });
  };
  
  vibrateIt = vibration => {
    if(vibration == "thumbsup"){
      Vibration.vibrate(PATTERN_1);
    }
    else if(vibration == "heart"){
      Vibration.cancel();
      Vibration.vibrate(PATTERN_2);
    }
    else if(vibration == "angry"){
      Vibration.vibrate(PATTERN_3);
    }
    else if(vibration == "laugh"){
      Vibration.vibrate(PATTERN_4);
    }
    else if(vibration == "crying"){
      Vibration.vibrate(PATTERN_5);
    }
    else if(vibration == "happy"){
      Vibration.vibrate(PATTERN_6);
    }    
  }

  render() {
    const questions = this.props.navigation.getParam("questions", []);
    const question = questions[this.state.activeQuestionIndex];
    console.log(question);
    /*if(question.vibration == "thumbsup"){
      console.log("WHY");
      Vibration.cancel();
      Vibration.vibrate(PATTERN_1);
    }
    else if(question.vibration == "heart"){
      Vibration.cancel();
      Vibration.vibrate(PATTERN_2);
    }
    else if(question.vibration == "angry"){
      Vibration.vibrate(PATTERN_3);
    }
    else if(question.vibration == "laugh"){
      Vibration.vibrate(PATTERN_4);
    }
    else if(question.vibration == "crying"){
      Vibration.vibrate(PATTERN_5);
    }
    else if(question.vibration == "happy"){
      Vibration.vibrate(PATTERN_6);
    }*/   

    return (
      <View
        style={[
          styles.container,
          { backgroundColor: this.props.navigation.getParam("color") }
        ]}
      >
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.safearea}>
          <View>
          <Image source={{uri: question.emoji}}
       style={{width: 300, height: 300, justifyContent: 'center', alignItems: 'center'}} />
            <Text style={styles.text}>{question.question}</Text></View>
            <View hide={this.state.answered}>
            <Button
                  text="Press me"
                  onPress={() => this.vibrateIt(question.vibration)}
                />
            </View>
            <View>
                <Button
                  key={question.answers.id}
                  text={question.answers.text}
                  onPress={() => this.answer(true)}
                />
          </View>

          <Text style={styles.text}>
            {`${this.state.correctCount}/${this.state.totalCount}`}
          </Text>
        </SafeAreaView>
        <Alert
          correct={this.state.answerCorrect}
          visible={this.state.answered}
        />
      </View>
    );
  }
}

export default Quiz;
