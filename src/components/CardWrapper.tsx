import * as React from 'react'
import { Grid, Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
type Props = {
  children?: React.ReactNode

}

export const CardWrapper: React.FC<Props> = props => {
  const classes = useStyles()
  return (
  <Grid item xs={5}>
    <Card className={classes.root}>
      {props.children}
  </Card>
</Grid>
) }

const useStyles = makeStyles({
  root: {
    padding: 8,
    marginTop: 60
  }
})
