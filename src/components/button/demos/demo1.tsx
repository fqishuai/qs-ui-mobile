import React from 'react'
import { Button, SpinLoading } from 'qs-ui-mobile'
import { DemoBlock, sleep } from 'demos'

export default () => {
  return (
    <>
      <DemoBlock title='按钮类型'>
        <Button>Default</Button>
        <Button color='primary'>Primary</Button>
        <Button color='success'>Success</Button>
        <Button color='warning'>Warning</Button>
        <Button color='danger'>Danger</Button>
      </DemoBlock>
      <DemoBlock title='镂空按钮'>
        <Button fill='outline'>Default Outline</Button>
        <Button fill='outline' color='primary'>
          Primary Outline
        </Button>
        <Button fill='outline' color='success'>
          Success Outline
        </Button>
        <Button fill='outline' color='warning'>
          Warning Outline
        </Button>
        <Button fill='outline' color='danger'>
          Danger Outline
        </Button>
      </DemoBlock>
      <DemoBlock title='文字按钮'>
        <Button fill='none'>Default None</Button>
        <Button fill='none' color='primary'>
          Primary None
        </Button>
        <Button fill='none' color='success'>
          Success None
        </Button>
        <Button fill='none' color='warning'>
          Warning None
        </Button>
        <Button fill='none' color='danger'>
          Danger None
        </Button>
      </DemoBlock>
      <DemoBlock title='禁用状态'>
        <Button disabled>Disabled</Button>
        <Button disabled color='primary'>
          Disabled
        </Button>
        <Button disabled color='success'>
          Disabled
        </Button>
        <Button disabled color='warning'>
          Disabled
        </Button>
        <Button disabled color='danger'>
          Disabled
        </Button>
      </DemoBlock>
      <DemoBlock title='块级按钮'>
        <Button block>Default</Button>
        <Button block color='primary'>
          Primary
        </Button>
        <Button block color='success'>
          Success
        </Button>
        <Button block color='warning'>
          Warning
        </Button>
        <Button block color='danger'>
          Danger
        </Button>
      </DemoBlock>
      <DemoBlock title='按钮形状'>
        <Button shape='default' color='primary'>
          Default Button
        </Button>
        <Button shape='rounded' color='success'>
          Rounded Button
        </Button>
        <Button shape='rectangular' color='warning'>
          Rectangular Button
        </Button>
      </DemoBlock>
      <DemoBlock title='按钮尺寸'>
        <Button size='mini' color='primary'>
          Mini
        </Button>
        <Button size='small' color='success'>
          Small
        </Button>
        <Button size='middle' color='warning'>
          Middle
        </Button>
        <Button size='large' color='danger'>
          Large
        </Button>
        <Button size='mini' shape='rounded' color='primary'>
          Rounded Mini Button
        </Button>
      </DemoBlock>
      <DemoBlock title='点状加载状态'>
        <Button loading></Button>
        <Button loading>Loading</Button>
        <Button loading size='mini'>
          mini Loading
        </Button>
        <Button loading color='primary' loadingText='正在加载'>
          Loading
        </Button>
        <Button
          loading='auto'
          onClick={async () => {
            await sleep(1000)
          }}
        >
          Auto Loading
        </Button>
      </DemoBlock>
      <DemoBlock title='转圈加载状态'>
        <Button
          loading
          loadingIcon={<SpinLoading size='16px' color='currentColor' />}
        ></Button>
        <Button
          loading
          loadingIcon={<SpinLoading size='16px' color='currentColor' />}
        >
          Loading
        </Button>
        <Button
          loading
          size='mini'
          loadingIcon={<SpinLoading size='12px' color='currentColor' />}
        >
          mini Loading
        </Button>
        <Button
          loading
          color='primary'
          loadingText='正在加载'
          loadingIcon={<SpinLoading size='16px' color='currentColor' />}
        >
          Loading
        </Button>
        <Button
          loading='auto'
          loadingIcon={<SpinLoading size='16px' color='currentColor' />}
          onClick={async () => {
            await sleep(1000)
          }}
        >
          Auto Loading
        </Button>
      </DemoBlock>
    </>
  )
}
