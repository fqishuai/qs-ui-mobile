import { NativeProps, RenderNativeProps } from '../../utils/render-native-props'
import React, { memo } from 'react'
import { mergeProps } from '../../utils/with-default-props'
import classNames from 'classnames'

type SpinLoadingProps = {
  color?: 'default' | 'primary' | 'white' | (string & {})
  size?: string
} & NativeProps<'--color'>

const classPrefix = 'qsf-spin-loading-no-spring'

const radius = 15

const circumference = 2 * Math.PI * radius

const defaultProps = {
  color: 'default',
  size: '32px',
}

const colorRecord: Record<string, string> = {
  default: 'var(--qsf-color-weak)',
  primary: 'var(--qsf-color-primary)',
  white: 'var(--qsf-color-white)',
}

export const SpinLoadingNoSpring = memo<SpinLoadingProps>(p => {
  const props = mergeProps(defaultProps, p)

  return (
    <RenderNativeProps
      mergeDefaultProps={props}
      elementClassName={classNames('qsf-loading', classPrefix)}
      renderElement={commonProps => (
        <div
          style={{
            width: props.size,
            height: props.size,
            '--color': colorRecord[props.color] ?? props.color,
          }}
          {...{ ...commonProps }}
        >
          <svg className={`${classPrefix}-svg`} viewBox='0 0 32 32'>
            <circle
              className={`${classPrefix}-fill`}
              fill='none'
              strokeWidth='2'
              strokeDasharray={circumference}
              cx={16}
              cy={16}
              r={radius}
            />
          </svg>
        </div>
      )}
    ></RenderNativeProps>
  )
})
