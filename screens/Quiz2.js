import React from "react";
import { View, StyleSheet, StatusBar, Text, SafeAreaView, Vibration, Image, Button } from "react-native";
import * as Haptics from 'expo-haptics';


import { AButton } from "../components/Button";
import { Alert } from "../components/Alert";

function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

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
    width: "100%",
    marginTop: 20
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

  nextQuestion = () => {
    console.log(this.state.clicks1);
    this.setState(state => {
      const nextIndex = state.activeQuestionIndex + 1;

      if (nextIndex >= state.totalCount) {
        this.props.navigation.popToTop();
      }
      if (nextIndex == 1){
        this.setState({
          buttonDisabled: true,
        })        
      }
      if(nextIndex == 20){
        this.setState({
          buttonDisabled: false,
          createVibrationz: false,
          finalResults: true,
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
    const question = questions[this.state.activeQuestionIndex];
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
            style={{width: 300, height: 300, justifyContent: 'center', alignItems: 'center'}} />: null}
            <Text style={styles.text}>{question.question}</Text></View>
            <View style={styles.button}>
              {this.state.buttonDisabled && <Button
                  disabled = {question.vibes}
                  color = "#fff"
                  title="Feel Vibration"
                  onPress={() => this.vibrateIt(question.vibration)}
                /> }
                </View><View style={styles.button}>
                {this.state.createVibrationz && <Button
                  disabled = {question.phase}
                  title="Make Vibration"
                  onPress={() => this.createVibration(question.number)}
                />}
            </View>
            <View>
              {this.state.finalResults && 
              <Text style={styles.text}>{this.state.clicks1},{this.state.clicks2},{this.state.clicks3},{this.state.clicks4},{this.state.clicks5},{this.state.clicks6} </Text>
              }
              </View>
            <View>
                <AButton
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

export default Quiz2;