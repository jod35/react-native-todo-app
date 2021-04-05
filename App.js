import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Platform, TextInput, KeyboardAvoidingView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Task from './components/Task'

export default function App() {
  const [task, setTask] = useState();

  const handleAddTask = () => {
    console.log(task);
  }

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>
          Todays Tasks
        </Text>

        <View style={styles.items}>
          <Task text={'Task 1'} />
          <Task text={'Task 2'} />


          {/* Write a task view */}

          <KeyboardAvoidingView
            behaviors={Platform.os === 'ios' ? 'padding' : 'height'}
            style={styles.writeTaskWrapper}>

            <TextInput style={styles.input}
              placeholder="Write A Task"
            />
            <TouchableOpacity>
              <View style={styles.addWrapper}>
                <Text style={styles.addText}>Add</Text>
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  taskWrapper: {
    padding: 50,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 30
  },
  items: {
    marginTop: 10
  },
  writeTaskWrapper: {
    position: 'absolute',
    top: 400,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  addText: {
    fontWeight: 'bold',
    color: 'dodgerblue'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderWidth: 0,
    width: 250,
    borderRadius: 20,
  },
  addWrapper: {
    width: 25,
    height: 25,
    padding: 20,
    borderColor: 'dodgerblue',
    borderRadius: 50,
    borderWidth: 5,
  },

});
