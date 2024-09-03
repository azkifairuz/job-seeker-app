import React from "react";
import { View, Text, TouchableOpacity,Image } from "react-native";

import styles from "./popularjobcard.style";
import JobDetails from "@/type/jobType";

const PopularJobCard = ({
  item,
  selectedJob,
  handleCardPress,
}: {
  item: JobDetails;
  selectedJob: any;
  handleCardPress: any;
}) => {
  return (
    <TouchableOpacity
      style={styles.dynamicStyle.container(selectedJob, item)}
      onPress={handleCardPress(item)}
    >
      <TouchableOpacity
        style={styles.dynamicStyle.logoContainer(selectedJob, item)}
      >
        <Image
          source={{ uri: item.employer_logo ? item.employer_logo : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg" }}
          resizeMode="contain"
          style={styles.styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.styles.companyName} numberOfLines={1}>{item.employer_name}</Text>
      <View style={styles.styles.infoContainer}>
        <Text style={styles.dynamicStyle.jobName(selectedJob,item)} numberOfLines={1}>{item.job_title}</Text>
        <Text style={styles.styles.location} numberOfLines={1}>{item.job_country}</Text>

      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
