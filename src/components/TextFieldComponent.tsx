import * as React from 'react'
import {TextField} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

type Props = {
  TextBox: {
    state: string,
    setState: React.Dispatch<React.SetStateAction<string>>
  }
}

export const TextFieldComponent: React.FC<Props> = props => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
    <TextField
      id="standard-textarea"
      label="Text"
      rowsMax={10}
      placeholder={props.TextBox.state}
      onChange={(event) => props.TextBox.setState(event.target.value)}
      fullWidth
      multiline
      />
    </div>
  )
}

const useStyles = makeStyles({
  root: {
    marginBottom: 20
  }
})
