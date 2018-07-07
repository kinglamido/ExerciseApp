import React from 'react'
import { Grid, Paper } from '../../../node_modules/@material-ui/core';
import './Exercises.css'

const styles = {
    Paper: {    padding: 20, marginTop: 10, marginBottom: 10}
}

 class Exercises extends React.Component {


  render() {
    return (
      <Grid container >
        <Grid item sm>
        <Paper style={styles}>
        left
        </Paper >
        </Grid>
        <Grid item sm>
        <Paper style={styles}>
        right 
        </Paper>
        </Grid>
      </Grid>
    )
  }
}


export default Exercises;