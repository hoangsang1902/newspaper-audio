import React from 'react'
import { Text, View,StyleSheet } from 'react-native'
import COLORS from '../constants/colors'
import { TouchableOpacity } from 'react-native'

const Button = (props) => {
    const filledBgColor = props.color || COLORS.primary;
    const outlineColor = COLORS.white;
    const bgColor = props.filled ? filledBgColor : outlineColor;
    const textColor = props.filled ? COLORS.white : COLORS.primary;
    return (
      <TouchableOpacity
        style={{ 
            ...styles.button,
            ...{backgroundColor: bgColor},
            ...props.style
        }}
        onPress={props.onPress}
        >
            <Text style={{fontSize: 18, ...{color:textColor}}}>{props.title}</Text>
      </TouchableOpacity>
    )
  }

const styles = StyleSheet.create({
    button: {
        paddingBottom:16,
        paddingVertical:10,
        borderColor: COLORS.primary,
        borderWidth:2 ,
        borderRadius:12,
        alignItems: "center",
        justifyContent: "center",
    }
})

export default Button
