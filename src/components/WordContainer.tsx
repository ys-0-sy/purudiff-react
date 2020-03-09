import * as React from 'react'
import { Grid } from '@material-ui/core'
import * as JsDiff from 'diff'
import _ from 'lodash'
import { makeStyles } from '@material-ui/styles'

type Props = {
  texts: string[],
  children?: React.ReactNode
  type: "added" | "removed",
}

type parseText = {
  id: string,
  count: number,
  value: string,
  added: boolean,
  removed: boolean
}

const parseText = (wordsArray: JsDiff.Change[]): parseText[] => {
  return wordsArray.map((item, itemIndex) => {
    const values = item.value.match(/[\s\S]{1,1}/g) || []
    return values.map((valuesItem, valuesIndex) => {
      return {
        id: `${itemIndex}-${valuesIndex}`,
        count: valuesItem.length,
        value: valuesItem,
        added: item.added || false,
        removed: item.removed || false
      }
    })
  }).reduce((pre, current) => { pre.push(...current); return pre }, [])
}

const numReturn = (item:JsDiff.Change) => {
  return (item.value.match(/\n/g) || []).length
}

const numSpace = (item:JsDiff.Change) => {
  return (item.value.match(/ /g) || []).length
}



export const WordContainer: React.FC<Props> = props => {
  const classes = useStyles()
  const computeStyle = (item: parseText) => {
    return (item.added ? classes.added
            : item.removed ? classes.removed
            : classes.text)
  }
  const diffText = parseText(JsDiff.diffChars(props.texts[0], props.texts[1]).filter((words) => {
    if (props.type === "added") {
      return !words.added
    } else {
      return !words.removed
      }

  }))
  return (
    <Grid item xs={4} style={{textAlign: 'left', fontSize: 16}}>
      {diffText.map((item: parseText) => {
        return (
          <span
            key={item.id}
            className={computeStyle(item)}
          >
          {item.value}
          {_.range(numSpace(item)).map(() => (<><span>&nbsp;</span></>))}
          {_.range(numReturn(item)).map(() => (<><span>[←]</span><br /></>))}
        </span>)
        })
      }
    </Grid>
  )
}


const useStyles = makeStyles({
  added: {
    background: 'green',
    color: 'white'
  },
  removed: {
    background: 'red',
    color: 'white'
  },
  text: {
    color: 'black'
  }
})
