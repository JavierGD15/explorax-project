import React from 'react';
import { Text, View, StyleSheet, Image,ImageBackground } from 'react-native';
import QuestionContainer from './questionContainer';
import ProgressBar from './progressBar';
import AnswerButtons from './answerButtons';
import Advance from './advance';

export default function Operation({ navigation }) {
    const lvl = 1;
    const lvlMax = 10;

    const options = [
        { id: 'ax(b–c)', correct: false },
        { id: 'a x b / c', correct: false },
        { id: 'a x b - c', correct: true },
        { id: 'a + b - c', correct: false }
    ];


    return (

        <ImageBackground
            source={require('../../assets/Elementos_estaticos/Fondo_RutaIterg_720x1600px_ExploraxV2-0.png')}
            style={styles.backgroundImageSpace}
        >
            <Advance />
            <View style={styles.container}>
                <Text style={styles.header}>Desafíate</Text>
                <Image
                    source={require('../../assets/Elementos_estaticos/Línea_título.png')}
                    style={styles.borde}
                    resizeMode="contain"
                />
                <ProgressBar
                    currentLevel={5}
                    maxLevel={10}
                />
                <View>
                    <QuestionContainer
                        question="a x b - c = ? "
                        imagePath="../../assets/Elementos_estaticos/QuestionMark.png" />
                </View>
                <View >
                    <AnswerButtons options={options} navigation={navigation} />
                </View>

            </View>

        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        rowGap: 20,
        padding: 20,
        alignItems: 'center',

    },
    header: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,

    },

    borde: {
        width: '100%',
    },
    text: {
        fontSize: 30,
        color: '#fff',
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

