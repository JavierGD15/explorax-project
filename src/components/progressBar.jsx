import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProgressBar = ({ currentLevel, maxLevel }) => {
  const progress = currentLevel / maxLevel;

  return (
    <View style={styles.container}>
      <Text style={styles.levelText}>Nivel {currentLevel}/{maxLevel}</Text>
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBarBackground}>
          <Image
            source={require("../../assets/Elementos_estaticos/BarraProgresoNaranja.png")}
            style={[styles.progressBarImage, { width: `${100 * progress}%` }]}
            resizeMode="stretch"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '100%',
  },
  levelText: {
    color: '#fff',
    fontSize: 16,
    alignSelf: 'flex-start', 
  },
  progressBarContainer: {
    width: '100%',
    flexDirection: 'row', 
  },
  progressBarBackground: {
    flex: 1,
    height: 20, 
    backgroundColor: '#fff', 
    overflow: 'hidden',
    borderRadius: 10,
  },
  progressBarImage: {
    height: '100%',
  }
});

export default ProgressBar;
