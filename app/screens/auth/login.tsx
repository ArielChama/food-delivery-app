import Button from '@/components/Button'
import ContainerLogin from '@/components/ContainerLogin'
import Apple from '@/components/icons/Apple'
import Facebook from '@/components/icons/Facebook'
import Twitter from '@/components/icons/Twitter'
import ViewPassword from '@/components/icons/ViewPassword'
import Input from '@/components/Input'
import Checkbox from 'expo-checkbox'
import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  label: {
    textTransform: 'uppercase',
    fontSize: 13
  },
  infoFormBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10
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

const Login = () => {
  return (
    <ContainerLogin title='Log In' description='Please sign in to your existing account'>
      <Text style={styles.label}>Email</Text>
      <Input placeholder='example@gmail.com' />

      <Text style={styles.label}>Password</Text>
      <Input placeholder='***********' icon={<ViewPassword />} />

      <View style={styles.infoFormBottom}>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
          <Checkbox style={{ borderRadius: 5 }} />
          <Text style={{ color: '#7E8A97' }}>Remember me</Text>
        </View>
        <Text style={{ color: '#FF7622' }}>
          <Link href="/screens/auth/forgot-password">Forgot password</Link>
        </Text>
      </View>

      <Button>
        <Link href="/screens/permissions/location">
          Log in
        </Link>
      </Button>

      <Text style={{ textAlign: 'center', marginTop: 10 }}>
        Don't have an account? <Text style={styles.focus}><Link href="/screens/auth/register">Sign up</Link></Text>
      </Text>

      <Text style={{ textAlign: 'center' }}>or</Text>

      <View style={styles.socialNetworks}>
        <View style={{ padding: 20, backgroundColor: '#395998', borderRadius: 150 }}>
          <Facebook />
        </View>

        <View style={{ padding: 20, backgroundColor: '#169CE8', borderRadius: 150 }}>
          <Twitter />
        </View>

        <View style={{ padding: 20, backgroundColor: '#1B1F2F', borderRadius: 150 }}>
          <Apple />
        </View>
      </View>
    </ContainerLogin>
  )
}

export default Login