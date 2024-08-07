import React from 'react'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'
import { View } from 'react-native'

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#F0F5FA',
    color: '#A0A5BA',
    padding: 20,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
})

const Input = ({placeholder = '', icon = <></> }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput placeholder={placeholder} />
      {icon}
    </View>
  )
}

export default Input