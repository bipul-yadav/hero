/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CodePush from 'react-native-code-push'
class App extends Component{

  constructor(){
    super()
    this.state={
      logs:[]
    }

    this.codepushSync()
  }
  

  codepushSync(){
    console.log("pressed")
    CodePush.sync({
      updateDialog:true,
      installMode:CodePush.InstallMode.IMMEDIATE
    },(status)=>{
      for(var key in CodePush.SyncStatus){
        if(status==CodePush.SyncStatus[key]){
          this.setState({logs:key})
        }
      }
    })
  }
  render(){
    return(
    <View>
      <Text>CodePush</Text>
      <Text>Hello hero</Text>
      <Text>Hello bipul</Text>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
    <Text>{this.state.logs}</Text>
      <Button title="codepush" onPress={()=>this.codepushSync()}/>
    </View>
      )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
