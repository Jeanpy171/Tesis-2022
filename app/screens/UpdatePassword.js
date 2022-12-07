import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Poppins_400Regular,Poppins_400Regular_Italic,Poppins_500Medium,Poppins_800ExtraBold,Poppins_600SemiBold} from '@expo-google-fonts/poppins';
import { useFonts } from '@expo-google-fonts/dev';
import MainHeader from '../components/MainHeader';
import Input from '../components/Input';
import { useState } from 'react';

const UpdatePassword = () => {
    const [errorPassword, setErrorPassword] = useState();
    const [errorPassword2, setErrorPassword2] = useState();
    const [password, setPassword] = useState();
    const [newPassword, setNewPassword] = useState();
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_800ExtraBold,
        Poppins_600SemiBold
      });
     
      if (!fontsLoaded) {
        return null;
      } else {
  return (
    <View style={styles.container}>
        <MainHeader screen={"Mi Perfil"} name={'ios-menu-outline'} onPress={() => navigation.openDrawer()}/>
        <Text style={styles.title}>Si no te sientes seguro con tu contraseña actual, puedes actualizarla aquí</Text>
        <View style={{width:"90%"}}>
        <Input
              onChangeText={text => {
                setErrorPassword("")
                setPassword(text)}}
            //onFocus={() => handleError(null, 'password')
            iconName="lock-outline"
            label="Contraseña anterior"
            placeholder="Ingresa tu contraseña anterior"
            error={errorPassword}
            maxLength={15}
            password
            keyboard='default'
            editable={true}
            value={password}
          />
          <Input
              onChangeText={text => {
                setErrorPassword2("")
                setNewPassword(text)}}
            //onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Contraseña actual"
            placeholder="Ingresa tu contraseña actual"
            error={errorPassword2}
            maxLength={15}
            password
            keyboard='default'
            editable={true}
            value={setNewPassword}
          />
          </View>
    </View>
  )
}
}

export default UpdatePassword

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      //justifyContent: 'center',
    },
    title:{
        fontSize:16,
        textAlign:'left',
        marginVertical:15,
        fontFamily: 'Poppins_500Medium',
        width:"90%"
    },
  });
  