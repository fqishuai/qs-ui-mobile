import { mergeProps } from '../../utils/with-default-props'
import React, { memo } from 'react'
import { NativeProps, RenderNativeProps } from '../../utils/render-native-props'
import classNames from 'classnames'

export type DotLoadingProps = {
  color?: 'default' | 'primary' | 'white' | (string & {})
} & NativeProps

const classPrefix = 'qsf-dot-loading'

const colorRecord: Record<string, string> = {
  default: 'var(--qsf-color-weak)',
  primary: 'var(--qsf-color-primary)',
  white: 'var(--qsf-color-white)',
}

const defaultProps = {
  color: 'default',
}

export const DotLoading = memo<DotLoadingProps>(p => {
  const props = mergeProps(defaultProps, p)
  const dotLoadingProps: DotLoadingProps = {
    style: {
      color: colorRecord[props.color] ?? props.color,
    },
  }

  return (
    <RenderNativeProps
      mergeDefaultProps={props}
      elementClassName={classNames('qsf-loading', classPrefix)}
      renderElement={commonProps => (
        <div {...{ ...dotLoadingProps, ...commonProps }}>
          <svg
            height='1em'
            viewBox='0 0 100 40'
            style={{ verticalAlign: '-0.125em' }}
          >
            <g stroke='none' strokeWidth='1' fill='currentColor'>
              {[0, 1, 2].map(i => (
                <rect
                  key={i}
                  x={20 + i * 26}
                  y='16'
                  width='8'
                  height='8'
                  rx='2'
                >
                  <animate
                    attributeName='y'
                    dur='2s'
                    begin={`${i * 0.2}s`}
                    repeatCount='indefinite'
                    values='16; 6; 26; 16; 16'
                    keyTimes='0; 0.1; 0.3; 0.4; 1'
                  />
                </rect>
              ))}
            </g>
          </svg>
        </div>
      )}
    ></RenderNativeProps>
  )
})
