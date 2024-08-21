import Svg, { Circle, Path } from 'react-native-svg'

const Menu = () => {
  return (
    <Svg width="45" height="45" viewBox="0 0 45 45" fill="none">
      <Circle cx="22.5" cy="22.5" r="22.5" fill="#ECF0F4" />
      <Path d="M16 28H26" stroke="#181C2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M16 22H32" stroke="#181C2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M16 16H22" stroke="#181C2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>

  )
}

export default Menu