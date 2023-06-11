import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function App() {
  const [number, setNumber] = useState(0);
  const [ans, setAns] = useState( 
    {ans1:'primo 1', ans2: 'primo 2'}
  );

  const generateAns = (num) => { //essa função deve fazer a requisição http
    setAns({ ans1: 3, ans2: 5 });
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>ERASTÓTENES GENERATOR</Text>
      </View>
      
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          keyboardType='numeric'
          placeholder='Digite o número para fatorar'
          onChange={(event) => setNumber(event.nativeEvent.text)}/>
        <View style={styles.buttonContainer}>
          <Button 
          color='#DA7635' 
          title='Fatorar'
          onPress={() => generateAns(number)}
          />
        </View>
        <View style={styles.answerContainer}>
          <Text>{ans.ans1.toString()}</Text>
          <Text>{ans.ans2.toString()}</Text>
        </View>
        
      </View>
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundColor:'#D6D4A0',
    alignItems:'center'
  },
  titleContainer:{
    padding:20,
    borderRadius:10,
    backgroundColor: '#DA7635',
  },
  title:{
    textAlign:'center',
    fontSize: 27,
    fontWeight:'bold',
    color:'#D6D4A0'
  },
  inputContainer:{
    padding:40,
  },
  input:{
    borderWidth: 1,
    borderColor: 'grey',
    padding:5,
    width:200,
  },
  buttonContainer:{
    margin: 30,
  },
  answerContainer:{
    paddingTop: 30,
    color:'red',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    
  }

});
