// App.js
import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity, Text } from 'react-native';
import Advance from './advance';
import RocketAnimation from '../animaciones/rocket'
import TransitionScreen from '../animaciones/transitionScreen';

export default function Home({ navigation }) {
    const [showTransition, setShowTransition] = useState(false);

    const handlePress = () => {
        setShowTransition(true); // Muestra la pantalla de carga
    };

    const handleAnimationComplete = () => {
        navigation.navigate('Operation');
    };
    return (
        <ImageBackground
            source={require('../../assets/Elementos_estaticos/Fondo_RutaIterg_720x1600px_ExploraxV2-0.png')}
            style={styles.backgroundImageSpace}
        >
            <Advance />
            <View style={styles.centeredVieweSpace}>
                <Image
                    source={require('../../assets/Elementos_estaticos/pantalla_puntos/cuadroPunteo.png')}
                    style={styles.image}
                    resizeMode="contain" 
                />
                <RocketAnimation />
                <View style={styles.container}>

                    <View style={styles.overlay}>
                        <Text style={styles.header}>¡Desafíate!</Text>
                        <Image
                            source={require('../../assets/Elementos_estaticos/Línea_título.png')}
                            style={styles.borde}
                            resizeMode="contain"
                        />
                        <Text style={styles.subheader}>Supera estos desafíos y empieza a completar la misión de:</Text>
                        <Text style={styles.planetName}>Jerarquía de operaciones</Text>
                        {showTransition && (
                            <TransitionScreen onAnimationComplete={handleAnimationComplete} />
                        )}
                        <TouchableOpacity style={styles.button} onPress={handlePress}>
                            <Text style={styles.buttonText}>¡ACEPTO EL RETO!</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>

        </ImageBackground>

    );
}

const styles = StyleSheet.create({

    backgroundImageSpace: {
        flex: 1,
        resizeMode: 'cover',
    },

    image: {
        width: '70%',
        height: '80%',
        position: 'absolute', // Coloca la imagen detrás del texto
    },

    centeredVieweSpace: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    container: {

        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '70%',
        height: '80%',
        position: 'absolute',
    },
    overlay: {
        position: 'absolute', 
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
