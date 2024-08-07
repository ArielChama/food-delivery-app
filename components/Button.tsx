import React, { ReactNode } from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

interface buttonProps {
  children: ReactNode
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF7622',
    padding: 20,
    borderRadius: 12,
    width: 332,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

const Button = ({ children }: buttonProps) => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>
        {children}
      </Text>
    </Pressable>
  )
}

export default Button