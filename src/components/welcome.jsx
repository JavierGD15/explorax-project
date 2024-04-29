import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import RocketAnimation from '../animaciones/rocket';
export default function Welcome() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Elementos_estaticos/pantalla_puntos/cuadroPunteo.png')}
        style={styles.image}
        resizeMode="contain" // Ajusta la imagen dentro de su contenedor
      />
      <View style={styles.overlay}>
        <Text style={styles.header}>¡Desafíate!</Text>
        <Image
          source={require('../../assets/Elementos_estaticos/Línea_título.png')}
          style={styles.borde}
          resizeMode="contain" // Ajusta la imagen dentro de su contenedor
        />
        <Text style={styles.subheader}>Supera estos desafíos y empieza a completar la misión de:</Text>
        <Text style={styles.planetName}>Jerarquía de operaciones</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>¡ACEPTO EL RETO!</Text>
        </TouchableOpacity>

        
      </View>
    
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  image: {
    width: '70%',
    height: '80%',
    position: 'absolute', // Coloca la imagen detrás del texto
  },
  overlay: {
    position: 'absolute', // Coloca el texto sobre la imagen
    alignItems: 'center',
    padding: 20,
    width: '70%',
  },
  header: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subheader: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
  },
  planetName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    elevation: 2,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#204D8D',
    fontSize: 18,
    fontWeight: 'bold',
  },
  borde: {
    width: '100%',
  },
});
