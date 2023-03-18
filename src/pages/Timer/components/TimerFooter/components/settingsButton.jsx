// Joy UI
import IconButton from '@mui/joy/IconButton'
import SettingsIcon from '@mui/icons-material/Settings'

export default function SettingsButton ({ handleModal }) {
  return (
    <IconButton variant='outlined' color='neutral' onClick={handleModal}>
      <SettingsIcon />
    </IconButton>
  )
}
