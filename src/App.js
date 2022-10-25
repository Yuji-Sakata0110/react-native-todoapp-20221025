/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

import Tasks from './components/Tasks';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


function App() {

  const [task, setTask] = useState();
  const [taskItem, setTaskItems] = useState([]);

  const handleAddTask = () => {
    setTaskItems([...taskItem, task]);
    console.log(task);
    setTask(null);
    console.log(taskItem);
  };

  return (
    <View>

      {/* safe area view */}
      <SafeAreaView style={SafeAreaStyles.SafeArea} />

      {/* title view */}
      <View style={TitleStyles.View}>
        <Text style={TitleStyles.Text}>Today's Tasks</Text>
      </View>

      {/* todo view */}
      {
        taskItem.map((item, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => console.log("pressed task")}>
              <Tasks text={item} />
            </TouchableOpacity>
          )
        })
      }

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={ViewTodoStyles.writeTaskWrapper}
      >
        <TextInput
          style={ViewTodoStyles.input}
          onChangeText={task => setTask(task)}
          value={task}
          placeholder='write your task'
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={ViewTodoStyles.addWrapper}>
            <Text style={ViewTodoStyles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>

  );
};


//  style from here

const SafeAreaStyles = StyleSheet.create({
  SafeArea: {
    backgroundColor: 'AliceBlue',
  },
});

const TitleStyles = StyleSheet.create({
  View: {
    padding: 20,
  },
  Text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

const ViewTodoStyles = StyleSheet.create({
  writeTaskWrapper: {
    position: "absolute",
    top: 500,
    flexDirection: 'row',
    alignItems: "center",
  },
  input: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 60,
    width: 250,
    marginLeft: 20,
    marginRight: 20,
  },
  addWrapper: {
    height: 60,
    width: 60,
    backgroundColor: 'skyblue',
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
  }

});


// export index.js
export default App;
