import React, { forwardRef, useRef, useState } from "react";
import type {
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  ReactNode,
  MouseEventHandler,
} from 'react'
import classNames from 'classnames'
import { mergeProps } from "../../utils/with-default-props";
import { NativeProps, RenderNativeProps } from "../../utils/render-native-props";
import { isPromise } from '../../utils/validate'

const classPrefix = `qsf-button`

type NativeButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export type ButtonProps = {
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  fill?: 'solid' | 'outline' | 'none'
  size?: 'mini' | 'small' | 'middle' | 'large'
  block?: boolean
  loading?: boolean | 'auto'
  loadingText?: string
  loadingIcon?: ReactNode
  disabled?: boolean
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void | Promise<void> | unknown
  type?: 'submit' | 'reset' | 'button'
  shape?: 'default' | 'rounded' | 'rectangular'
  children?: ReactNode
} & Pick<
  NativeButtonProps,
  'onMouseDown' | 'onMouseUp' | 'onTouchStart' | 'onTouchEnd' | 'id'
> &
  NativeProps<
    | '--text-color'
    | '--background-color'
    | '--border-radius'
    | '--border-width'
    | '--border-style'
    | '--border-color'
  > & { ref?: React.Ref<HTMLButtonElement> }

export type ButtonRef = {
  nativeElement: HTMLButtonElement | null
}

const defaultProps: ButtonProps = {
  color: 'default',
  fill: 'solid',
  block: false,
  loading: false,
  // loadingIcon: <DotLoading color='currentColor' />,
  type: 'button',
  shape: 'default',
  size: 'middle',
}

export const Button = forwardRef<ButtonRef, ButtonProps>((p, ref) => {
  const [innerLoading, setInnerLoading] = useState(false)
  const nativeButtonRef = useRef<HTMLButtonElement>(null)
  
  const props = mergeProps(defaultProps, p)
  console.log(123, JSON.stringify(props))
  const loading = props.loading === 'auto' ? innerLoading : props.loading
  const disabled = props.disabled || loading
  const buttonProps: ButtonProps = {
    ref: nativeButtonRef,
    type: props.type,
    disabled: disabled,
    onMouseDown: props.onMouseDown,
    onMouseUp: props.onMouseUp,
    onTouchStart: props.onTouchStart,
    onTouchEnd: props.onTouchEnd,
  }

  const handleClick: MouseEventHandler<HTMLButtonElement> = async e => {
    if (!props.onClick) return

    const promise = props.onClick(e)

    if (isPromise(promise)) {
      try {
        setInnerLoading(true)
        await promise
        setInnerLoading(false)
      } catch (e) {
        setInnerLoading(false)
        throw e
      }
    }
  }

  buttonProps.onClick = handleClick

  buttonProps.className = classNames(
    classPrefix,
    {
      [`${classPrefix}-${props.color}`]: props.color,
      [`${classPrefix}-block`]: props.block,
      [`${classPrefix}-disabled`]: disabled,
      [`${classPrefix}-fill-outline`]: props.fill === 'outline',
      [`${classPrefix}-fill-none`]: props.fill === 'none',
      [`${classPrefix}-mini`]: props.size === 'mini',
      [`${classPrefix}-small`]: props.size === 'small',
      [`${classPrefix}-large`]: props.size === 'large',
      [`${classPrefix}-loading`]: loading,
    },
    `${classPrefix}-shape-${props.shape}`
  )
  
  return (
    <RenderNativeProps
      mergeDefaultProps={props}
      elementClassName={buttonProps.className}
      renderElement={(commonProps) =>
        <button {...{...buttonProps, ...commonProps}}>
          <span>{props.children}</span>
        </button>
      }
    ></RenderNativeProps>
  )
})