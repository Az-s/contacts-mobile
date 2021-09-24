import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import ModalInfo from '../Modalinfo/ModalInfo';

const Contacts = ({ email, name, id, phone, photo }) => {
    return (
        <>
            <View style={styles.cards}>
                <Pressable>
                    <View
                        style={styles.card}
                        onPress={() => add(id)}
                    >
                        <Image
                            style={styles.image}
                            source={{ uri: photo }}
                        />
                        <View style={styles.title}>
                            <Text>{name}</Text>
                            {/* <Text>{phone}</Text>
                        <Text>{email}</Text> */}
                        </View>
                    </View>
                </Pressable>
            </View>
            <ModalInfo
                id={id}
                name={name}
                email={email}
                phone={phone}
                photo={photo}
            />
        </>
    )
};

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
        fontSize: 18,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '50%',
    },
});

export default Contacts;
