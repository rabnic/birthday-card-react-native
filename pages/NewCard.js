import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import FrontCover from "../assets/bdaycard.png";
import BackCover from "../assets/muffins.jpg";

const NewCard = ({ cardInfo }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={{ width: "100%", height: "100%" }}
        onPress={handleCardFlip}
      >
        {!isFlipped ? (
          <View style={styles.front}>
            <Image
              style={styles.image}
              source={FrontCover}
              resizeMode="contain"
            />
          </View>
        ) : (
          <ImageBackground style={styles.back} source={BackCover}>
            <View style={styles.overLay}>
              <Text style={styles.head}>Happy Birthday</Text>
              <Text style={styles.recipient}>{cardInfo.recipient}</Text>

              <Text style={styles.message}>"{cardInfo.selectedMessage}"</Text>
              <Text style={styles.sender}>- {cardInfo.sender}</Text>
            </View>
          </ImageBackground>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 425,
    borderWidth: 4,
    borderColor: "#9612eb",
    margin: "auto",
    marginVertical: 10,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 10, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 15,
    // backgroundColor: "rgba(230, 240, 230, 0.5)",
  },
  back: {
    width: "100%",
    height: "100%",
  },
  overLay: {
    width: "100%",
    height: "100%",
    padding: 12,
    backgroundColor: "rgba(0,0,0,.75)",
  },
  front: {
    width: "100%",
    height: "100%",
  },
  imgset: {
    position: "relative",
    zIndex: 1,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    borderRadius: 5,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    width: "80%",
    height: "80%",
    margin: "auto",
  },
  head: {
    fontSize: 24,
    marginVertical: 60,
    textAlign: "center",
    color: "#fff",
  },
  message: {
    fontSize: 18,
    lineHeight: 25,
    color: "#bbb",
    fontStyle: "italic",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 4,
  },
  sender: {
    textAlign: "right",
    fontSize: 18,
    color: "#ddd",
    marginTop: 30,
    fontWeight: "700",
  },
  recipient: {
    fontSize: 18,
    color: "#ddd",
    textAlign: "center",
    fontWeight: "500",
  },
});

export default NewCard;
