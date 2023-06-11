import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function App() {
  const [number, setNumber] = useState(0);
  const [ans, setAns] = useState( 
    {ans1:'primo 1', ans2: 'primo 2'}
  );

  const generateAns = async (num) => { //essa função deve fazer a requisição http
    try {
      const response = await fetch(`http://172.15.5.239:8000/?numero=${num}`, {
        method: 'GET',
      });
      const data = await response.text();
      if(data.length == 2){
        setAns({ans1:"NAN", ans2: "NAN"});
      }
      else{
        let num1 = data.split(', ')[0].split('(')[1], num2 = data.split(', ')[1].split(')')[0];
        setAns({ans1:num1, ans2:num2});
      }
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>ERATÓSTENES GENERATOR</Text>
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
          <View style={styles.partialAnswerContainer}>
            <Text>{ans.ans1.toString()}</Text>
          </View>
          
          <View style={styles.partialAnswerContainer}>
            <Text>{ans.ans2.toString()}</Text>
          </View>
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
    marginTop: 200,
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
    paddingHorizontal: 30
  },
  partialAnswerContainer:{
    backgroundColor: '#DA7635',
    height:50,
    width:50,
    borderRadius:25,
    justifyContent:'center',
    alignItems:'center'
  }

});
