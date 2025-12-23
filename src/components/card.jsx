import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

function Card(props) {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.componentText}>Name: { props.name }</Text>
                <Text style={styles.componentText}>Age: { props.age }</Text>
            </View>
        </>
    )
}

export default Card


const styles = StyleSheet.create({
    componentText: {
        color: 'black',
        fontWeight: '800',
        fontSize: 15
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