import { DemoBlock } from 'demos'
import { SpinLoading } from 'qs-ui-mobile'
import React from 'react'

export default () => {
  return (
    <>
      <DemoBlock title='默认'>
        <SpinLoading animatedDivWrapper></SpinLoading>
      </DemoBlock>
      <DemoBlock title='颜色' flex>
        <SpinLoading color='default' />
        <SpinLoading color='primary' />
        <SpinLoading color='currentColor' />
        <SpinLoading color='red' />
      </DemoBlock>
      <DemoBlock title='大小' flex>
        <SpinLoading size='24px' />
        <SpinLoading size='32px' />
        <SpinLoading size='48px' />
      </DemoBlock>
      <DemoBlock title='自定义style调整颜色和大小'>
        <SpinLoading
          style={{ width: '64px', '--color': 'green' }}
          color='red'
        />
      </DemoBlock>
    </>
  )
}
