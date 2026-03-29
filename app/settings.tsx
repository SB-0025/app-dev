import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const settings = () => {
  const [userName, setUserName] = useState("");
  const [getDetails, setGetDetails] = useState({});

  const fetchRepos = async () => {
    try {
      const data = await fetch(`https://api.github.com/users/${userName}`);
      const res = await data.json();
      if (res.message === "Not Found") {
        alert("User not found");
        return;
      }
      setGetDetails(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>User Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your GitHub username "
        value={userName}
        onChangeText={setUserName}
      />

      <Button
        title="Fetch Details"
        onPress={fetchRepos}
      ></Button>


      {getDetails.name && <Text>Name: {getDetails.name}</Text>}
      {getDetails.followers && <Text>Followers: {getDetails.followers}</Text>}
      {getDetails.public_repos && <Text>Repos: {getDetails.public_repos}</Text>}
    </View>
  );
};

export default settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 2,
    height: 40,
    marginBottom: 12,
    padding: 10,
    borderRadius: 10,
    marginTop: 12,
    backgroundColor: "white",
  },
  name: {
    backgroundColor: "#d3d0d0",
    marginTop: 5,
    padding: 5,
    borderRadius: 5,
    color: "red",
  },
});
