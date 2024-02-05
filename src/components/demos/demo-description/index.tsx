import React, { type FC, ReactNode } from "react"
import './index.less'

export const DemoDescription: FC<{
  children?: ReactNode
}> = props => {
  return (
    <div className="demo-description">
      { props.children }
    </div>
  )
}