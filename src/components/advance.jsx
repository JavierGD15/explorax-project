import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Constant from 'expo-constants';

export default function Advance() {
  return (
    <View style={styles.container}>
      <View >
        <Image source={require('../../assets/Elementos_estaticos/planeta.png')} style={styles.worldImage} />
      </View>
      <View >

        <View style={styles.scoreContainer}>
          <Image source={require('../../assets/Elementos_estaticos/moneda.png')} style={styles.coinImage} />
          <View style={styles.scoreBackground}>
            <Text style={styles.scoreText}>000000</Text>
          </View>
        </View>

        {/* <TouchableOpacity onPress={handlePressMenu} style={styles.menuButton}>
          <Image source={require('../../assets/icon.png')} style={styles.menuImage} />
        </TouchableOpacity> */}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    flexWrap: 'wrap',     
    alignItems: 'center', 
    justifyContent: 'space-between', 
  },
  worldImage: {
    
    width: 100, 
    height: 100, 
    marginTop: Constant.statusBarHeight,
  },

  scoreContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  coinImage: {
    width: 40, 
    height: 40, 
    resizeMode: 'contain',
    zIndex: 1, 

  },
  scoreBackground: {
    backgroundColor: '#204D8D', 
    borderRadius: 20, 
    paddingHorizontal: 22, 
    paddingVertical: 5, 
    marginLeft: -20, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'flex-end', 

  },
  scoreText: {
    color: '#FFFFFF', 
    fontSize: 20, 
    fontWeight: 'bold',
  },
});
