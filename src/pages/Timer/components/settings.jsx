// Custom Components
import { InputButton, Slider } from '@/components/'

export default function Settings ({ setAlarmTone, setAlarmVolume, alarmVolume }) {
  return (
    <>
      <div>
        <InputButton setData={setAlarmTone} placeholder='URL' id='URL' label='Song' />
        <Slider setData={setAlarmVolume} value={alarmVolume} id='volume' label='Volume' />
      </div>
    </>
  )
}
