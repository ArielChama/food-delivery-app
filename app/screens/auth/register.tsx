import React from 'react'
import ContainerLogin from '@/components/ContainerLogin'
import { StyleSheet, Text, View } from 'react-native'
import Input from '@/components/Input'
import Checkbox from 'expo-checkbox'
import Button from '@/components/Button'
import ViewPassword from '@/components/icons/ViewPassword'
import { Link } from 'expo-router'

const styles = StyleSheet.create({
  label: {
    textTransform: 'uppercase',
    fontSize: 13
  },
  focus: {
    color: '#FF7622',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  socialNetworks: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center'
  },
})

const register = () => {
  return (
    <ContainerLogin title='Sign Up' description='Please sign up to get started'>
      <Text style={styles.label}>Name</Text>
      <Input placeholder='example@gmail.com' />

      <Text style={styles.label}>Email</Text>
      <Input placeholder='example@gmail.com' />

      <Text style={styles.label}>Password</Text>
      <Input placeholder='***********' icon={<ViewPassword />} />

      <Text style={styles.label}>Re-Type Password</Text>
      <Input placeholder='***********' icon={<ViewPassword />} />

      <Button>
        Sign up
      </Button>
    </ContainerLogin>
  )
}

export default register