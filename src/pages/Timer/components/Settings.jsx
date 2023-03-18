// Custom Components
import InputModal from '../../../components/InputButton'

export default function Settings ({ setAlarmTone }) {
  return (
    <>
      <InputModal setData={setAlarmTone} placeholder='URL' id='URL' label='URL' />
    </>
  )
}
