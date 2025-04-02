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
        if (title.trim()) {
            const newTask: Task = { id: Date.now(), title: title, date: new Date().toLocaleString(),isDone: false };
            setToDoList((prev) => [...prev, newTask]);
            setTitle('');
            closeModal();
          }
    }
  return (
    <View>
        <FormField title='Task Title' value={title} placeholder='Enter task title here' handleChangeText={(text) => setTitle(text)}/>
        <CustomButton label='Save' handlePress={addTask} otherStyles='justify-center items-center'/>
    </View>
  )
}

export default AddModal