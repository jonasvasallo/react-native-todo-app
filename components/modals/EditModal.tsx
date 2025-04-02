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

    const updateTitle = (text: string) => {
        setSelectedTask({ ...selectedTask, title: text });
      };
    
      const saveTask = () => {
        setTodoList((prev) =>
          prev.map((t) => (t.id === selectedTask.id ? { ...selectedTask } : t))
        );
        closeModal();
      };
    
      const deleteTask = () => {
        setTodoList((prev) => prev.filter((t) => t.id !== selectedTask.id));
        closeModal();
      };
  return (
    <View>
      <FormField title='Task Title' value={title} placeholder='Enter task title here' handleChangeText={(text) => setTitle(text)}/>
        <View className='flex-row'>
            <CustomButton label='Save' handlePress={saveTask} />
            <CustomButton label='Delete' handlePress={deleteTask} otherStyles='ml-2 bg-red-500'/>
        </View>
    </View>
  )
}

export default EditModal