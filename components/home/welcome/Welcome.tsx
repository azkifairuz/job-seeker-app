import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image,FlatList } from 'react-native'

import styles from './welcome.style'
import Icons from '@/constants/Icons'
import { useRouter } from 'expo-router'
import { SIZES } from '@/constants/Themes'

const jobsType = ["Full-Time","Part-Time","Contracted"]
const Welcome = ({name}:{name:string}) => {
  const [activeJob,setActiveJob] = useState('Full-Time')
  const router = useRouter()
  return (
    <View>
      <View style={styles.styles.container}>
        <Text style={styles.styles.userName}>Hello {name}</Text>
        <Text style={styles.styles.welcomeMessage}>Find Your perfect job</Text>
      </View>

      <View style={styles.styles.searchContainer}>
          <View style={styles.styles.searchWrapper}>
            <TextInput
             style={styles.styles.searchInput}
             value=''
             onChange={() => {}}
             placeholder='What are you looking for?'
             />
          </View>
          <TouchableOpacity style={styles.styles.searchBtn} onPress={() => {}}>
            <Image 
            source={Icons.search}
            resizeMode='contain'
            style={styles.styles.searchBtnImage}
            />
          </TouchableOpacity>
      </View>

      <View style={styles.styles.tabsContainer}>
        <FlatList
        data={jobsType}
        renderItem={({item}) => (
          <TouchableOpacity
          style={styles.dynamicStyle.tab(activeJob,item)}
          onPress={() =>{
            setActiveJob(item),
            router.push(`./search/${item}`)
          }}
          
          >
            <Text style={styles.dynamicStyle.tabText(activeJob,item)}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
        contentContainerStyle={{columnGap:SIZES.small}}
        horizontal
        />
      </View>
    </View>
  )
}

export default Welcome