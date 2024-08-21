import Svg, { Path } from 'react-native-svg'

const Clock = () => {
  return (
    <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <Path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="#FF7622" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M11 5V11L15 13" stroke="#FF7622" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  )
}

export default Clock