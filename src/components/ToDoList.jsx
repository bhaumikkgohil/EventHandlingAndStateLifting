import React from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

function ToDoList() {
  return (
    <SafeAreaView>
      <Text style={styles.header}>To Do List</Text>
      <ScrollView>
        <Pressable>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>Wash the dishes</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.task}>
            <Text style={styles.taskText}>Buy grocery for next month</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>Clean the closet</Text>
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    margin: 20,
  },
  task: {
    padding: 10,
  },
  completed: {
    backgroundColor: "#e0e0e0",
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
