import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from 'axios';

export default function SignupScreen() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  

  const handleSubmit = async () => {
    if (name === '' || email === '' || password == ''){
      alert("All fields are required");
      return;
    }
    const resp = await axios.post("http://localhost:8001/api/signup", {name, email, password });
    console.log(resp.data)
    alert("Sign Up Successful");
  };

  return (
    <KeyboardAwareScrollView>
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar style="light" />
      <Image
        source={require('../assets/images/background.png')}
        style={{ position: 'absolute', height: '100%', width: '100%' }}
      />

      {/* lights */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', position: 'absolute' }}>
        <Image
          source={require('../assets/images/light.png')}
          style={{ height: 225, width: 90 }}
        />
        <Image
          source={require('../assets/images/light.png')}
          style={{ height: 160, width: 65, opacity: 0.75 }}
        />
      </View>

      {/* title and form */}
      <View style={{ flex: 1, justifyContent: 'space-around', paddingTop: 100}}>
        {/* title */}
        <View style={{ alignItems: 'center', marginTop: '40%' }}>
          <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'white' }}>
            Sign Up
          </Text>
        </View>

        {/* form */}
        <View style={{ alignItems: 'center', marginHorizontal: 25, marginBottom: 80, marginTop: 160 }}>
          <View style={{ backgroundColor: 'rgba(0,0,0,0.1)', padding: 20, borderRadius: 20, width: '100%', marginBottom: 20 }}>
            <TextInput value={name} onChangeText={text => setName(text)} placeholder="Username" placeholderTextColor={'gray'} />
          </View>
          <View style={{ backgroundColor: 'rgba(0,0,0,0.1)', padding: 20, borderRadius: 20, width: '100%', marginBottom: 20 }}>
            <TextInput value={email} onChangeText={text => setEmail(text)} placeholder="Email" placeholderTextColor={'gray'} />
          </View>
          <View style={{ backgroundColor: 'rgba(0,0,0,0.1)', padding: 20, borderRadius: 20, width: '100%', marginBottom: 20, flexDirection: 'row', alignItems: 'center' }}>
            <TextInput value={password} onChangeText={text => setPassword(text)} placeholder="Password" placeholderTextColor={'gray'} secureTextEntry={!showPassword} style={{ flex: 1 }} />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ alignItems: 'center', marginLeft: 10 }}>
              <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} color="skyblue" />
            </TouchableOpacity>
          </View>
          <View style={{ width: '100' }}>
            <TouchableOpacity onPress={handleSubmit} style={{ backgroundColor: 'skyblue', padding: 20, borderRadius: 20, marginBottom: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', textAlign: 'center', paddingHorizontal: 132 }}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.push('Login')}>
              <Text style={{ color: 'skyblue' }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    </KeyboardAwareScrollView>
  );
}
