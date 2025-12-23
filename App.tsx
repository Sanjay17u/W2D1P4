import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'
import Card from './src/components/card.jsx'




function App() {

  const [username, setUsername] = useState<string>('')
  const [age, setAge] = useState<string>('')
  const [cards, setCards] = useState<{ id: number; name: string; age: string }[]>([])


  const AddCards = () => {
    if (username === '' && age === '') {
      return
    } else {
      const newCard = {
        id: Date.now(),
        name: username,
        age: age,
      }  // object ke form mai new card object bnaya or arryae ki state mai set kiya *** cards (array of objects) ***

      setCards([...cards, newCard])  // ye main line hai

      setUsername('') // ye bhi
      setAge('') // ye bhi

    }
  }

  const deleteCard = (id: number) => {
     const updatedCards = cards.filter(function (item) {
       return item.id !== id
      }
    )
    setCards(updatedCards)
  }


  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainers}>
          <TextInput placeholder='Enter Name' onChangeText={(text) => {
            const onlyLetters = text.replace(/[^a-zA-Z]/g, '')
            setUsername(onlyLetters)
          }} value={username} style={styles.nameInput} />


          <TextInput onChangeText={(text) => {
            const onlyNumbers = text.replace(/[^0-9]/g, '')
            setAge(onlyNumbers)
          }} placeholder='Enter Age' keyboardType="numeric" value={age} style={styles.ageInput} />

          <Button onPress={AddCards} title='Add' />
        </View>


        {
          cards.map(function (item) {
            return <Card
              key={item.id}
              id={item.id}
              name={item.name}
              age={item.age}
              onDelete={deleteCard}
            />
          })
        }

        
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