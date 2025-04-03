import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

type TextFieldProps = {
    title: string,
    value: string,
    placeholder: string,
    handleChangeText: (newText: string)=>void,
    otherStyles?: string,
    maxLength?: number,
}

const FormField = ({title, value, placeholder, handleChangeText, otherStyles, maxLength, ...props} : TextFieldProps) => {

  return (
    <View className={`space-y-1 ${otherStyles} my-2`}>
      <Text className='text-base text-white font-psemibold'>{title}</Text>

      <View className='border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row'>
        <TextInput
        className='flex-1 text-white font-pmedium text-base' 
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        maxLength={maxLength ?? 999}
        ></TextInput>
      </View>
    </View>
  )
}

export default FormField