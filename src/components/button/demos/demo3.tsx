import { Button } from 'qs-ui-mobile'
import type { ButtonRef } from 'qs-ui-mobile'
import { DemoBlock } from 'demos'
import React, { useRef } from 'react'

export default () => {
  const btnRef = useRef<ButtonRef>(null)

  const handleBtnClick = () => {
    alert(btnRef.current?.nativeElement?.type)
  }

  return (
    <>
      <DemoBlock title='获取原始 button 元素'>
        <Button ref={btnRef} onClick={handleBtnClick}>
          获取原始button元素的type
        </Button>
      </DemoBlock>
    </>
  )
}
