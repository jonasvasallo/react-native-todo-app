import { View, Text } from 'react-native'
import React, { useState } from 'react'
import FormField from '../FormField'
import CustomButton from '../CustomButton'
import { useAtom } from 'jotai';
import { todoListAtom, selectedTaskAtom } from '@/app/index';

const EditModal = ({closeModal} : {closeModal: ()=>void}) => {

    const [todoList, setTodoList] = useAtom(todoListAtom);
    const [selectedTask, setSelectedTask] = useAtom(selectedTaskAtom);


  if (!selectedTask) {
    return (
      <View>
        <Text className="text-red-500">No task selected</Text>
      </View>
    );
  }

    const [title, setTitle] = useState(selectedTask.title)
    
    const saveTask = () => {
        
      /* 

      Saving task by going through previous to do list state
      - Go through each task in previous todo list
      - If this task matches the selected task id, copy all properties and update the title property with new one
      - If not, return the same unmodified task
      
      */
        setTodoList(
          (prev) =>
            prev.map((task) => 
              (task.id === selectedTask.id) ? { ...task, title: title } : task
            )
        );
      
        closeModal();
      };
    
      const deleteTask = () => {

        /* 
        Deleting a task by setting the to do list with a new array without the selected task using array filter function
        */
        setTodoList((prev) => prev.filter((task) => task.id !== selectedTask.id));
        closeModal();
      };
  return (
    <View>
      <FormField title='Task Title' value={title} placeholder='Enter task title here' handleChangeText={(newText) => setTitle(newText)} maxLength={100}/>
        <View className='flex-row'>
            <CustomButton label='Save' handlePress={saveTask} />
            <CustomButton label='Delete' handlePress={deleteTask} otherStyles='ml-2 bg-red-500'/>
        </View>
    </View>
  )
}

export default EditModal