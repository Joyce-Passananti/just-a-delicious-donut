import { View, StyleSheet, StatusBar, Text, SafeAreaView, Vibration, Image, Button, LogBox} from "react-native";
import React from "react";

import { AButton } from "../components/Button";

LogBox.ignoreAllLogs();

const oneSecMs = 1000;
const PATTERN_1 = [1 * oneSecMs];
const PATTERN_2 = [1 * oneSecMs, 1 * oneSecMs];
const PATTERN_3 = [1 * oneSecMs, 1 * oneSecMs, 1 * oneSecMs ];
const PATTERN_4 = [1 * oneSecMs, 1 * oneSecMs, 1 * oneSecMs, 1 * oneSecMs ];
const PATTERN_5 = [1 * oneSecMs, 1 * oneSecMs, 1 * oneSecMs, 1 * oneSecMs, 1 * oneSecMs ];
const PATTERN_6 = [1 * oneSecMs, 1 * oneSecMs, 1 * oneSecMs, 1 * oneSecMs, 1 * oneSecMs, 1 * oneSecMs ];

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const randFirst = shuffle([1, 2, 3, 4, 5, 6]);
const randLast = shuffle([9, 10, 11, 12, 13, 14]);

const order = [0].concat(randFirst, [7, 8], randLast, 15)

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1
  },
  text: {
    color: "#000",
    fontSize: 20,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600"
  },
  safearea: {
    marginTop: 10,
    flex: 1,
  },
  button: {
    backgroundColor: "#000",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  top: {
    paddingHorizontal: 20,
    flex: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10
  },
  middle: {
    backgroundColor: "#eee",
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: "center"
  },
  bottom: {
    paddingHorizontal: 20,
    flex: 0,
    width: '100%',
    height: 120,
    marginBottom: "auto",
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});

class Quiz3 extends React.Component {
  state = {
    result: 0,
    correctCount: 0,
    totalCount: this.props.navigation.getParam("questions", []).length,
    activeQuestionIndex: 0,
    answered: false,
    answerCorrect: false,
    buttonDisabled: false,
    backButton: false,
    createVibrationz: false,
    finalResults: false,
    clicks: 0
  };

  answer = test => {
    this.setState(
      state => {
        const nextState = { answered: true };

        console.log(test)
        if (test == state.clicks)
          nextState.result = state.result + 1

        return nextState;
      },
      () => {
        setTimeout(() => this.nextQuestion(), 750);
      }
    );
  };

  goBack = () => {
    let lastIndex;
    this.setState(
      state => {
        lastIndex = state.activeQuestionIndex - 1;
        this.setState({
          buttonDisabled: true,
          activeQuestionIndex: lastIndex,
          answered: false,
          clicks: 0,
        }) 
        if (lastIndex == 1) {
          this.setState({
            backButton: false,
          }) 
        }
      },
    );
  }

  nextQuestion = () => {
    console.log(this.state.clicks);
    this.setState(state => {
      const nextIndex = state.activeQuestionIndex + 1;

      this.setState({
        buttonDisabled: true,
        backButton: false,
        clicks: 0,
      })   

      if (nextIndex >= 2 && nextIndex <= 7) {
        this.setState({
          backButton: true,
        })    
      }

      if (nextIndex >= state.totalCount) {
        this.props.navigation.popToTop();
      }
      if(nextIndex == 10){
        this.setState({
          buttonDisabled: false,
          createVibrationz: false,
        })          
      }

      return {
        activeQuestionIndex: nextIndex,
        answered: false,
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

  createVibration = input => {
    if (input == true) {
      this.setState({
        clicks: this.state.clicks + 1,
      })  
      Vibration.vibrate(1000);
    }
  }

  render() {
    const questions = this.props.navigation.getParam("questions", []);
    const activeQ = order[this.state.activeQuestionIndex];
    const question = questions[activeQ];

    return (
      <View
        style={[
          styles.container,
          { backgroundColor: this.props.navigation.getParam("color") }
        ]}
      >
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.safearea}>
          <View style={styles.top}>
            {question.phase && <><View style={styles.button}>
              <Button
                  disabled = {!question.phase}
                  color = "#fff"
                  title="Feel Vibration"
                  onPress={() => this.vibrateIt(question.vibration)}
                /> 
            </View>
              <View style={{marginTop: 10}}> 
              <Text style={styles.text}>
                Touch anywhere in the white area to make vibration.
              </Text>
              </View>
              </>
            }
          </View>
          <View style={styles.middle}
            onTouchStart={() => this.createVibration(question.vibes)}
          >
              <Text style={styles.text}>
              {question.hasOwnProperty("number") ? this.state.result + "/6 Correct" : null}
              </Text>
            {question.emoji ? 
              <Image source={{uri: question.emoji}}
              style={{width: 300, height: 300, marginBottom: 20, justifyContent: 'center', alignItems: 'center'}} />
              : <></>
              }
              <View style={{paddingHorizontal: 20}}> 
              <Text style={styles.text}>
                {question.question}
              </Text>
              </View>
          </View>
          <View style={styles.bottom}>
            {question.hasOwnProperty("back") && this.state.backButton ? 
              <View style={styles.button}>
              <Button
                  color = "#fff"
                  title={question.back.text}
                  onPress={() => this.goBack()}
                />
            </View> : <></>}
            {question.hasOwnProperty("number") ? <></> : 
              <View style = {{width: '100%'}}>
                <AButton
                  key={question.answers.id}
                  text={question.answers.text}
                  onPress={question.hasOwnProperty("test") ? () => this.answer(question.test)
                  : () => this.answer(-1)}
                />
              </View>}
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

export default Quiz3;
