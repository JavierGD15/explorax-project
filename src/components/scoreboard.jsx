import React, { useRef, useEffect } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, Dimensions,Animated } from 'react-native';


const AnimatedCounter = ({ value, label, imageSrc }) => {
    const animatedValue = useRef(new Animated.Value(0)).current;
  
    useEffect(() => {
      Animated.timing(animatedValue, {
        toValue: value,
        duration: 1000,
        useNativeDriver: true
      }).start();
    }, [value]);
  
    const animatedText = animatedValue.interpolate({
      inputRange: [0, value],
      outputRange: ["0", `${value}`]
    });
  
    const { width } = Dimensions.get('window');
  
    const starSize = width * 0.1; 
  
    return (
  
      <View style={styles.container}>
        <Image source={imageSrc}
          style={[styles.star, { width: starSize, height: starSize }]}
        />
  
        <View style={styles.container}>
          <ImageBackground
            source={require('../../assets/Elementos_estaticos/pantalla_puntos/background_conteo_preguntas.png')}
            style={styles.backgroundImage}
            resizeMode="cover"
          >
            <Animated.Text style={styles.textPoints}>
              {animatedText}
            </Animated.Text>
            <Text style={styles.text}>{label}</Text>
          </ImageBackground>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: -15,
  
    },
    backgroundImage: {
      width: Dimensions.get('window').width / 2 - 110,
      height: 85,
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    star: {
      resizeMode: 'contain',
      zIndex: 5,
    },
    text: {
      color: '#133362',
      fontSize: 10,
      fontWeight: 'bold',
    },
    textPoints: {
      color: '#133362',
      fontSize: 20,
      fontWeight: 'bold',
    }
  });
  
  const Scoreboard = ({ questions, correct, incorrect }) => {
    return (
      <View style={{ flexDirection: 'row', padding: 20 }}>
        <AnimatedCounter value={questions} label="Preguntas" imageSrc={require('../../assets/Elementos_estaticos/pantalla_puntos/estrella_preguntas.png')} />
        <AnimatedCounter value={correct} label="Correctas" imageSrc={require('../../assets/Elementos_estaticos/pantalla_puntos/estrella_correctas.png')} />
        <AnimatedCounter value={incorrect} label="Incorrectas" imageSrc={require('../../assets/Elementos_estaticos/pantalla_puntos/estrella_incorrectas.png')} />
      </View>
    );
  };
  
  export default Scoreboard;