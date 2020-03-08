import * as React from 'react'
import {Grid, TextField} from '@material-ui/core'

type Props = {
  TextBox: {
    state: string,
    setState: React.Dispatch<React.SetStateAction<string>>
  }
}

export const TextFieldComponent: React.FC<Props> = props => {
  return (
      <Grid item xs={4}>
        <TextField
          id="standard-textarea"
          label="Multiline Placeholder"
          placeholder={props.TextBox.state}
          onChange={(event) => props.TextBox.setState(event.target.value)}
          fullWidth
          multiline
        />
      </Grid>
  )
}
