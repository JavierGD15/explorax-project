import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import LottieView from 'lottie-react-native';

export default function RocketAnimation() {
    return (
        <View style={styles.container}>
            <LottieView
                source={require('../../assets/Animaciones (.json)/D con fuego.json')}
                autoPlay
                loop
                style={styles.backgroundAnimation}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    backgroundAnimation: {
        position: 'absolute',
        left: 0,
        right: '20%',
        top: '20%',
        bottom: 0,
    },
});
