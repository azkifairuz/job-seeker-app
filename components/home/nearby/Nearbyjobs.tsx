import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'

import styles from './nearbyjobs.style'
import useFetch from '@/hooks/useFetch'
import { COLORS, SIZES } from '@/constants/Themes'
import NearbyJobCard from '@/components/common/cards/nearby/NearbyJobCard'
import { useRouter } from 'expo-router'
import JobDetails from '@/type/jobType'
const Nearbyjobs = () => {
  const {data,isLoading,isError} = useFetch.useFetch(
    'search',
    {
      query:'Vue',
      num_pages:'1'
    }
  )
  const router = useRouter()
  const handleNavigate = (jobId:string) => {
    router.push({pathname:'/job-details/[id]', params:{id:jobId}})
  }
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>all nearby jobs</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : isError ? (
          <Text>Something went wrong</Text>
        ) : (
          data.map(job => (
            <NearbyJobCard job={job} handleNavigate={() => handleNavigate(job.job_id)} key={job.job_id}/> 
          ))
        )
        }
      </View>
    </View>
  )
}

export default Nearbyjobs