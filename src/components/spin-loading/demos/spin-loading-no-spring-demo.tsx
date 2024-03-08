import { DemoBlock, SpinLoadingNoSpring } from 'demos'
import React from 'react'

export default () => {
  return (
    <>
      <DemoBlock title='默认'>
        <SpinLoadingNoSpring></SpinLoadingNoSpring>
      </DemoBlock>
      <DemoBlock title='颜色' flex>
        <SpinLoadingNoSpring color='default' />
        <SpinLoadingNoSpring color='primary' />
        <SpinLoadingNoSpring color='currentColor' />
        <SpinLoadingNoSpring color='red' />
      </DemoBlock>
      <DemoBlock title='大小' flex>
        <SpinLoadingNoSpring size='24px' />
        <SpinLoadingNoSpring size='32px' />
        <SpinLoadingNoSpring size='48px' />
      </DemoBlock>
      <DemoBlock title='自定义style'>
        <SpinLoadingNoSpring
          style={{ width: '64px', '--color': 'green' }}
          color='red'
        />
      </DemoBlock>
    </>
  )
}
