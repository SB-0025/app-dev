import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const settings = () => {
  const [userName, setUserName] = useState("");
  const [randomName, setRandomName] = useState({});

  const fetchRepos = async () => {
    const data = await fetch(`https://api.github.com/users/${userName}`);
    const res = await data.json();
    setRandomName(res);
  };

  return (
    <View style={styles.container}>
      <Text>User Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your GitHub username "
        value={userName}
        //   onChange={(e) => setName(e.target.value)} // -> not correcet syntax
        onChangeText={setUserName}
      />
      
      <Button title="Fetch Repo" onPress={fetchRepos}></Button>
      <Text>Name:{randomName.name}</Text>
      <Text>Followers:{randomName.followers}</Text>
      <Text>Repos:{randomName.public_repos}</Text>
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
