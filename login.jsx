import { Text, View, TextInput, TouchableOpacity, ImageBackground, Image, ScrollView  } from 'react-native';
import { useState } from 'react';
import styles from '../styles';

const LogIn = ({navigation}) => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  return (
    <View style={styles.flex}>
      <ImageBackground source={require('../images/background.png')} style={styles.flex}>
        <Image source={require("../images/syndicati.png")} style={styles.icon}></Image>
      <View style={styles.form}>
        <TextInput style={styles.input} 
        placeholder='E-mail' 
        value={email} onChangeText={setEmail}></TextInput>
        <TextInput style={styles.input} 
        placeholder='Password' value={password}
        onChangeText={setPassword} secureTextEntry={true}></TextInput>
        <TouchableOpacity style={styles.submit} 
        onPress={()=>{
                  console.log('\nemail: ',email,'\npassword: ',password)
                  navigation.navigate('Accueil')
                }}
              >
            <Text style={styles.submitText}>Log in!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate("Recover")}}>
            <Text style={{color:'#fff'}}> Forgot your password?</Text>
        </TouchableOpacity>
        <Text style={styles.txt}>New user? </Text>
        <TouchableOpacity
            onPress={()=>{navigation.navigate('SignUp')}}
            >
              <Text style={[styles.txt, {color:'#fff'}]}> click here </Text>
        </TouchableOpacity>
        <Text style={styles.txt}>to sign up</Text>
      </View>
      </ImageBackground>

    </View>
  );
}

export default LogIn

