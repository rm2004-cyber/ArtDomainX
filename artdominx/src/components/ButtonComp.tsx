import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import {moderateScale, scale, verticalScale } from 'react-native-size-matters'

const ButtonComp = ({title}:any) => {
  return (
    <TouchableOpacity style={styles.button_container} activeOpacity={0.3}>
        <Text style={styles.button_text}>{title}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    button_container:{
        width: "90%",
        paddingVertical: verticalScale(10),
        paddingHorizontal: scale(10),
        borderRadius: moderateScale(7),
        alignItems: "center",
        borderWidth: 1,
        marginLeft: scale(17),
        
    },
    button_text:{
        fontSize: moderateScale(14),
        color: "black",
    },
})
export default ButtonComp