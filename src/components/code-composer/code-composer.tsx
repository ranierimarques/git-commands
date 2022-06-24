import { Fragment } from 'react'
import { Tooltip } from '../tooltip'

type codeComposerProps = {
  compose: string[][]
}

export function CodeComposer({ compose }: codeComposerProps) {
  return (
    <>
      {compose.map((item, index) => {
        if (item.length === 1) {
          return <Fragment key={index}> {item[0]}</Fragment>
        }

        return (
          <Fragment key={index}>
            {item[2] !== 'no-space' && ' '}
            <Tooltip content={item[1]}>{item[0]}</Tooltip>
          </Fragment>
        )
      })}
    </>
  )
}
