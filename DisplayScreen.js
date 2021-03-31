import React , { useState }from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Button, Input } from 'react-native-elements';
// import styled from 'styled-components';
// import ViewPager from '@react-native-community/viewpager';
import Appleiphone12promax2 from '../assets/images/Appleiphone12promax2.jpg';
import iphone12problue from '../assets/images/iphone12problue.jpg';
import IPhoneSE from '../assets/images/IPhoneSE.png';
import userlogo from '../assets/images/userlogo.png';
// let imageD='';
// let imageS='';

const DisplayScreen = ({ navigation, route }) => {
 

// const [name, setName] = route.params('');
// const [email, setEmail] = route.params('');
// const [password, setPassword] = route.params('');
// const [address, setAddress] = route.params('');
// const [phone, setPhone] = route.params('');
// const [phonemodel, setPhonemodel] = route.params('');
const [moredetails, setMoredetails] = useState('');

// if (onselect=='./screens/WaterdamageproScreen') {
//         console.log(route.params.text)      
// } else if('./screens/BatteryproScreen')
// {console.log(route.params.text) 
        
// }
// console.log(route)
// console.log(route.params)
// console.log(route.params.text) 

return (
        
       
 <View style={styles.container}>
         <Image source={userlogo}
        style={{ 
            width: 50, 
            height: 50,
            marginBottom: 3,
        }}/>
         <Text style= {{
        fontWeight: 800,
        color:'#FF0000'
        }}> USER INFORMATION 
   
   </Text>
   <View style={styles.item3}>
   
   
   <Text style={{fontSize:20, color:"#808080"}}>
   {route.params.paramKey1}</Text>
   
   
   <Text style={{fontSize:20, color:"#808080"}}>
   {route.params.paramKey2}</Text>
   
   <Text style={{fontSize:20, color:"#808080"}}>
   {route.params.paramKey3}</Text>
   
   <Text style={{fontSize:20, color:"#808080"}}>
   {route.params.paramKey4}</Text>
   
   <Text style={{fontSize:20, color:"#808080"}}>
   {route.params.paramKey5}</Text>
   
   
   </View>
<View style={styles.item1}>
<Text style={{fontSize:20, color:"#fff"}}>Tell us more about your phone problem</Text>
 <Input 
            placeholder="More details about phone issue" 
            autoFocus 
            type="more details" 
            value={moredetails} 
            onChangeText={(text) => setMoredetails(text)} 
            style={styles.inputStyle}
           />
</View> 

<View style={styles.item2}>
<Text style={{fontSize:20, color:"#fff"}}>
        SOFT TOUCH REPAIR SERVICE LTD</Text>
        <Text style={{fontSize:20, color:"#fff"}}>
        COMPANY ADDRESS</Text>
        <Text style={{fontSize:20, color:"#fff"}}>
        COMPANY PHONE NUMBER</Text>
</View>


<View style={styles.item4}>
<Text style={{
        fontSize:15, 
        color:"#000000", 
        textAlign: 'center',
        marginTop: 100
        }}>Walk-in Deliveries are always welcome

</Text>
<Text style={{fontSize:15, color:"#000000", textAlign: 'center'}}>
If you have any enquiries, please call us at +61............... or send us an email:
</Text>
</View>


</View>


);
}
export default DisplayScreen;

const styles = StyleSheet.create({
        container: {
        flex:1,
        justifyContent:"center",
        backgroundColor:"#fff",
        alignItems:"stretch"
        },

        title: {
        fontSize:20,
        color:"#fff"
        },

        item1: {
        backgroundColor:"white",
        flex:1
        },

        item2: {
        backgroundColor:"purple",
        flex:1
        },

        item3: {
        backgroundColor:"white",
        flex:2
        },

        item4: {
        backgroundColor:"white",
        flex:1,
        },
        });


        // inputContainer: {
        //     width: 300,
        //     height: 300,
        // }
        // button: {
        //     width: 200,
        //     marginTop: 10,
        



