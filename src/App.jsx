import React, { useState } from "react";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ToDoForm from "./components/ToDoForm";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    if (taskText.trim().length === 0) return;
    if (tasks.includes(taskText)) {
      Alert.alert("Task already exists!");
      return;
    }
    setTasks([...tasks, taskText]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>To Do List</Text>

      <ScrollView>
        {tasks.map((task, index) => (
          <View key={index} style={styles.task}>
            <Text style={styles.taskText}>
              {index + 1 + ") "}
              {task}
            </Text>
          </View>
        ))}
      </ScrollView>
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  task: {
    padding: 10,
    margin: 2,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: "#d3d3d3",
  },
  taskText: {
    fontSize: 18,
  },
});

export default App;
