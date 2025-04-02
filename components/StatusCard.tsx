import { View, Text } from 'react-native'
import React from 'react'

const StatusCard = ({label, value}: {label:string, value:number}) => {
  return (
    <View className='bg-black-100 w-[48%] h-[100px] rounded-2xl items-center justify-center'>
        <Text className='text-2xl font-pbold text-white'>{value}</Text>
        <Text className='text-white font-pmedium'>{label}</Text>
    </View>
  )
}

export default StatusCard