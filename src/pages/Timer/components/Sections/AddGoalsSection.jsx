import InputModal from '@/components/inputButton'
import styles from './section.module.css'

export const AddGoalsSection = ({ addNewGoal }) => {
  const handleOnInput = (goalData) => {
    return new Promise((resolve, reject) => {
      goalData = goalData.split(' - ')

      if (goalData.length !== 2) {
        reject(new Error('Invalid pattern. Correct pattern example: Hi - 0:30:1'))
        return
      }

      const name = goalData[0]
      const time = goalData[1].split(':')


      const isNotEqualsToEmptyString = time[0] === '' || time[1] === '' || time[1] === ''
      const isNotANumber = isNaN(Number(time[0])) || isNaN(Number(time[1])) || isNaN(Number(time[2]))

      if (time.length !== 3 || isNotEqualsToEmptyString || isNotANumber) {
        reject(new Error('Invalid time pattern. Correct pattern example: 10:0:54'))
        return
      }

      const timeParsed = {
        hours: Number(time[0]),
        minutes: Number(time[1]),
        seconds: Number(time[2])
      }

      addNewGoal({
        name,
        completed: false,
        time: timeParsed,
        percentCompleted: 0
      })

      resolve('Goal added')
    })
  }

  return (
        <section>
            <header>
                <h3 className={styles.section__title}>Add goals</h3>
            </header>
            <main>
                <InputModal placeholder='Crypto  -  2:12:0' id='goal' label='Goal' setData={handleOnInput} />
            </main>
        </section>
  )
}
