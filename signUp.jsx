import { Text, View, TextInput, TouchableOpacity, ImageBackground, Image, ScrollView  } from 'react-native';
import { useState } from 'react';
import styles from '../styles';

const SignUp = ({navigation}) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  return (
<View 
  style={styles.flex}>
        <ScrollView style={styles.flex}>

        <ImageBackground source={require('../images/bg.png')} style={styles.flex}>
        <Image source={require("../images/syndicati.png")} style={styles.icon2}></Image>
      <View style={styles.form}>
        <TextInput style={styles.inputSignUp} 
        placeholder='First Name' 
        value={firstName}
        onChangeText={setFirstName}></TextInput>
        <TextInput style={styles.inputSignUp} placeholder='Last Name'
        value={lastName}
        onChangeText={setLastName}></TextInput>
        <TextInput style={styles.inputSignUp} placeholder='E-mail' value={email}
        onChangeText={setEmail}></TextInput>
        <TextInput style={styles.inputSignUp} placeholder='Phone number' value={phone}
        onChangeText={setPhone}></TextInput>
        <TextInput style={styles.inputSignUp} placeholder='Password' value={password}
        onChangeText={setPassword}
        secureTextEntry={true}></TextInput>
        <TextInput style={styles.inputSignUp} placeholder='Confirm Password' value={password2}
        onChangeText={setPassword2}
        secureTextEntry={true}></TextInput>
        <TouchableOpacity style={styles.submit} 
                onPress={()=>{
                  if(password==password2)
                    console.log('First name: ',firstName,'\nLast name: ',lastName,
                    '\nemail: ',email,'\nphone: ',phone)
                  else
                    console.log('passwords not Identic')
                }}

              >
                <Text style={styles.submitText}>Sign up!</Text></TouchableOpacity>
      </View>
    </ImageBackground>
    </ScrollView>

  </View>
  );
}

export default SignUp

