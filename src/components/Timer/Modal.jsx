// React
import React from 'react'

// MUI
import Modal from '@mui/joy/Modal'
import ModalDialog from '@mui/joy/ModalDialog'
import Typography from '@mui/joy/Typography'
import ModalClose from '@mui/joy/ModalClose'
import Divider from '@mui/joy/Divider'
import Box from '@mui/joy/Box'

// Custom components
import InputModal from './InputModal'
import Footer from '../Footer'

export default function BasicModal ({ modalOpen, handleModal, setAlarmTone }) {
  return (
    <Modal open={modalOpen} onClose={handleModal}>
      <ModalDialog layout='center' variant='soft' sx={{ paddingBottom: '10px' }}>
        <ModalClose />
        <Typography component='h2' sx={{ pb: '14px' }}>Settings</Typography>
        <Divider />
        <Box sx={{ py: '14px' }}>
          <InputModal placeholder='URL' label='Alarm tone' id='audio' setData={setAlarmTone} />
        </Box>
        <Divider />
        <Footer />
      </ModalDialog>
    </Modal>
  )
}
