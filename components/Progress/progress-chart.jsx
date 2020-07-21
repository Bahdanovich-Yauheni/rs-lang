import React from 'react'

import { fade } from '@material-ui/core/styles/colorManipulator'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      boxSizing: 'border-box',
      background: fade(theme.palette.background.success, 0.3),
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      padding: '0.4rem 0.5rem',
    },
    filled: {
      width: '14%',
      background: theme.palette.common.success,
    },
    unfilled: {
      width: '14%',
      background: fade(theme.palette.common.success, 0.25),
    },
  })
)

export function ProgressChart({ width, value }) {
  const styles = useStyles()
  const chartItems = [...Array(5).keys()].map((id) => {
    if (id + 1 <= value / 20)
      return <div key={`${(id + 1) * 20}`} className={styles.filled} style={{ height: `${(id + 1) * 20}%` }} />
    return <div key={`${(id + 1) * 20}`} className={styles.unfilled} style={{ height: `${(id + 1) * 20}%` }} />
  })
  return (
    <div className={styles.root} style={{ width: width, height: width }}>
      {chartItems}
    </div>
  )
}
