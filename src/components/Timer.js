import { Button, Slider, withStyles } from "@material-ui/core";
import { Component } from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import DeleteIcon from "@material-ui/icons/Delete";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress);

class Timer extends Component {
  state = {
    duration: 5,
    value: 0,
  };

  componentDidMount = () =>
    (this.interval = setInterval(this.setStateValues, 1000));

  componentWillUnmount = () => clearInterval(this.interval);

  handleDurationChange = (event, newValue) => {
    this.setState({ duration: Number(newValue) });
  };

  resetTimer = () => this.setState({ value: 0 });

  setStateValues = () => {
    this.setState((state) => ({
      value:
        state.value >= state.duration
          ? state.value
          : Math.round(state.value + 1, 1),
    }));
  };

  render = () => (
    <div className="animated fadeIn">
      <Container>
        <Row>
          <Col col xl="12" lg="12" md="12" sm="12">
            <BorderLinearProgress
              variant="determinate"
              value={this.state.value}
            />
          </Col>
          <Col col xl="12" lg="12" md="12" sm="12">
            <h1>{this.state.value}s</h1>
          </Col>
          <Col col xl="12" lg="12" md="12" sm="12">
            <Slider
              defaultValue={0}
              onChange={this.handleDurationChange}
              aria-labelledby="discrete-slider-small-steps"
              min={0}
              max={100}
              value={this.state.duration}
              valueLabelDisplay="auto"
            />
          </Col>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.resetTimer}
            startIcon={<DeleteIcon />}
          >
            Timer reset
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Timer;
