import { StyleSheet, View } from 'react-native'
import Cart from './icons/Cart'

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
const ButtonCart = () => {
  return (
    <View style={styles.circle}>
      <Cart />
    </View>
  )
}

export default ButtonCart