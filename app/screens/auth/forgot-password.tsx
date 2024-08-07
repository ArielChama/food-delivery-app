import React from 'react'
import ContainerLogin from '@/components/ContainerLogin'
import { StyleSheet, Text } from 'react-native'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { Link } from 'expo-router'

const styles = StyleSheet.create({
  label: {
    textTransform: 'uppercase',
    fontSize: 13
  },
})


const ForgotPassword = () => {
  return (
    <ContainerLogin title='Forgot Password' description='Please sign in to your existing account'>
      <Text style={styles.label}>Email</Text>
      <Input placeholder='example@gmail.com' />

      <Button>
        <Link href='/screens/auth/verification'>Send code</Link>
      </Button>
    </ContainerLogin>
  )
}

export default ForgotPassword