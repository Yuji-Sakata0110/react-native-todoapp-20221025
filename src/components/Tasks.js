import { React, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import CheckBox from "@react-native-community/checkbox";

const Tasks = (props) => {

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (

    <View>
      <View style={ViewTodoStyles.Todo}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
        <Text style={ViewTodoStyles.Text}>{props.text}</Text>
      </View>
   </View>
  )
}


const ViewTodoStyles = StyleSheet.create({
  Todo: {
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    alignItems: "center",
    padding: 20,
    margin: 20,
    borderRadius: 40,
  },
  Text: {
    textAlign: 'center',
    paddingLeft: 20,
    fontSize: 15,
  },

});

export default Tasks;