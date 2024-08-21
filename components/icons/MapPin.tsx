import Svg, { Circle, ClipPath, Defs, G, Path, Rect } from "react-native-svg"

const MapPin = () => {
  return (
    <Svg width="32" height="33" viewBox="0 0 32 33" fill="none">
      <Circle opacity="0.2" cx="16" cy="16.5" r="16" fill="white" />
      <G clip-path="url(#clip0_192_386)">
        <Path d="M21.6783 15.2382C21.6783 19.6544 16.0003 23.4397 16.0003 23.4397C16.0003 23.4397 10.3223 19.6544 10.3223 15.2382C10.3223 13.7323 10.9205 12.2881 11.9854 11.2232C13.0502 10.1584 14.4944 9.56018 16.0003 9.56018C17.5062 9.56018 18.9505 10.1584 20.0153 11.2232C21.0801 12.2881 21.6783 13.7323 21.6783 15.2382Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M16.0002 17.1309C17.0454 17.1309 17.8928 16.2835 17.8928 15.2382C17.8928 14.193 17.0454 13.3456 16.0002 13.3456C14.9549 13.3456 14.1075 14.193 14.1075 15.2382C14.1075 16.2835 14.9549 17.1309 16.0002 17.1309Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </G>
      <Defs>
        <ClipPath id="clip0_192_386">
          <Rect width="16" height="16" fill="white" transform="translate(8 8.5)" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default MapPin