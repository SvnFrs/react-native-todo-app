import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View, TextInput, FlatList } from "react-native";

// Define the type for a todo item
interface Todo {
  text: string;
  done: boolean;
}

export default function Index(): JSX.Element {
  const [todo, setTodo] = useState<string>(""); // For input field
  const [todos, setTodos] = useState<Todo[]>([]); // For pending tasks
  const [doneTodos, setDoneTodos] = useState<Todo[]>([]); // For completed tasks

  // Add new task to the pending list
  const addTodo = (): void => {
    if (todo.trim()) {
      setTodos([...todos, { text: todo, done: false }]);
      setTodo(""); // Clear input after adding
    }
  };

  // Mark task as done and move it to the done list
  const markAsDone = (index: number): void => {
    const doneTask = todos[index];
    setDoneTodos([...doneTodos, { ...doneTask, done: true }]); // Add to done tasks
    setTodos(todos.filter((_, i) => i !== index)); // Remove from pending tasks
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>This is a simple todo app</Text>

      {/* Input for new todo */}
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={todo}
        onChangeText={setTodo}
      />

      {/* Button to add new todo */}
      <Pressable style={styles.pressable} onPress={addTodo}>
        <Text style={styles.lightText}>Add new TODO</Text>
      </Pressable>

      {/* List of pending tasks */}
      <Text style={styles.sectionHeader}>Pending Tasks</Text>
      <FlatList
        data={todos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.todoRow}>
            <Text style={styles.todoItem}>{item.text}</Text>
            <Pressable onPress={() => markAsDone(index)} style={styles.doneButton}>
              <Text style={styles.doneButtonText}>done</Text>
            </Pressable>
          </View>
        )}
      />

      {/* List of completed tasks */}
      <Text style={styles.sectionHeader}>Completed Tasks</Text>
      <FlatList
        data={doneTodos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.todoRow}>
            <Text style={[styles.todoItem, styles.todoDone]}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    width: 200,
    marginTop: 20,
  },
  pressable: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  lightText: {
    color: "white",
  },
  darkText: {
    color: "black",
  },
  sectionHeader: {
    fontSize: 18,
    marginTop: 30,
    fontWeight: "bold",
  },
  todoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  todoItem: {
    fontSize: 18,
    marginRight: 20,
  },
  todoDone: {
    textDecorationLine: "line-through",
    color: "blue",
  },
  doneButton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
  doneButtonText: {
    color: "black",
  },
});
