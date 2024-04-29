// App.js
import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Advance from './src/components/advance';
import Welcome from './src/components/welcome';
import RocketAnimation from './src/animaciones/rocket';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <ImageBackground
      source={require('./assets/Elementos_estaticos/Fondo_RutaIterg_720x1600px_ExploraxV2-0.png')}
      style={styles.backgroundImage}
    >

      <Advance />
      <View style={styles.centeredView}>
        <Welcome />
      </View>
      <View style={styles.container}>
        <RocketAnimation />
      </View>
      <StatusBar style="auto" />

    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%', // Utiliza el 100% del ancho disponible
    height: '100%', // Utiliza el 100% de la altura disponible
    position: 'absolute',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
