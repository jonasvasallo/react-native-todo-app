import { View, Text, FlatList, SafeAreaView, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import Checkbox from '@/components/Checkbox'
import StatusCard from '@/components/StatusCard'
import Modal from '@/components/Modal';
import AddModal from '@/components/modals/AddModal';
import EditModal from '@/components/modals/EditModal';

import {atom, Provider, useAtom} from 'jotai';

export type Task = {
  id: number;
  title: string;
  date: string;
  isDone: boolean,
};

export const todoListAtom = atom<Task[]>([
  {id: 1, title: "To do task title", date: "03/31/2025 1:41 PM", isDone: false},
  {id: 2, title: "Checkbox title", date: "03/31/2025 2:03 PM", isDone: false},
  {id: 3, title: "idk what to put awdawdwadawwadw wadadawwada dawdadwdada", date: "03/31/2025 3:02 PM", isDone: false},
]);

export const selectedTaskAtom = atom<Task | null>(null);

const index = () => {
  const [todoList, setToDoList] = useAtom(todoListAtom);
  const [selectedTask, setSelectedTask] = useAtom(selectedTaskAtom);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  

  const renderItem = ({item} : {item:Task}) => (
    <Checkbox id={item.id} title={item.title} date={item.date} handleEditPress={()=>openEditModal(item)}/>
  )

  const openEditModal = (task: Task) => {
    setSelectedTask(task);
    setIsEditModalOpen(true);
  };

  let unfinishedTasksCount = 0;

  todoList.forEach((task) => {
    if(task.isDone === false){
      unfinishedTasksCount++;
    }
  });

  return (
      <SafeAreaView className='bg-primary h-full'>
        <FlatList
            className='mx-4'
            data={todoList}
            renderItem={renderItem}
            ListHeaderComponent={() => (
              <View className='mb-4'>
                <View className='flex-row justify-between items-center'>
                  <View>
                    <Text className='font-pmedium text-xl text-white'>Welcome back,</Text>
                    <Text className='font-psemibold text-2xl text-white'>Jonas</Text>
                  </View>
                  <View>
                    <TouchableOpacity className='bg-secondary px-4 py-2 rounded-lg' onPress={() => setIsAddModalOpen(true)}>
                      <Text className='text-white font-pmedium'>Add New Task</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View className='flex-row justify-between mt-4'>
                  <StatusCard label='Total Tasks' value={todoList.length}/>
                  <StatusCard label='Remaining' value={unfinishedTasksCount}/>
                </View>
              </View>
            )}
          >

          </FlatList>
          <Modal
            id='add-modal'
            title='Add New Task'
            description='Create a new task by putting the task title in the input below.'
            closeModal={()=>setIsAddModalOpen(false)}
            withInput
            isOpen={isAddModalOpen}
          >
            <AddModal closeModal={()=>setIsAddModalOpen(false)}/>
          </Modal>
          <Modal
            id='edit-modal'
            title='Edit Task'
            description='Edit this task by updating its title in the input field below.'
            closeModal={()=>setIsEditModalOpen(false)}
            withInput
            isOpen={isEditModalOpen}
          >
            <EditModal closeModal={()=>setIsEditModalOpen(false)}/>
          </Modal>
      </SafeAreaView>

  )
}

export default index