import React from 'react'
import Container from '@/components/Container'
import { Image, StyleSheet, Text } from 'react-native'
import Button from '@/components/Button'
import MapPin from '@/components/icons/MapPin'


const styles = StyleSheet.create({
  image: {
    height: 290,
    width: 290,
    borderRadius: 999
  },
  info: {
    fontSize: 16,
    color: '#646982',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginTop: 30
  }
})

const Location = () => {
  return (
    <Container>
      <Image style={styles.image} source={require('@/assets/images/undraw_Current_location.png')} />
      <Button icon={<MapPin />}>
        Acess Location
      </Button>

      <Text style={styles.info}>
        We will acess your current location only while using the app
      </Text>
    </Container>
  )
}

export default Location