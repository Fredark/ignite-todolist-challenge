import Svg, { SvgProps, Path } from 'react-native-svg'

export const Check: React.FC<SvgProps> = ({ height, width, ...rest }) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 10 7"
    {...rest}
  >
    <Path
      d="M8.43.342 4.1 4.674 1.616 2.192l-.836.835L4.1 6.346l5.168-5.168L8.43.342Z"
      fill="#F2F2F2"
    />
  </Svg>
)
