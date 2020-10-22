import React from "react";
import { View, StyleSheet, StatusBar, Text, SafeAreaView, Vibration, Image, Button, LogBox} from "react-native";
import * as Haptics from 'expo-haptics';

import { AButton } from "../components/Button";

LogBox.ignoreAllLogs();

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const randFirst = shuffle([1, 2, 3, 4, 5, 6]);
const randSecond = shuffle([9, 10, 11, 12, 13, 14]);

const order = [0].concat(randFirst, [7, 8], randSecond, [15])

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingHorizontal: 20
  },
  text: {
    color: "#000",
    fontSize: 20,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600"
  },
  safearea: {
    flex: 1,
    marginTop: 10,
    justifyContent: "space-between"
  },
  button: {
    backgroundColor: "#000",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  }
});

class Quiz2 extends React.Component {

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
    clicks6: 0
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
      })    

      if (nextIndex >= 2 && nextIndex <= 7) {
        this.setState({
          backButton: true,
        })    
      }
      if (nextIndex >= state.totalCount) {
        this.props.navigation.popToTop();
      }
      if (nextIndex == 0 || nextIndex == 7 || nextIndex == 8){
        this.setState({
          buttonDisabled: false,
        })        
      }
      if(nextIndex == 15){
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
      Haptics.notificationAsync("success") 
    }
    else if(vibration == "heart"){
      Haptics.notificationAsync("warning")
      setTimeout(() => {Haptics.notificationAsync("warning");}, 300); 
    }
    else if(vibration == "angry"){
      Vibration.vibrate([400, 400]);
      Haptics.impactAsync("heavy");
      setTimeout(() => {Haptics.impactAsync("heavy");}, 50); 
      setTimeout(() => {Haptics.impactAsync("heavy");}, 100); 
      setTimeout(() => {Haptics.impactAsync("heavy");}, 150); 
      setTimeout(() => {Haptics.impactAsync("heavy");}, 200); 
      setTimeout(() => {Haptics.impactAsync("heavy");}, 250); 
      setTimeout(() => {Haptics.impactAsync("heavy");}, 300); 
      setTimeout(() => {Haptics.impactAsync("heavy");}, 350); 
    }
    else if(vibration == "laugh"){
      Haptics.impactAsync("light");
      setTimeout(() => {Haptics.impactAsync("light");}, 100); 
      setTimeout(() => {Haptics.notificationAsync("error");}, 200); 
    }
    else if(vibration == "crying"){
      Vibration.vibrate([400]);      
      setTimeout(() => {Haptics.notificationAsync("error");}, 800); 
    }
    else if(vibration == "happy"){
      Haptics.impactAsync("light");
      setTimeout(() => {Haptics.impactAsync("medium");}, 215); 
      setTimeout(() => {Haptics.impactAsync("heavy");}, 415); 
    }  
  }

  createVibration = input => {
    if(input == 1){
      console.log("yuh");
      this.setState({
        clicks1: this.state.clicks1 + 1,
      })
    }
    if(input == 2){
      this.setState({
        clicks2: this.state.clicks2 + 1,
      })
    }
    if(input == 3){
      this.setState({
        clicks3: this.state.clicks3 + 1,
      })
    }
    if(input == 4){
      this.setState({
        clicks4: this.state.clicks4 + 1,
      })
    }
    if(input == 5){
      this.setState({
        clicks5: this.state.clicks5 + 1,
      })
    }
    if(input == 6){
      this.setState({
        clicks6: this.state.clicks6 + 1,
      })

    }
  }

  render() {
    const questions = this.props.navigation.getParam("questions", []);
    const activeQ = this.state.activeQuestionIndex;
    const question = questions[order[activeQ]];
    
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: this.props.navigation.getParam("color") }
        ]}
      >
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.safearea}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {question.emoji ? <Image source={{uri: question.emoji}}
            style={{width: 300, height: 300, marginBottom: 20, justifyContent: 'center', alignItems: 'center'}} />: null}
            <Text style={styles.text}>
              {(activeQ >= 9 && activeQ < 15) ?
              `${activeQ - 8}/6: ${question.question}` : question.question}
            </Text></View>
            {this.state.buttonDisabled && <View style={styles.button}>
              <Button
                  disabled = {question.vibes}
                  color = "#fff"
                  title="Feel Vibration"
                  onPress={() => this.vibrateIt(question.vibration)}
                /> 
            </View>}
            {this.state.createVibrationz && <View style={styles.button}>
                <Button
                  disabled = {question.phase}
                  title="Make Vibration"
                  onPress={() => this.createVibration(question.number)}
                />
            </View>}
            {question.hasOwnProperty("back") && this.state.backButton ? 
              <View style={styles.button}>
              <Button
                  color = "#fff"
                  title={question.back.text}
                  onPress={() => this.goBack()}
                />
            </View> : <></>}
            {this.state.activeQuestionIndex < 15 ?
            <View>
                <AButton
                  key={question.answers.id}
                  text={question.answers.text}
                  onPress={() => this.answer(true)}
                />
          </View> : <></>}
        </SafeAreaView>
      </View>
    );
  }
}

export default Quiz2;
