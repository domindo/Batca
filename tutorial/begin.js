import React, {Component, useState, useEffect, useRef} from 'react';

import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

export const Begin = ({navigation}) => {
  return (
    <ImageBackground
      style={{height: '100%', width: '100%'}}
      source={require('../res/background.jpg')}>
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            width: '100%',
            height: '30%',
            marginTop: '40%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.push('AR');
            }}
            style={{
              width: '40%',
              height: '20%',
              borderColor: 'white',
              borderWidth: 1,
              borderRadius: 100,
              backgroundColor: '#87CEFA',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 20}}>Bắt đầu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.push('TutorialList');
            }}
            style={{
              marginTop: '10%',
              width: '40%',
              height: '20%',
              borderColor: 'white',
              borderWidth: 1,
              borderRadius: 100,
              backgroundColor: '#4D33B9',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 20}}>Hướng dẫn</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
