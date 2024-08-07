import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ContainerLogin from '@/components/ContainerLogin'
import Button from '@/components/Button'
import Input from '@/components/Input'

const styles = StyleSheet.create({
  label: {
    textTransform: 'uppercase',
    fontSize: 13
  },
})


const Verification = () => {
  return (
    <ContainerLogin title='Verification' description='We have sent a code to your email example@gmail.com'>
      <Text style={styles.label}>Code</Text>
      <View style={{ gap: 30, display: 'flex', flexDirection: 'row' }}>
        <Input placeholder='' />
        <Input placeholder='' />
        <Input placeholder='' />
        <Input placeholder='' />
      </View>

      <Button>
        Verify
      </Button>
    </ContainerLogin>
  )
}

export default Verification