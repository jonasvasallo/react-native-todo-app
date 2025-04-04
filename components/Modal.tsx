import { View, Text, Modal as RNModal, ModalProps, KeyboardAvoidingView, Platform, Pressable } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

type PROPS = ModalProps & {
    title: string,
    description?: string,
    isOpen: boolean,
    withInput?: boolean,
    closeModal: () => void,
}

const Modal = ({title, description, isOpen, withInput, closeModal, children, ...props} : PROPS) => {
  const modalStructure = (
    <View className='bg-black-200 w-full p-6 rounded-xl'>
        <View className='flex-row justify-between'>
        <Text className='font-psemibold text-lg text-white'>{title}</Text>
        <Pressable onPress={closeModal}>
        <Text className='text-secondary'>Close</Text>
        </Pressable>
        </View>
        <Text className='font-pmedium text-gray-100'>{description}</Text>
        <View className='my-2'>
        {children}
        </View>
        
    </View>
  );
    const content = withInput ? 
    (<KeyboardAvoidingView className='items-center justify-center flex-1 px-3 bg-zinc-900/40' behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>{ modalStructure }</KeyboardAvoidingView>) :
    (<View className='items-center justify-center flex-1 px-3 bg-zinc-900/40'>{ modalStructure }</View>)
  return (
    <RNModal
        visible={isOpen}
        transparent
        animationType='fade'
        statusBarTranslucent
        {...props}
    >
    {content}
    </RNModal>
  )
}

export default Modal