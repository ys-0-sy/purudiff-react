import * as React from 'react'
import { Grid } from '@material-ui/core'
import * as JsDiff from 'diff'
import _ from 'lodash'

type Props = {
  texts: string[],
  children?: React.ReactNode
  type: "added" | "removed",
}


const parseText = (wordsArray: JsDiff.Change[]): JsDiff.Change[] => {

  return wordsArray.map((item) => {
    const values = item.value.match(/[\s\S]{1,5}/g) || []
    return values.map((valuesItem, valuesIndex) => {
       return {
         count: valuesItem.length,
         value: valuesItem,
         hasSpace: valuesItem[0] === ' ' || String(values[valuesIndex - 1]).slice(-1) === ' ',
        added: item.added,
        removed: item.removed
      }
    })
  })
    .reduce((pre, current) => { pre.push(...current); return pre }, [])
}

const numBlank = (item:JsDiff.Change) => {
  return (item.value.match(/\n/g) || []).length
}

export const WordContainer: React.FC<Props> = props => {
  const diffText = parseText(JsDiff.diffChars(props.texts[0], props.texts[1]).filter((words) => {
      return !words.added
    }))
  console.log(diffText)
  return (
    <Grid item xs={3} style={{textAlign: 'left'}}>
      {diffText.map(item => {
        return (<span>{item.value}
          {_.range(numBlank(item)).map(() => (<><span>[←]</span><br /></>))}
        </span>)
        })
      }
    </Grid>
  )
}

