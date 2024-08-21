import React from 'react'
import Container from '@/components/Container'
import { Image, StyleSheet, Text, View } from 'react-native'
import Button from '@/components/Button'
import MapPin from '@/components/icons/MapPin'
import { Link } from 'expo-router'


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
      <View style={{ paddingTop: 120 }}>
      <Image style={styles.image} source={require('@/assets/images/undraw_Current_location.png')} />
      <Button icon={<MapPin />}>
        <Link href="/screens/Home">
          Acess Location
        </Link>
      </Button>

      <Text style={styles.info}>
        We will acess your current location only while using the app
      </Text>  
      </View>
      
    </Container>
  )
}

export default Location