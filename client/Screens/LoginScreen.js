import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LoginScreen() {
    const navigation = useNavigation();
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    return (
        <View style={{ flex: 1, backgroundColor: 'white'}}>
            <StatusBar style="light" />
            <Image
                source={require('../assets/images/background.png')}
                style={{ position: 'absolute', height: '100%', width: '100%' }}
            />

            {/* trees */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', position: 'absolute'}}>
                <Animated.Image
                    source={require('../assets/images/trees3.png')}
                    style={{marginTop:'58%', marginRight: '55%'}}
                />
               
            </View>

            {/* title and form */}
            <View style={{ flex: 1, justifyContent: 'space-around', paddingTop: 10, paddingBottom: 10}}>
                {/* title */}
                <View style={{ alignItems: 'center' }}>
                    <Animated.Text style={{ marginTop: 80, fontSize: 40, fontWeight: 'bold', color: 'white', transform: [{ translateY: 0 }] }}>
                        Login
                    </Animated.Text>
                </View>

                {/* form */}
                <View style={{ alignItems: 'center', marginHorizontal: 25, marginBottom: 80, marginTop: 80 }}>
                    <Animated.View style={{ backgroundColor: 'rgba(0,0,0,0.1)', padding: 20, borderRadius: 20, width: '100%', marginBottom: 20 }}>
                        <TextInput placeholder="Email" placeholderTextColor={'gray'} />
                    </Animated.View>
                    <Animated.View style={{ backgroundColor: 'rgba(0,0,0,0.1)', padding: 20, borderRadius: 20, width: '100%', marginBottom: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput placeholder="Password" placeholderTextColor={'gray'} secureTextEntry={!showPassword} style={{ flex: 1 }} />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ alignItems: 'center', marginLeft: 10 }}>
                            <Text style={{ color: 'skyblue' }}>
                                <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} color="skyblue" />
                            </Text>
                        </TouchableOpacity>
                    </Animated.View>
                    <Animated.View style={{ width: '100' }}>
                        <TouchableOpacity onPress={() => { navigation.navigate('MainPage'); }} style={{ backgroundColor: 'skyblue', padding: 20, borderRadius: 20, marginBottom: 20 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', textAlign: 'center', paddingHorizontal: 140 }}>Login</Text>
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
