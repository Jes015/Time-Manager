// JOY
import Typography from '@mui/joy/Typography'
import ModalClose from '@mui/joy/ModalClose'

export default function ModalHeader ({ title }) {
  return (
    <header>
      <ModalClose />
      <Typography component='h2' sx={{ pb: '14px' }}>{title}</Typography>
    </header>
  )
}
