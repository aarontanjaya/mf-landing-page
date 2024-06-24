import React from 'react'
import CardHighlight from '../CardHighlight'
import { HIGHLIGHT_STATS } from './models/constants'

const HighlightStats = ({
  className = '',
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div className={`${className} grid grid-cols-3`} {...props}>
      {HIGHLIGHT_STATS.map((props, idx) => (
        <CardHighlight key={`highlight-${idx}`} {...props} />
      ))}
    </div>
  )
}

export default HighlightStats
