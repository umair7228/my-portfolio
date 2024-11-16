"use client"
import React, { useEffect, useState } from 'react'

const createFireFly = () => ({
    id: Math.random(),
    top: `${Math.random()*100}%`,
    left: `${Math.random()*100}%`,
    animationDuration: `${Math.random()*5 + 5}s`
})

const FireFliesBackground = () => {

  const [fireflies, setfireflies] = useState([])

  useEffect(() => {
    
    const addFireflyPeriodically = () => {
      const newFirefly = createFireFly()
      setfireflies(currentFireflies => [
        ...currentFireflies.slice(-14),
        newFirefly
      ])
    }

    const interval = setInterval(addFireflyPeriodically, 1000)

    return () => clearInterval(interval)
  }, [])
  

  return (
    <div className='fixed top-0 left-0 w-full h-full overflow-hidden -z-50'>
      {
        fireflies.map((firefly) => {
          return <div key={firefly.id}
          className='absolute rounded-full w-[15px] h-[15px] bg-firefly-radial'
          style={{
            top: firefly.top,
            left: firefly.left,
            animation: `move ${firefly.animationDuration} infinite alternate`
          }}
          >

          </div>
        })
      }
    </div>
  )
}

export default FireFliesBackground