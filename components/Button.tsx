import React, { ReactNode } from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

interface buttonProps {
  children: ReactNode,
  icon?: ReactNode
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF7622',
    padding: 20,
    borderRadius: 12,
    width: 332,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginRight: 10
  }
})

const Button = ({ children, icon = <></> }: buttonProps) => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>
        {children}
      </Text>
      {icon}
    </Pressable>
  )
}

export default Button