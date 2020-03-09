import * as React from 'react'
import { Grid } from '@material-ui/core'
import * as JsDiff from 'diff'
import _ from 'lodash'


import './WordContainer.scss'

type Props = {
  texts: string[],
  children?: React.ReactNode
  type: "added" | "removed",
  puru: boolean
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

const numSpace = (item: JsDiff.Change) => {
  const count = (item.value.match(/ /g) || []).length
  return count > 0 ? count -1 : 0
}



export const WordContainer: React.FC<Props> = props => {
  const computeClassName = (item: parseText) => {
    const diffEnv = item.added ? "Added"
                    : item.removed ? "Removed"
                    : "Default"
    const puruEnv = props.puru ? "shake shake-constant Puru" : ""
    return (
      diffEnv === "Default" ?  "Default" : `${diffEnv} ${puruEnv}`
    )
  }
  const diffText = parseText(JsDiff.diffChars(props.texts[0], props.texts[1]).filter((words) => {
    if (props.type === "added") {
      return !words.added
    } else {
      return !words.removed
      }
  }))

  return (
    <Grid style={{textAlign: 'left', fontSize: 16}}>
      {diffText.map((item: parseText) => {
        return (
          <span
            key={item.id}
            className={computeClassName(item)}
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



