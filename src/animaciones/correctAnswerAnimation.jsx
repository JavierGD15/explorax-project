import React from 'react';
import { StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';


const CorrectAnswerAnimation = ({ isVisible, onAnimationComplete }) => {
  if (!isVisible) return null;

  return (
    <LottieView
      source={require('../../assets/Animaciones (.json)/Estrellitas.json')}  
      autoPlay
      loop={false}
      onAnimationFinish={onAnimationComplete}
      style={styles.backgroundAnimation}
    />
  );
};
const styles = StyleSheet.create({
   
  backgroundAnimation: {
      position: 'absolute',
      width: 300,
      height: 300,
  },
});

export default CorrectAnswerAnimation;
