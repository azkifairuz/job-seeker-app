import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import { useRoute } from '@react-navigation/native'
import useFetch from '@/hooks/useFetch'
import { COLORS } from '@/constants/Themes'
import ScreenHeaderBtn from '@/components/common/header/ScreenHeaderBtn'
import { icons } from '@/constants/Index'

export default function jobDetails() {
    const param = useLocalSearchParams()
    const route = useRoute()

    const {data,isLoading,isError,refetch} = useFetch.useFetchById('job-details',{
        job_id:param.id
    })
    console.log(data?.employer_name);
    
  return (
    <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
      <Stack.Screen
      options={{
        headerStyle:{backgroundColor:COLORS.lightWhite},
        headerShadowVisible:false,
        headerBackVisible:true,
        headerTitle:'',
        headerRight:() => (
            <ScreenHeaderBtn
                iconUrl={icons.share}
                dimension='60%'
            />
        )
      }}
      >

      </Stack.Screen>
    </SafeAreaView>
  )
}