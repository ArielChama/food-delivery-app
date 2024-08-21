import React from 'react'
import Container from '@/components/Container'
import Input from '@/components/Input'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Menu from '@/components/icons/Menu'
import Cart from '@/components/icons/Cart'
import Star from '@/components/icons/Star'
import Delivery from '@/components/icons/Delivery'
import Clock from '@/components/icons/Clock'
import ButtonCart from '@/components/ButtonCart'

const categories = [
  {
    name: "All"
  },
  {
    name: "Hot Dog"
  },
  {
    name: "Burger"
  }
]

const styles = StyleSheet.create({
  menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30
  },
  circle: {
    padding: 15,
    borderRadius: 999,
    backgroundColor: '#181C2E'
  },
  cardCategory: {
    borderRadius: 40,
    width: 135,
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  }
})

const Home = () => {
  return (
    <ScrollView>
      <Container>
        <View style={styles.menu}>
          <View>
            <Menu />
          </View>

          <View>
            <Text style={{ color: '#FC6E2A', textTransform: 'uppercase' }}>Deliver Too</Text>
            <Text>Halal Lab office</Text>
          </View>

          <ButtonCart />
        </View>

        <View>
          <Text style={{ marginBottom: 10 }}>Hey Halal, Good Afternoon!</Text>
          <Input placeholder="Search dishes, restaurants" />
        </View>

        <View style={{ marginVertical: 20 }}>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 20 }}>All categories</Text>
            <Text style={{ fontSize: 16 }}>See All {">"}</Text>
          </View>

          <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
            {categories.map(({ name }) => (
              <View key={name} style={styles.cardCategory}>
                <View style={{ width: 44, height: 44, backgroundColor: '#98A8B8', borderRadius: 999, marginRight: 10 }}></View>
                <Text>{name}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={{ marginVertical: 20 }}>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 20 }}>Open Restaurants</Text>
            <Text style={{ fontSize: 16 }}>See All {">"}</Text>
          </View>

          <View style={{ marginTop: 20 }}>
            <View style={{ width: '100%', height: 137, backgroundColor: '#98A8B8', borderRadius: 12, marginBottom: 10 }}></View>
            <Text style={{ fontSize: 20 }}>Rose garden restaurant</Text>
            <Text style={{ color: '#A0A5BA', fontSize: 14 }}>Burger - Chiken - Riche - Wings </Text>

            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10, gap: 20 }}>
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Star />
                <Text style={{ marginLeft: 10 }}>4.7</Text>
              </View>

              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Delivery />
                <Text style={{ marginLeft: 10 }}>Free</Text>
              </View>

              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Clock />
                <Text style={{ marginLeft: 10 }}>20 min</Text>
              </View>
            </View>
          </View>

          <View style={{ marginTop: 20 }}>
            <View style={{ width: '100%', height: 137, backgroundColor: '#98A8B8', borderRadius: 12, marginBottom: 10 }}></View>
            <Text style={{ fontSize: 20 }}>Rose garden restaurant</Text>
            <Text style={{ color: '#A0A5BA', fontSize: 14 }}>Burger - Chiken - Riche - Wings </Text>

            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10, gap: 20 }}>
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Star />
                <Text style={{ marginLeft: 10 }}>4.7</Text>
              </View>

              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Delivery />
                <Text style={{ marginLeft: 10 }}>Free</Text>
              </View>

              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Clock />
                <Text style={{ marginLeft: 10 }}>20 min</Text>
              </View>
            </View>
          </View>
        </View>
      </Container>
    </ScrollView>
  )
}

export default Home