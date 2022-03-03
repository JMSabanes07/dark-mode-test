import { useContext } from 'react'
//contexts
import { Context as ThemeContext } from 'contexts/themeContext'
//styles
import { ToggleButtonContainer } from './styles'
//icons
import { MdLightMode, MdNightlightRound } from 'react-icons/md'

const ToggleButton = (props) => {
  const { theme } = useContext(ThemeContext)
  return (
    <ToggleButtonContainer toggle={theme} {...props}>
      <MdLightMode />
      <MdNightlightRound />
    </ToggleButtonContainer>
  )
}

export default ToggleButton
