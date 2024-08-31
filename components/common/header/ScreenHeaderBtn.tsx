import React from 'react'
import { View, Text, TouchableOpacity, Image, ImageSourcePropType } from 'react-native'

import styles from './screenheader.style'
interface ScreenHeaderBtn {
  iconUrl: ImageSourcePropType;
  dimension: string;
  handlePress?: any;
}
const ScreenHeaderBtn = ({iconUrl,dimension,handlePress}:ScreenHeaderBtn) => {
  return (
    <TouchableOpacity style={styles.styles.btnContainer} onPress={handlePress}>
      <Image
      source = {iconUrl}
      resizeMode='cover'
      style={styles.btnImgStyle(dimension)}
      />
    </TouchableOpacity>
  )
}

ScreenHeaderBtn.prototype = {}
export default ScreenHeaderBtn