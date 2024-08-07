import React, { ReactNode } from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface ContainerLoginProps {
  title: string,
  description: string,
  children: ReactNode
}

const styles = StyleSheet.create({
  containerTop: {
    paddingVertical: 70,
    paddingHorizontal: 40
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff'
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff'
  },
  containerBottom: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    padding: 40,
    gap: 20
  },
})

const ContainerLogin = ({ title, description, children }: ContainerLoginProps ) => {
  return (
    <View style={{ backgroundColor: '#121223', height: '100%' }}>
      <View style={styles.containerTop}>
        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.description}>
          {description}
        </Text>
      </View>

      <View style={styles.containerBottom}>
        {children}
      </View>
    </View>
  )
}

export default ContainerLogin