import React from 'react'
import CardHighlight from '../CardHighlight'
import { HIGHLIGHT_STATS } from './models/constants'

const HighlightStats = ({
  className = '',
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div className={`${className} grid grid-cols-3`} {...props}>
      {HIGHLIGHT_STATS.map(props => (
        <CardHighlight {...props} />
      ))}
    </div>
  )
}

export default HighlightStats
