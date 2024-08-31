import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";

import styles from "./popularjobs.style";
import { COLORS, SIZES } from "@/constants/Themes";
import PopularJobCard from "@/components/common/cards/popular/PopularJobCard";

const Popularjobs = () => {
  const [isLoading, setisLoading] = useState(false);
  const error = false;
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Popular jobs</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList 
          data={[1, 2, 3, 4]}
          renderItem={({item}) => (
            <PopularJobCard item={item}/>
          )}
          contentContainerStyle={{columnGap:SIZES.medium}}
          horizontal />
        )
        }
      </View>
    </View>
  );
};

export default Popularjobs;
