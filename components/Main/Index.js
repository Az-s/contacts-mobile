import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from '../../store/actions/actions';
import Contacts from '../Contacts/Contacts';

const Index = () => {
    const dispatch = useDispatch();

    const contacts = useSelector(state => state.contact);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.title}>
          <Text style={styles.text}>Contacts</Text>
        </View>
        {contacts.map(c => (
          <Contacts
            key={c.id}
            name={c.dish}
            email={c.email}
            phone={c.phone}
            photo={c.photo}
          />
        ))}
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      textAlign: 'center',
      marginVertical: 20,
      backgroundColor: '#497ebf',
      minWidth: '100%',
      padding: 10,
    },
    text: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 18,
      top: 0,
    }
  });

export default Index;
