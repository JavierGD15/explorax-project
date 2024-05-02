import React from 'react';
import { StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

export default function RocketAnimation() {
    return (
        
            <LottieView
                source={require('../../assets/Animaciones (.json)/D con fuego.json')}
                autoPlay
                loop
                style={styles.backgroundAnimation}
            />
       
    );
}

const styles = StyleSheet.create({
   
    backgroundAnimation: {
        position: 'absolute',
        left: 0,
        right: '20%',
        top: '10%',
        bottom: 0,
    },
});
