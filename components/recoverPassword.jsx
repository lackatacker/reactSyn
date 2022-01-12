import { Text, View, TextInput, TouchableOpacity, ImageBackground, Image, ScrollView  } from 'react-native';
import { useState } from 'react';
import styles from '../styles';

const Recover = ({navigation}) => {
  const [email, setEmail] = useState('')
  return (
  <View style={styles.flex}>
    <ImageBackground source={require('../images/bg.png')} style={styles.flex}>
        <Image source={require("../images/syndicati.png")} style={styles.icon2}></Image>
      <View style={styles.form}>
        <TextInput style={styles.inputRecover} placeholder='E-mail' value={email}
        onChangeText={setEmail}></TextInput>
        <TouchableOpacity style={styles.submit} 
                onPress={()=>{
                    console.log('email: ',email)
                    navigation.navigate('LogIn')
                }}

              >
                <Text style={styles.submitText}> Send E-mail</Text></TouchableOpacity>
      </View>
    </ImageBackground>
  </View>
  );
}

export default Recover

