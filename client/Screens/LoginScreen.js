import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
//import {API} from '../config';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from "../context/auth";



const LoginScreen = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // context
    const [state, setState] = useContext(AuthContext)


    const handleSubmit = async () => {
        if (email === '' || password == '') {
            alert("All fields are required");
            return;
        }
        try {
            const { data } = await axios.post(`/signin`, {email, password});
            if (data.error){
                alert(data.error);
            } else {
                // save in context
                setState(data);
                // save response in async storage
                await AsyncStorage.setItem('@auth', JSON.stringify(data));
                console.log("LOGIN SUCCESS => ", data);
                alert("Login successful");
                // redirect
                navigation.navigate("MainPage");
            }
          } catch (error) {
            alert("Login failed. Try again.");
            console.error(error);
          }
    };
       /* const loadFromAsyncStorage = async () => {
            let data = await AsyncStorage.getItem("@auth");
            console.log("FROM ASYNC STORAGE => ", data);
        };
        loadFromAsyncStorage();
        */
        

        return (
      
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <StatusBar style="light" />
                <Image
                    source={require('../assets/images/background.png')}
                    style={{ position: 'absolute', height: '100%', width: '100%' }}
                />

                {/* trees */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', position: 'absolute' }}>
                    <Animated.Image
                        source={require('../assets/images/trees3.png')}
                        style={{ marginTop: '58%', marginRight: '55%' }}
                    />
                </View>

                {/* title and form */}
                <View style={{ flex: 1, justifyContent: 'space-around', paddingTop: 10, paddingBottom: 10 }}>
                    {/* title */}
                    <View style={{ alignItems: 'center' }}>
                        <Animated.Text style={{ marginTop: 80, fontSize: 40, fontWeight: 'bold', color: 'white', transform: [{ translateY: 0 }] }}>
                            Login
                        </Animated.Text>
                    </View>

                    {/* form */}
                    <View style={{ alignItems: 'center', marginHorizontal: 25, marginBottom: 80, marginTop: 80 }}>
                        <Animated.View style={{ backgroundColor: 'rgba(0,0,0,0.1)', padding: 20, borderRadius: 20, width: '100%', marginBottom: 20 }}>
                            <TextInput value={email} onChangeText={text => setEmail(text)} placeholder="Email" placeholderTextColor={'gray'} />
                        </Animated.View>
                        <Animated.View style={{ backgroundColor: 'rgba(0,0,0,0.1)', padding: 20, borderRadius: 20, width: '100%', marginBottom: 20, flexDirection: 'row', alignItems: 'center' }}>
                            <TextInput value={password} onChangeText={text => setPassword(text)} placeholder="Password" placeholderTextColor={'gray'} secureTextEntry={!showPassword} style={{ flex: 1 }} />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ alignItems: 'center', marginLeft: 10 }}>
                                <Text style={{ color: 'skyblue' }}>
                                    <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} color="skyblue" />
                                </Text>
                            </TouchableOpacity>
                        </Animated.View>
                        <Animated.View style={{ width: '100' }}>
                            <TouchableOpacity onPress={handleSubmit} style={style = styles.buttonStyle}>
                                <Text style={styles.buttonText}>Login</Text>
                            </TouchableOpacity>
                        </Animated.View>
                        <Animated.View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Text>Don't have an account? </Text>
                            <TouchableOpacity onPress={() => navigation.push('Signup')}>
                                <Text style={{ color: 'skyblue' }}>SignUp</Text>
                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                </View>
            </View>
           
        );
    }


const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: 'skyblue',
        padding: 15,
        borderRadius: 20,
        marginBottom: 20
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        paddingHorizontal: '42%'
    }
})

export default LoginScreen;

