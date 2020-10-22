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

const order = [0].concat(randFirst, [7, 8, 9, 10])

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
    correctCount: 0,
    totalCount: this.props.navigation.getParam("questions", []).length,
    activeQuestionIndex: 0,
    answered: false,
    answerCorrect: false,
    buttonDisabled: false,
    backButton: false,
    createVibrationz: false,
    finalResults: false,
    clicks1: 0,
    clicks2: 0,
    clicks3: 0,
    clicks4: 0,
    clicks5: 0,
    clicks6: 0, 
    clicks: 0
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
    console.log(this.state.clicks1);
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
    console.log("makingit");
    console.log(vibration);
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
    else if(vibration == "happy2"){
      Vibration.vibrate(PATTERN_6);
      this.setState({
        buttonDisabled: false,
        createVibrationz: true,
      })
    }    
  }

  createVibration = input => {
    if (input == true) {
      console.log(this.state.clicks + 1)
      this.setState({
        clicks: this.state.clicks + 1,
      })  
      Vibration.vibrate(1000);
    }
  }

  resetClicks = () => {
    console.log("reset");
    this.setState({
      clicks: 0,
    });
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
              {this.state.createVibrationz && <View style={styles.button}>
                  <Button
                    disabled = {question.phase}
                    title="Make Vibration"
                    onPress={() => this.createVibration(question.number)}
                  />
              </View>}
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
            {question.hasOwnProperty("reset") ? 
              <View style={styles.button}>
              <Button
                  color = "#fff"
                  title="Reset"
                  onPress={() => this.resetClicks()}
                />
            </View> : <></>}
            {this.state.activeQuestionIndex < 10 ?
            <View style = {{width: '100%'}}>
                <AButton
                  key={question.answers.id}
                  text={question.answers.text}
                  onPress={() => this.answer(true)}
                />
          </View> : <></>}
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

export default Quiz3;
