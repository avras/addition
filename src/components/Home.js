import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { additionProblemInitialize, additionProblemCheckAnswer } from '../redux/actions';
import { TextField, Button } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  exercise: {
    backgroundColor: theme.palette.background.paper,
  },
  form : {
    margin: theme.spacing(1),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const Home = ({ additionProblem, additionProblemInitialize, additionProblemCheckAnswer }) => {
  const classes = useStyles();
  const [answer, setAnswer] = React.useState('');

  React.useEffect(() => {
    additionProblemInitialize();
  }, [additionProblemInitialize])


  const handleAnswerChange = event => {
    setAnswer(event.target.value);
  }

  const handleAnswerSubmit = event => {
    event.preventDefault();
    additionProblemCheckAnswer(answer);
  }
  
  const handleProblemInitialize = () => {
    setAnswer('');
    additionProblemInitialize();
  }

  // Credit: https://stackoverflow.com/questions/14636536/how-to-check-if-a-variable-is-an-integer-in-javascript
  const ansValid = value => {
    if (value === '') {
      return true;
    }
    else {
      return !isNaN(value) && 
        parseInt(value) === Number(value) && 
        !isNaN(parseInt(value, 10));
    }
  }

  const disableCheckAnswerButton = () => {
    return (answer.length === 0) || !ansValid(answer) || additionProblem.problemSolved;
  }

  const showNewExerciseButton = () => {
    if (additionProblem.showNewExerciseButton) {
      return (
        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          className={classes.submit}
          onClick={handleProblemInitialize}
          >
            New Exercise
        </Button>
      );
    } else {
      return null;
    }
  }

  const showAnswerResponse = () => {
    if (additionProblem.showAnswerResponse) {
      return (
      <Typography variant='h6' align='center'>
          {additionProblem.answerResponse}
      </Typography>
      );
    } else {
      return null;
    }
  }

  return (
    <Container component='main' maxWidth='xs'>
    <div className={classes.exercise}>
      <CssBaseline />
      <Typography variant="h6" align="center" gutterBottom>
        Answer please!
      </Typography>
      <Typography variant='h2' align='center'>
          {additionProblem.firstNum} + {additionProblem.secondNum} = ?
      </Typography>
    </div>
    <form className={classes.form} noValidate onSubmit={handleAnswerSubmit} autoComplete='off'>
      <TextField
        id='answer'
        label='Enter your answer here'
        margin='normal'
        fullWidth
        variant='outlined'
        inputProps={{
          style: {
            textAlign: 'right',
            fontSize: 50,
          }
        }}
        value={answer}
        onChange={handleAnswerChange}
        error={!ansValid(answer)}
        helperText={ansValid(answer) ? null : 'Please enter an integer'}
        disabled={additionProblem.problemSolved}
        />
      <Button
        type='submit'
        fullWidth
        variant='contained'
        color='primary'
        className={classes.submit}
        disabled = {disableCheckAnswerButton()}
        >
          Check Answer
      </Button>
    </form>
    {showAnswerResponse()}
    {showNewExerciseButton()}
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    additionProblem: state.additionProblem,
   };
};

export default connect(
  mapStateToProps,
  { additionProblemInitialize, additionProblemCheckAnswer }
)(Home);
