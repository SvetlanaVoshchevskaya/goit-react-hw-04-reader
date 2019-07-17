import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom';
import queryString from 'query-string';
import Control from './Control';
import Publication from './Publication';
import Counter from './Counter';
import publication from './publication.json';
import styles from './Reader.module.css';

const indexFromLocation = props => queryString.parse(props).item;

class Reader extends Component {
  static defaultProps = {
    step: 1,
  };

  static propTypes = {
    step: PropTypes.number,
    history: PropTypes.shape(PropTypes.object).isRequired,
    location: PropTypes.shape(PropTypes.object).isRequired,
  };

  state = { index: 0 };

  handleClickNext = () => {
    this.setState((prevIndex, props) => {
      return {
        index: prevIndex.index + props.step,
      };
    }, this.changeHistory);
  };

  handleClickPrevios = () => {
    this.setState((prevIndex, props) => {
      return {
        index: prevIndex.index - props.step,
      };
    }, this.changeHistory);
  };

  changeHistory = () => {
    this.props.history.push({
      ...this.props.location,
      search:
        this.state.index === 11
          ? `item=${this.state.index - this.props.step}`
          : `item=${this.state.index + this.props.step}`,
    });
  };

  render() {
    const max = publication.length;
    const { step, location } = this.props;
    const qs = Number(indexFromLocation(location.search));
    return (
      <div>
        {qs <= 0 && qs >= 11 ? (
          <div className={styles.reader}>
            <Publication
              title={publication[qs].title}
              text={publication[qs].text}
            />
            <Counter index={qs} length={max} step={step} />
            <Control
              index={qs}
              handleClickNext={this.handleClickNext}
              handleClickPrevios={this.handleClickPrevios}
            />
          </div>
        ) : (
          <Redirect
            to={{
              pathname: '/reader',
              search: '?item=0',
            }}
          />
        )}
      </div>
    );
  }
}

export default withRouter(Reader);
