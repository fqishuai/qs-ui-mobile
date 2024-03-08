import React from 'react'
import { DemoBlock, useMotionReduced } from 'demos'
import { Button, reduceMotion, restoreMotion, SpinLoading } from 'qs-ui-mobile'
import { animated, useSpring } from '@react-spring/web'

export default () => {
  return (
    <>
      <div>
        <Button
          onClick={() => {
            reduceMotion()
          }}
        >
          跳过动效
        </Button>
        <Button
          onClick={() => {
            restoreMotion()
          }}
        >
          保持动效
        </Button>
      </div>
      <DemoBlock title='控制circle动效'>
        <SpinLoading
          style={{ width: '64px', '--color': 'green' }}
          className='no-svg-animation'
        />
      </DemoBlock>
      <DemoBlock title='控制平移动效'>
        <MotionDemo></MotionDemo>
      </DemoBlock>
    </>
  )
}

const MotionDemo = () => {
  const motionSkipped = useMotionReduced()

  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 },
    config: { duration: 1000 },
    loop: { reverse: true },
    pause: motionSkipped,
  })

  return (
    <>
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
