import React from 'react'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import { card } from '../data'
import { useRecoilValue } from 'recoil'
import { barVal } from '../state/atom/BarValue'
const Hero = () => {
  const BarVal = useRecoilValue(barVal)
  const calculateBallPosition = (value) => {
    const minValue = -100
    const maxValue = 100

    let percentage = ((value - minValue) / (maxValue - minValue)) * 100

    percentage = Math.max(0, Math.min(percentage, 100))

    const imageWidth = 50
    const ballWidth = 4
    const maxLeft = 100 - (ballWidth / imageWidth) * 100
    return Math.max(0, Math.min(percentage, maxLeft))
  }
  const elemIndex = card.findIndex((elem) => {
    return elem.time === BarVal
  })
  // console.log(elemIndex)
  const { data } = card[elemIndex]
  // console.log(data)
  return (
    <section className='h-[80%] overflow-y-scroll lg:flex justify-center items-center w-full lg:overflow-hidden '>
      <div className='flex flex-col gap-4 px-4 py-4 lg:grid lg:grid-cols-2 lg:w-[80%]'>
        {data.map((elem) => {
          return (
            <div
              key={elem.graphData}
              className='flex flex-col w-full p-6 bg-white rounded-lg '
            >
              <div className='flex flex-col justify-between gap-10'>
                <div className='flex items-center justify-between '>
                  <h2 className='text-xl font-bold'>{elem.title}</h2>
                  <IoIosInformationCircleOutline className='text-xl opacity-50 cursor-pointer' />
                </div>

                <div className='relative flex flex-col items-center gap-4 lg:px-10 '>
                  <div className='relative flex justify-center lg:w-[50%]'>
                    <img
                      className='w-full '
                      src={elem.photo}
                      alt=''
                    />
                    <div
                      className='absolute w-4 h-4 bg-red-500 rounded-full '
                      style={{
                        left: `${calculateBallPosition(elem.graphData)}%`,
                        transform: 'translate(-50%, -50%)',
                        top: '50%',
                        transition: 'left 0.3s ease',
                      }}
                    ></div>
                  </div>
                  {elem.cards && (
                    <div className='flex flex-row items-center justify-between w-full lg:w-[60%]'>
                      {elem.cards.map((cardElem) => {
                        return (
                          <div
                            className='flex flex-col items-center justify-center gap-1 text-sm'
                            key={cardElem.title}
                          >
                            <h3>{cardElem.value}</h3>
                            <h2
                              style={{
                                background: `${cardElem.color}20`,
                                color: `${cardElem.color}`,
                              }}
                              className='px-2 py-1 rounded-lg font-semiboldbold '
                            >
                              {cardElem.title}
                            </h2>
                          </div>
                        )
                      })}
                    </div>
                  )}
                  <div className='flex justify-between w-full'>
                    {elem.card2.map((cardElem, index) => {
                      // console.log(cardElem)
                      return (
                        <div
                          className=''
                          key={index}
                        >
                          {cardElem.map((elem, index) => {
                            return (
                              <div
                                className='flex flex-col '
                                key={index}
                              >
                                <h3 className='text-sm opacity-60'>
                                  {elem.value}
                                </h3>
                                <h2 className='text-sm'>{elem.title}</h2>
                              </div>
                            )
                          })}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Hero
