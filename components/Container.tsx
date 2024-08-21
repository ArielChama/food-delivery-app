import React, { ReactNode } from 'react'
import { View } from 'react-native'

interface ContainerProps {
  children: ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return (
    <View style={{ padding: 20, backgroundColor: "#ffff", height: '100%', paddingTop: 80 }}>
      {children}
    </View>
  )
}

export default Container