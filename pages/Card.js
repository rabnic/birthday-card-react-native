import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import { birthdayWishes } from "../data/messages";

import face from "../assets/face.jpg";

const BirthdayCard = ({ cardInfo }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [count, setCount] = useState(0);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  if (isFlipped) {
    // setTimeout(() => {
    // }, 2000);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.card, isFlipped ? styles.flippedCard : null]}
        onPress={handleCardFlip}
      >
        {isFlipped ? (
          <View style={styles.innerCard}>
            <Text style={styles.heading}>Horri Wakanda</Text>
            <Text style={styles.recipient}>{cardInfo.recipient}</Text>
            <Image source={face} style={styles.image} />

            <Text style={styles.message}>"{birthdayWishes[10]}"</Text>
            <Text style={styles.sender}>- {cardInfo.sender}</Text>
          </View>
        ) : (
          <View style={styles.innerCard}>
            <Text style={styles.flipText}>Tap to reveal</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 300,
    minHeight: 200,
    padding: 15,
    backgroundColor: "lightblue",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  flippedCard: {
    backgroundColor: "pink",
  },
  innerCard: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  flipText: {
    fontSize: 16,
    fontStyle: "italic",
  },
  heading: {
    fontSize: 22,
    fontWeight: "700",
  },
  message: {
    textAlign: "center",
    lineHeight: 19,
  },
  sender: {
    textAlign: "right",
  },
});

export default BirthdayCard;
