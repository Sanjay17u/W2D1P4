import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

function Card({id, name, age, onDelete}) {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.componentText}>Name: { name }</Text>
                <Text style={styles.componentText}>Age: {age}</Text>
                <Button onPress={() => onDelete(id)} color='red' title='Delete' />
            </View>
        </>
    )
}

export default Card


const styles = StyleSheet.create({
    componentText: {
        color: 'black',
        fontWeight: '800',
        fontSize: 15,
        marginBottom: 10
    },

    container: {
        backgroundColor: 'white',
        width: "40%",
        padding: 20,
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 20,
        marginVertical: 20,
        marginHorizontal: 20
    }
})