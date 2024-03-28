import { buttons } from '../data'
import { useRecoilState } from 'recoil'
import { barVal } from '../state/atom/BarValue'
const Bar = () => {
  // State to keep track of the currently active button
  const [activeButton, setActiveButton] = useRecoilState(barVal)

  // Function to handle button click
  const handleClick = (value) => {
    // Update the active button
    setActiveButton(value)
  }

  return (
    <section className='flex items-center justify-center w-full px-2 py-4'>
      <div className='flex items-center justify-center h-full p-2 rounded-xl bg-slate-200'>
        {buttons.map((elem) => (
          <button
            className='p-2 text-sm border-2 rounded-lg'
            key={elem.value}
            style={{
              backgroundColor: activeButton === elem.value ? 'blue' : '',
              color: activeButton === elem.value ? 'white' : '',
            }}
            onClick={() => handleClick(elem.value)}
          >
            {elem.name}
          </button>
        ))}
      </div>
    </section>
  )
}

export default Bar
