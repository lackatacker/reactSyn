import * as React from 'react';
import { View, Image, Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from '../styles';

const Accueil = ({navigation}) => {
    return (
        <View style={[styles.center, styles.banner, styles.flex]}>
            <Image source={require("../images/documents.png")} style={styles.banner} />
            <Text style={[styles.center, styles.menu]}>Menu</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate("Factures")}}>
            <View style={styles.card}><ImageBackground style = {{width:342, height:92, borderRadius:6}} source={require("../images/1.png")}></ImageBackground></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate("Charges")}}>
            <View style={styles.card}><ImageBackground style = {{width:342, height:92, borderRadius:6}} source={require("../images/2.png")}></ImageBackground></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate("Profile")}}>
            <View style={styles.card}><ImageBackground style = {{width:342, height:92, borderRadius:6}} source={require("../images/3.png")}></ImageBackground></View>
            </TouchableOpacity>
        </View>
    )
}

export default Accueil;
