import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, KeyboardAviodingView} from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import DropDownPicker from 'react-native-dropdown-picker';
import AppIntroSlider from 'react-native-app-intro-slider';
import registration from '../assets/images/registration.jpg';





const RegisterScreen = ({ navigation }) => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [phonemodel, setPhonemodel] = useState('');
    
   

    
    
    
useLayoutEffect(() => {
    navigation.setOptions({
        headerBackTitle: 'Back to Registeration',
    });
}, [navigation]);
    

    function Register() { }
  
    return (
            <SafeAreaView style={{ flex: 1 }}>
             <ScrollView>
                <View style={styles.container}>
                    <StatusBar style='light'/>
                    <Image source={registration}
          style={{ width: 400, height: 250
           }} />
            
                 <View style={styles.inputContainer}>
<Input 
            placeholder="Enter your Full Name here" 
            autoFocus 
            type="name" 
            value={name} 
            onChangeText={(text) => setName(text)} 
            style={styles.inputStyle}
           />
<Input 
            placeholder="Enter your Email Address here" 
            autoFocus 
            type="email"  
            value={email} 
            onChangeText={(text) => setEmail(text)} 
            style={styles.inputStyle}
            />

{/* <Input 
            placeholder="Enter a Password here" 
            secureTextEntry type="password" 
            value={password} 
            onChangeText={(text) => setPassword(text)} 
            style={styles.inputStyle}
            /> */}

<Input 
            placeholder="Enter your Address here" 
            autoFocus type="address"  
            value={address} 
            onChangeText={(text) => setAddress(text)} 
            style={styles.inputStyle}
            />

<Input 
            placeholder="Enter Mobile Number here" 
            autoFocus type="phone number" 
            keyboardType={'numeric'}
            value={phone} 
            onChangeText={(number) => setPhone(number)} 
            style={styles.inputStyle}
            />

<Input 
            placeholder="Enter your Phone model" 
            autoFocus type="phone model" 
            value={phonemodel} 
            onChangeText={(text) => setPhonemodel(text)} 
            style={styles.inputStyle}
            />            
                    
         </View>

            <Button 
                title="Next"
                onPress={() => {
                navigation.navigate('Display', { 
                    paramKey1: name,
                    paramKey2: email,
                    paramKey3: address,
                    paramKey4: phone,
                    paramKey5: phonemodel,
                });
                }}
                containerStyle={styles.button}
                 style={{marginTop: "200px"}}
             /> 
        </View> 
    </ScrollView>
    </SafeAreaView>
    );
};

    
export default RegisterScreen;
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
        
    },

    button: {
        width: 200,
        marginTop: 10,
    },

    inputContainer: {
        width: 300,
    },

    inputStyle: {
        width: '100%',
        height: 44,
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#DBDBD6',
      },
    
    });