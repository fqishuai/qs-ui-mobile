import { NativeProps, RenderNativeProps } from '../../utils/render-native-props'
import React, { memo } from 'react'
import { mergeProps } from '../../utils/with-default-props'
import { animated, useSpring } from '@react-spring/web'
import classNames from 'classnames'
import { useMotionReduced } from '../../utils/reduce-and-restore-motion'

export type SpinLoadingProps = {
  color?: 'default' | 'primary' | 'white' | (string & {})
  size?: string
  animatedDivWrapper?: boolean
} & NativeProps<'--color'>

const classPrefix = 'qsf-spin-loading'

const radius = 15

const circumference = radius * 3.141592653589793 * 2

const defaultProps = {
  color: 'default',
  size: '32px',
}

const colorRecord: Record<string, string> = {
  default: 'var(--qsf-color-weak)',
  primary: 'var(--qsf-color-primary)',
  white: 'var(--qsf-color-white)',
}

export const SpinLoading = memo<SpinLoadingProps>(p => {
  const props = mergeProps(defaultProps, p)

  const motionReduced = useMotionReduced()

  const { percent } = useSpring({
    cancel: motionReduced,
    loop: {
      reverse: true,
    },
    from: {
      percent: 80,
    },
    to: {
      percent: 30,
    },
    config: {
      duration: 1200,
    },
  })

  const svgRender = (
    <svg className={`${classPrefix}-svg`} viewBox='0 0 32 32'>
      <animated.circle
        className={`${classPrefix}-fill`}
        fill='transparent'
        strokeWidth='2'
        strokeDasharray={circumference}
        strokeDashoffset={percent}
        strokeLinecap='square'
        r={radius}
        cx={16}
        cy={16}
      />
    </svg>
  )

  return (
    <RenderNativeProps
      mergeDefaultProps={props}
      elementClassName={classNames('qsf-loading', classPrefix)}
      renderElement={commonProps => {
        if (props.animatedDivWrapper) {
          return (
            <animated.div
              style={{
                width: props.size,
                height: props.size,
                '--color': colorRecord[props.color] ?? props.color,
              }}
              {...{ ...commonProps }}
            >
              {svgRender}
            </animated.div>
          )
        } else {
          return (
            <div
              style={{
                width: props.size,
                height: props.size,
                '--color': colorRecord[props.color] ?? props.color,
              }}
              {...{ ...commonProps }}
            >
              {svgRender}
            </div>
          )
        }
      }}
    ></RenderNativeProps>
  )
})
