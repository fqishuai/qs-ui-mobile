import React from "react"
import type { FC, ReactNode } from "react"
import './index.less'

interface Props {
  title: string
  children?: ReactNode
}

export const DemoBlock: FC<Props> = props => {
  return (
    <div className="demo-block">
      <div className="title">{ props.title }</div>
      <div className="content">{ props.children }</div>
    </div>
  )
}