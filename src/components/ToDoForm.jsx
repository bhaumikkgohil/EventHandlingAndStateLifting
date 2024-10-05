import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

function ToDoForm() {
  return (
    <View style={styles.form}>
      <TextInput style={styles.input} placeholder="Add a new task..." />
      <Button title="Add" />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 10,
    flexDirection: "row",
  },
  input: {
    flex: 1,
    padding: 10,
    marginRight: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
});

export default ToDoForm;
