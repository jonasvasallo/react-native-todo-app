import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

type CustomButtonProps = {
    label: string,
    otherStyles?: string,
    handlePress: ()=>void
}

const CustomButton = ({label, otherStyles, handlePress} : CustomButtonProps) => {
  return (
    <TouchableOpacity className={`bg-secondary px-4 py-2 rounded-lg ${otherStyles}`} onPress={handlePress}>
        <Text className='font-pmedium text-white'>{label}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton