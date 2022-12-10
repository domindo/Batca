import React, {Component, useState, useContext, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {CountContext} from '../context/context';

import Fireworks from 'react-native-fireworks';

export const Fail = ({navigation}) => {
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
        }}>
        <Text style={{color: 'white', fontSize: 20}}>
          Cá đã rơi!
        </Text>
        <Button
          title="Tiếp tục chơi"
          style={{marginTop: '10%'}}
          onPress={() => navigation.push('AR')}
        />

        
      </View>
    </SafeAreaView>
  );
};
