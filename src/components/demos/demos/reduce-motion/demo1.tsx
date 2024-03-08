import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { DemoBlock } from 'demos'
import { Button } from 'qs-ui-mobile'

const MotionDemo = () => {
  const [cancelMotion, setCancelMotion] = useState(false)

  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 },
    config: { duration: 400 },
    loop: { reverse: true },
    cancel: cancelMotion,
  })

  return (
    <>
      <div>
        <Button
          onClick={() => {
            setCancelMotion(true)
          }}
        >
          关闭动效
        </Button>
        <Button
          onClick={() => {
            setCancelMotion(false)
          }}
        >
          打开动效
        </Button>
      </div>
      <animated.div
        style={{
          width: 80,
          height: 80,
          background: '#ff6d6d',
          borderRadius: 8,
          ...springs,
        }}
      />
    </>
  )
}

export default function () {
  return (
    <>
      <DemoBlock title='控制平移动效'>
        <MotionDemo></MotionDemo>
      </DemoBlock>
    </>
  )
}
