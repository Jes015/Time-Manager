// JOY
import Modal from '@mui/joy/Modal'
import ModalDialog from '@mui/joy/ModalDialog'

// Custom components
import ModalFooter from './ModalFooter'
import ModalHeader from './ModalHeader'
import ModalMain from './ModalMain'

export default function BasicModal ({ modalOpen, handleModal, children }) {
  return (
    <Modal open={modalOpen} onClose={handleModal}>
      <ModalDialog layout='center' variant='soft' sx={{ paddingBottom: '10px' }}>
        <ModalHeader title='Settings' />
        <ModalMain>{children}</ModalMain>
        <ModalFooter />
      </ModalDialog>
    </Modal>
  )
}
