import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Alert,
} from "react-native";
import useFetch from "@/hooks/useFetch"

import styles from "./popularjobs.style";
import { COLORS, SIZES } from "@/constants/Themes";
import PopularJobCard from "@/components/common/cards/popular/PopularJobCard";

const Popularjobs = () => {
  const {data,isLoading,isError} = useFetch.useFetch('search',{
    query:"React Developer",
    num_pages: "1"
  })
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const handleSelectJob = (job_id: string) => {
    setSelectedJobId(job_id);
  };
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>All Popular jobs</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : isError ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList 
          data={data}
          renderItem={({item}) => (
           <PopularJobCard item={item} selectedJob={selectedJobId} handleCardPress={() => {}}/> 
          )}
          keyExtractor={data => data.job_id}
          contentContainerStyle={{columnGap:SIZES.medium}}
          horizontal />
        )
        }
      </View>
    </View>
  );
};

export default Popularjobs;
