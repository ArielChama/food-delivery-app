import React, { ReactNode } from 'react'
import { View } from 'react-native'

interface ContainerProps {
  children: ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return (
    <View style={{ padding: 20, backgroundColor: "#ffff", paddingTop: 200, height: '100%' }}>
      {children}
    </View>
  )
}

export default Container