// Custom Components
import { InputButton } from '../../../components/'

export default function Settings ({ setAlarmTone }) {
  return (
    <>
      <InputButton setData={setAlarmTone} placeholder='URL' id='URL' label='URL' />
    </>
  )
}
