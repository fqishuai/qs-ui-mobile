import React from "react"
import { Button } from 'qs-ui-mobile'
import { DemoBlock } from "qs-ui-mobile/components/demos"

export default () => {
  return <>
    <DemoBlock title="按钮类型">
      <Button>Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="danger">Danger</Button>
    </DemoBlock>
    <DemoBlock title="镂空按钮">
      <Button>默认按钮</Button>
    </DemoBlock>
  </>
}