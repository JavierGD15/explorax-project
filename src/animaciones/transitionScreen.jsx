import React, { useEffect, useRef, useState } from 'react';
import { Animated, View, StyleSheet, Image, Easing } from 'react-native';

const TransitionScreen = ({ onAnimationComplete }) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
      easing: Easing.out(Easing.ease),
    }).start(() => {
      setAnimationDone(true);
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    });
  }, [scaleAnim, onAnimationComplete]);

 

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/Elementos_estaticos/logo_blanco_transicion.png')} style={styles.logo} />
      </View>
      <Animated.View
        style={[
          styles.circle,
          {
            backgroundColor: '#084872',
            transform: [
              {
                scale: scaleAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 2.5],
                }),
              },
            ],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.circle,
          {
            backgroundColor: '#4CB8E6',
            transform: [
              {
                scale: scaleAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 2],
                }),
              },
            ],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    position: 'absolute',
    zIndex: 1,
  },
  logo: {
    width: 200,
    height: 120,
  },
  circle: {
    width: 1000,
    height: 1000,
    borderRadius: 500,
    position: 'absolute',
  },
});

export default TransitionScreen;
