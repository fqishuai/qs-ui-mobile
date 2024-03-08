import { Button } from 'qs-ui-mobile'
import { DemoBlock } from 'demos'
import React from 'react'
import './demo2.less'

export default () => {
  return (
    <>
      <DemoBlock title='自定义文本颜色'>
        <Button className='btn'>自定义按钮文本颜色</Button>
      </DemoBlock>
      <DemoBlock title='自定义背景颜色'>
        <Button className='btn2'>自定义按钮背景颜色</Button>
      </DemoBlock>
      <DemoBlock title='自定义边框'>
        <Button className='btn3'>自定义按钮边框</Button>
      </DemoBlock>
      <DemoBlock title='自定义圆角'>
        <Button className='btn4'>自定义按钮圆角</Button>
      </DemoBlock>
      <DemoBlock title='自定义背景渐变'>
        <Button className='btn5'>自定义按钮背景颜色渐变</Button>
      </DemoBlock>
    </>
  )
}
