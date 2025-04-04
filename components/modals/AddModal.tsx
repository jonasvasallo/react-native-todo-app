import { View, Text, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import FormField from '../FormField'
import CustomButton from '../CustomButton';
import { useAtom } from 'jotai';
import { todoListAtom, Task } from '@/app/index';

const AddModal = ({closeModal} : {closeModal: ()=>void}) => {
    const [title, setTitle] = useState("");

    const [todoList, setToDoList] = useAtom(todoListAtom);

    const addTask = () => {
      // Removal of leading or trailing white spaces and also a validation if the title is not empty to avoid tasks with empty name
        if (title.trim()) {

            // Creating new task object with type of Task defined in index page
            const newTask: Task = { id: Date.now(), title: title, date: new Date().toLocaleString(),isDone: false };

            // Setting new list by getting previous state array and expanding it out into new array and adding the new task
            setToDoList((prev) => [...prev, newTask]);
            setTitle('');
            closeModal();
          }
    }
  return (
    <View>
        <FormField title='Task Title' value={title} placeholder='Enter task title here' handleChangeText={(text) => setTitle(text)} maxLength={100}/>
        <CustomButton label='Save' handlePress={addTask} otherStyles='justify-center items-center'/>
    </View>
  )
}

export default AddModal