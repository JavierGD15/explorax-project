import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import CorrectAnswerAnimation from '../animaciones/correctAnswerAnimation';
import TransitionScreen from '../animaciones/transitionScreen';

const AnswerButtons = ({ options, navigation }) => {
  const [selected, setSelected] = useState(null);
  const [selectedB, setButton] = useState(null);
  const [showNext, setShowNext] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [showTransition, setShowTransition] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);


  const handlePress = (option) => {
    setSelected(option);
    setShowNext(true);  // Muestra el botón siguiente
    setButton(option);
    setIsDisabled(true);
  };

  const change = () => {
    setShowTransition(true);
  };

  const handleAnimationCompleteButton = () => {
    navigation.navigate('Points');
  };

  const handleAnimationComplete = () => {
    setButton(null);

  };

  useEffect(() => {
    if (showNext) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true
      }).start();
    }
  }, [showNext]);

  const getColor = (option) => {
    if (selected && selected.id === option.id) {
      return option.correct ? '#6FBA3B' : '#E6333C';
    }
    return '#6AB1B5';
  };

  const getDepthColor = (option) => {
    if (selected && selected.id === option.id) {
      return option.correct ? '#4F9C2F' : '#B52C41';
    }
    return '#448B8C';
  };

  return (
    <View style={styles.container}>
      {options.map((option) => (
        <TouchableOpacity
        disabled={isDisabled}
          key={option.id}
          style={[styles.button, { backgroundColor: getColor(option), borderColor: getDepthColor(option) }]}
          onPress={() => handlePress(option)}
        >
          <Text style={styles.text}>{option.id}</Text>
        </TouchableOpacity>
      ))}
      <CorrectAnswerAnimation
        isVisible={selectedB && selectedB.correct}
        onAnimationComplete={handleAnimationComplete}
      />
      {showTransition && (
        <TransitionScreen onAnimationComplete={handleAnimationCompleteButton} />
      )}
      <Animated.View style={[styles.nextButtonContainer, { opacity: fadeAnim }]}>
        <TouchableOpacity style={styles.buttonNext} onPress={change}>
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: Dimensions.get('window').width / 2 - 50, 
    height: 70, 
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderWidth: 1,
    borderRadius: 10
  },
  text: {
    fontSize: (Dimensions.get('window').width / 2 - 30) * 0.2, 
    color: '#fff',
  },
  nextButtonContainer: {
    bottom: 50
  },
  nextButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    elevation: 2,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  nextButtonText: {
    color: '#133362',
    fontSize: 16,

  },
  buttonNext: {
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
});

export default AnswerButtons;
