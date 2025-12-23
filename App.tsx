import React from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'
import Card from './src/components/card.jsx'




function App() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainers}>
          <TextInput placeholder='Enter Name' style={styles.nameInput} />
          <TextInput placeholder='Enter Age' style={styles.ageInput} />
          <Button title='Add' />
        </View>
           <Card />
      </View>
    </>
  )
}


export default App


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'black', 
      alignItems: 'center',
  },

  inputContainers: {
    width: '50%',
    padding: 20,
    backgroundColor: 'white',
    marginTop: 30,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  nameInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 15
  },
  
  ageInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 15,
    marginBottom: 15
  },
})