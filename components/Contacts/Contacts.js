import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Contacts = ({ email, name, key, phone, photo }) => {
    return (
        <View style={styles.cards}>
            <View
                style={styles.card}
                // onPress={add}
            >
                <Image
                    style={styles.image}
                    source={{ uri: { photo } }}
                />
                <View style={styles.title}>
                    <Text>{name}</Text>
                </View>
                <View style={styles.prc}>
                    <Text>{phone}</Text>
                </View>
                <View style={styles.prc}>
                    <Text>{email}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cards: {
        marginVertical: 15,
    },
    card: {
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        minWidth: '90%',
    },
    image: {
        width: 150,
        height: 150,
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
    },
    prc: {
        marginRight: 10,
    },
});

export default Contacts;