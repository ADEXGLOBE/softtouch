import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import screendamage from '../assets/images/screendamage.png';
import waterdamage from '../assets/images/waterdamage.png';
import battery from '../assets/images/battery.png';


const PhonerepairScreen = ({ route, navigation }) => {




return (
    <View>
        <ScrollView>
        <Text> Select your Mobile phone issue
        
        </Text>
       
       
       
        <TouchableOpacity 
        onPress={() => navigation.navigate('Brokenglasspro', { 
            paramkey7: screendamage
        })}
        style={styles.button}>
        <Image source={screendamage}
        style={{ 
            width: 150, 
            height: 250, 
            alignContent: 'center',
            marginLeft: 120,
        }}/>

            </TouchableOpacity> 



          


            <TouchableOpacity 
        onPress={() => navigation.navigate('Waterdamagepro')}
        style={styles.button}>
        <Image source={waterdamage}
        style={{ width: 150, height: 250, marginLeft: 120,
        }}/>

            </TouchableOpacity> 


            {/* <TouchableOpacity 
        onPress={() => navigation.navigate('Display')}
        style={styles.button}>
        <Image source={chargingissue}
        style={{ width: 150, height: 250, marginLeft: 30,
        }}/>

            </TouchableOpacity>  */}

            <TouchableOpacity 
        onPress={() => navigation.navigate('Batterypro')}
        style={styles.button}>
        <Image source={battery}
        style={{ width: 150, height: 250, marginLeft: 120,
        }}/>

            </TouchableOpacity> 
       


<Button 
onPress={() => navigation.navigate('Chargingpro')}
containerStyle={styles.button}

 title="Charging issue"
 style={{marginTop: "200px"}}
/> 

<Button 
onPress={() => navigation.navigate('Batterypro', {
    
})}
containerStyle={styles.button}

 title="Battery related issue"
 style={{marginTop: "200px"}}
/> 

<Button 
onPress={() => navigation.navigate('Camerapro')}
containerStyle={styles.button}

 title="Camera issue"
 style={{marginTop: "200px"}}
/> 

<Button 
onPress={() => navigation.navigate('Display')}
containerStyle={styles.button}

 title="Other Problem (Please specify)"
 style={{marginTop: "200px"}}
/> 

</ScrollView>
</View>
);
};
export default PhonerepairScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
        width: 500,

    },
inputContainer: {
    width: 500,
},
button: {
    width: 500,
    marginTop: 10,
},
});