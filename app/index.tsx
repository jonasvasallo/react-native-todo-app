import { View, Text, FlatList, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <SafeAreaView>
      <ScrollView className='mx-4'>
        <FlatList
          data={[
            {id: 1, title: "idk", date: "idk"}
          ]}
          renderItem={({item}) => (
            <Text>Hello</Text>
          )}
          ListHeaderComponent={() => (
            <View className=''>

            </View>
          )}
        >

        </FlatList>
      </ScrollView>
    </SafeAreaView>
  )
}

export default index