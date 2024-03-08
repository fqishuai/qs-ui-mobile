import React from 'react'
import { Button, SpinLoading } from 'qs-ui-mobile'
import {
  DemoBlock,
  useMotionReduced,
  nonGlobalReduceMotion,
  nonGlobalRestoreMotion,
} from 'demos'
import { animated, useSpring } from '@react-spring/web'
import './demo2.less'

const MotionDemo = () => {
  const motionReduced = useMotionReduced()

  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 },
    config: { duration: 1000 },
    loop: { reverse: true },
    cancel: motionReduced,
  })

  return (
    <animated.div
      style={{
        width: 80,
        height: 80,
        background: '#ff6d6d',
        borderRadius: 8,
        ...springs,
      }}
    />
  )
}

export default () => {
  return (
    <>
      <div>
        <Button
          onClick={() => {
            nonGlobalReduceMotion()
          }}
        >
          关闭以下所有动效
        </Button>
        <Button
          onClick={() => {
            nonGlobalRestoreMotion()
          }}
        >
          恢复以下所有动效
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
