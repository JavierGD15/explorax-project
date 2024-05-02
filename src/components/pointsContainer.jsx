import React, { useEffect, useRef, useState } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ImageBackground, Animated, TouchableOpacity } from 'react-native';
import ProgressBar from './progressBar';
import Scoreboard from './scoreboard';
import LottieView from 'lottie-react-native';
import Advance from './advance';

const PointsContainer = ({ value = 8 }) => {
    const totalQuestions = 20;
    const totalCorrect = 17;
    const totalIncorrect = 3;
    const { width } = Dimensions.get('window');

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

    const starSize = width * 0.2;

    return (

        <ImageBackground
            source={require('../../assets/Elementos_estaticos/Fondo_RutaIterg_720x1600px_ExploraxV2-0.png')}
            style={styles.backgroundImageSpace}
        >
            <Advance />
            <View style={styles.centeredView}>
            <ProgressBar
                currentLevel={5}
                maxLevel={10}
            />
            <View style={styles.containers}>
                <LottieView
                    source={require('../../assets/Animaciones (.json)/D con fuego 02.json')}
                    autoPlay
                    loop
                    style={styles.backgroundAnimation}
                />
            </View>
            <ImageBackground
                source={require('../../assets/Elementos_estaticos/pantalla_puntos/cuadroPunteo.png')}
                style={styles.backgroundImage}
                resizeMode="cover"
            >
                <Text style={styles.header}>¡Buen trabajo!</Text>
                <Image
                    source={require('../../assets/Elementos_estaticos/Línea_título.png')}
                    style={styles.borde}
                    resizeMode="contain"
                />
                <Scoreboard
                    questions={totalQuestions}
                    correct={totalCorrect}
                    incorrect={totalIncorrect}
                />
                <View style={styles.pruebas}>
                    <Text style={styles.levelText}>Monedas Obtenidas</Text>
                    <View style={styles.container}>
                        <Image source={require('../../assets/Elementos_estaticos/pantalla_puntos/Moneda.png')}

                            style={[styles.coinImage, { width: starSize, height: starSize }]}
                        />

                        <View style={styles.container}>
                            <ImageBackground
                                source={require('../../assets/Elementos_estaticos/pantalla_puntos/background_conteomonedas.png')}
                                style={styles.backgroundImageCoint}
                                resizeMode="cover"
                            >
                                <Animated.Text style={styles.textPoints}>
                                    {animatedText}
                                </Animated.Text>
                            </ImageBackground>
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={styles.nextButton}>
                    <Text >Iniciar Misión</Text>
                </TouchableOpacity>

            </ImageBackground>

        </View>
            
        </ImageBackground>
        
       

    );
};

const styles = StyleSheet.create({
    centeredView: {
        flexDirection: 'column',
        rowGap: 20,
        padding: 20,
        alignItems: 'center',
    },
    backgroundImage: {
        width: Dimensions.get('window').width - 50,
        height: '80%',
        alignItems: 'center',
        marginTop: 20,

    },
    header: {
        color: '#FFFFFF',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 40,
    },
    borde: {
        width: '100%',
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: -30,
    },
    backgroundImageCoint: {
        width: Dimensions.get('window').width / 2 - 20,
        height: 85,
        alignItems: 'center',
        justifyContent: 'center',

    },
    coinImage: {
        resizeMode: 'contain',
        zIndex: 1,

    },
    levelText: {
        color: '#fff',
        fontSize: 16,
        margin: 15,
    },
    textPoints: {
        color: '#133362',
        fontSize: 40,
        fontWeight: 'bold',
    },
    pruebas: {
        marginTop: 60,
    },
    nextButton: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 40,
        marginTop: 30,
        elevation: 2,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 4,

    },
    containers: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundAnimation: {
        width: 200,
        height: 200,
        marginBottom: -40,
        resizeMode: 'contain',
        zIndex: 1,
    },
    backgroundImageSpace: {
        flex: 1,
        resizeMode: 'cover',
    },
    
    image: {
        width: '70%',
        height: '80%',
        position: 'absolute', 
    },

});

export default PointsContainer;
