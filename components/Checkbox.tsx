import {MaterialIcons} from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useAtom } from 'jotai';
import { todoListAtom } from '@/app/index';

type CheckboxProps = {
    id: number, 
    title: string, 
    date: string,
    handleEditPress: ()=>void
}


const Checkbox = ({id, title, date, handleEditPress} : CheckboxProps) => {
    const [todoList, setTodoList] = useAtom(todoListAtom);
    const task = todoList.find((task) => task.id === id);
    const isChecked = task?.isDone ?? false; 
  
    const toggleCheck = () => {
      setTodoList((prev) =>
        prev.map((task) =>
          task.id === id ? { ...task, isDone: !task.isDone } : task
        )
      );
    };
  return (
    <View className='border-box w-full h-16 bg-black-200 rounded-2xl p-2 flex-row items-center mb-2'
    >
        <TouchableOpacity
            onPress={toggleCheck}
        >
        {isChecked ? <MaterialIcons name='check-box' size={24} color={"#64748b"}/> : <MaterialIcons name='check-box-outline-blank' size={24} color={"#64748b"}/>}
        </TouchableOpacity>
        <View className='flex-row ml-4 w-[87%] justify-between'>
            <View className='w-[200px] flex-nowrap box-border'>
                <Text className='text-white font-psemibold text-md' numberOfLines={1} ellipsizeMode="tail">{title}</Text>
                <Text className='text-white font-pmedium text-sm'>{date}</Text>
            </View>
            <TouchableOpacity className='bg-secondary justify-center items-center px-4 rounded-md' onPress={handleEditPress}>
                <Text className='text-white font-psemibold'>Edit</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Checkbox