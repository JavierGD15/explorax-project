import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const QuestionContainer = ({ question, imagePath }) => {
  const parts = question.split('?');
  const hasPlaceholder = parts.length > 1;

  return (
    <View style={styles.container}>
      <Text style={styles.text} adjustsFontSizeToFit numberOfLines={1}>
        {parts[0]}
      </Text>
      {hasPlaceholder && (
        <>
          <Image
          source={require("../../assets/Elementos_estaticos/QuestionMark.png")}
            style={styles.placeholder}
          />
          <Text style={styles.text} adjustsFontSizeToFit numberOfLines={1}>
            {parts[1]}
          </Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderColor: '#8D8D8D',
    borderBottomWidth: 11,
    borderRadius: 11,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    flexWrap: 'wrap', 
  },
  text: {
    fontSize: 30, 
    color: '#133362',
    flexShrink: 1, 
    fontWeight: 'bold',
    height: 70,
    justifyContent: 'center',
  },
  placeholder: {
    width: "18%",
    height: "100%",
    marginHorizontal: 10,
    borderRadius: 20,
  }
});

export default QuestionContainer;
