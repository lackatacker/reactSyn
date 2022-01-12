import * as React from 'react';
import { View, Image, Text, FlatList } from 'react-native';
import styles from '../styles';
const DATA = [
    {
        id: '0x611',
        title: 'janvier 2022',
        amount: 500,
        paid: 1,
    },
    {
        id: '0x612',
        title: 'fevrier 2022',
        amount: 450,
        paid:0
    },
    {
        id: '0x613',
        title: 'mars 2022',
        amount: 900,
        paid:0
    },
    {
        id: '0x614',
        title: 'avril 2022',
        amount: 500,
        paid: 1,
    },
    {
        id: '0x615',
        title: 'juin 2022',
        amount: 450,
        paid:0
    },
    {
        id: '0x616',
        title: 'juillet 2022',
        amount: 900,
        paid:0
    },
];
const Profile = () => {
    const Item = ({ title, amount, id, paid }) => {
        if(paid==1){
        return(
        <View style={styles.greenPaid}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.title}>id:{id}</Text>
            <Text style={styles.title}>amount:{amount}</Text>
            <Text style={styles.title}>Paid</Text>
        </View>)}
        else{
        return(
            <View style={styles.redNonPaid}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.title}>id:{id}</Text>
                <Text style={styles.title}>amount:{amount}</Text>
                <Text style={styles.title}>Unpaid</Text>
            </View>)}
        
};
    
    const renderItem = ({ item }) => (
        <Item title={item.title} id={item.id} amount={item.amount} paid={item.paid} />
    );
    return (
        <View>
            <Image source={require("../images/3.png")} style={styles.card} />
            <Text style={[styles.center, styles.menu]}>Factures</Text>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

        </View>
    )
}

export default Profile;
