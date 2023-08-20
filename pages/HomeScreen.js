import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Button, Input } from "@rneui/base";

import { birthdayWishes } from "../data/messages";
import NewCard from "./NewCard";

const HomeScreen = () => {
  const [sender, setSender] = useState("");
  const [recipient, setRecipient] = useState("");
  const [selectedMessage, setSelectedMessage] = useState("");
  const [cardInfo, setCardInfo] = useState(null);

  const handleMakeCard = () => {
    if (!sender || !recipient) return;

    setCardInfo({ sender, recipient, selectedMessage });
    setRecipient("");
    setSender("");
    setSelectedMessage(birthdayWishes[0]);
  };

  return (
    <View
      style={{ alignSelf: "stretch", height: "100%", justifyContent: "center" }}
    >
      <View
        style={{
          height: 100,
          padding: 8,
          justifyContent: "flex-end",
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 22,
            alignSelf: "center",
            lineHeight: 24,
            paddingVertical: 6,
            fontWeight: 800,
            letterSpacing: 2,
          }}
        >
          B-Day Card Maker
        </Text>
      </View>

      <View style={{ paddingHorizontal: 16, paddingTop: 8 }}>
        <Input
          placeholder="Sender"
          value={sender}
          style={{
            padding: 10,
            width: 30,
            marginHorizontal: 0,
            color: "#808080",
          }}
          onChangeText={(value) => setSender(value)}
        />
        <Input
          placeholder="Recipient"
          value={recipient}
          style={{
            padding: 10,
            width: 30,
            marginHorizontal: 0,
            color: "#808080",
          }}
          onChangeText={(value) => setRecipient(value)}
        />
        <Picker
          selectedValue={selectedMessage}
          style={{
            padding: 10,
            marginTop: 5,
            marginBottom: 20,
            backgroundColor: "transparent",
            borderWidth: 0,
            borderBottomWidth: 1,
            fontSize: 16,
            color: "#808080",
          }}
          onValueChange={(itemValue) => setSelectedMessage(itemValue)}
        >
          {birthdayWishes.map((wish, index) => {
            return <Picker.Item label={wish} value={wish} key={index} />;
          })}
        </Picker>
        <Button
          title="Make Card"
          type="solid"
          style={{ color: "#dddddd" }}
          onPress={handleMakeCard}
        />
      </View>
      <View
        style={{
          flex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {cardInfo && <NewCard cardInfo={cardInfo} />}
        {/* <NewCard /> */}
      </View>
    </View>
  );
};

export default HomeScreen;
