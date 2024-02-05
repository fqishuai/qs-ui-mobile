import React, { AriaAttributes } from 'react'
import type { CSSProperties, ReactElement } from 'react'
import classNames from 'classnames'

export type NativeProps<S extends string = never> = {
  className?: string
  style?: CSSProperties & Partial<Record<S, string>>
  tabIndex?: number
} & AriaAttributes

export function RenderNativeProps<P extends NativeProps>({ mergeDefaultProps, renderElement, elementClassName }: { mergeDefaultProps: P, renderElement: (arg: P)=>ReactElement, elementClassName?: string }) {
  const commonProps = {} as P

  if (elementClassName) {
    commonProps.className = classNames(elementClassName, mergeDefaultProps.className)
  }
  if (mergeDefaultProps.style) {
    commonProps.style = { ...mergeDefaultProps.style }
  }
  if (mergeDefaultProps.tabIndex !== undefined) {
    commonProps.tabIndex = mergeDefaultProps.tabIndex
  }
  for (const key in mergeDefaultProps) {
    if (!mergeDefaultProps.hasOwnProperty(key)) continue
    if (key.startsWith('data-') || key.startsWith('aria-')) {
      commonProps[key] = mergeDefaultProps[key]
    }
  }

  return renderElement(commonProps)
}