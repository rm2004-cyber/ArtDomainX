// app/(auth)/login.tsx
import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonComp from '../../components/ButtonComp';

export default function ogin() {
  return (
    <SafeAreaView>
        <View style= {styles.container}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.subtitle}>Measure the performance of cryptos, get big profits!</Text>
        </View>
        <View>
            <ButtonComp title= "Sign in with Google "/>
            <Text style ={styles.email_text}>or Sign with Email</Text>
        </View>

        <View>
            <Text style= {styles.details_text}>Email</Text>
            <TextInput placeholder='mail@website.com' style = {styles.input}/>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
   container: {
    padding: 24,
    marginTop : 20,
    justifyContent: 'center',
   },
   title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 6,
   },
   subtitle: {
    fontSize: 14,
    color: '#444',
    marginBottom: 20,
   },
   email_text:{
    marginLeft: 145,
    marginTop: 10,

   },
   details_text:{
    fontSize: 18,
    paddingLeft: 22,
    marginTop: 20,

   },
   input:{
    borderWidth: 1,
    width: "90%",
    borderRadius: 7,
    marginLeft: 19,
    marginTop: 10,
    padding: 10,
   }
    
})
