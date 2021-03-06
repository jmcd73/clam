import React, { Component } from 'react';
import styled from 'styled-components';
import Week from './Week';
import { defaultUtils as utils } from './dateUtils';

const MonthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-weight: 400;
  height: 214px;
  line-height: 2px;
  position: relative;
  text-align: center;
  moz-padding-start: 0;
`;

class Weeks extends Component {
  render() {
    return <MonthWrapper>{this.renderWeeks(this.props.displayDate)}</MonthWrapper>;
  }

  renderWeeks = () => {
    const weekArray = utils.getWeekArray(this.props.displayDate, 1);

    return weekArray.map(
      (s, i) => (
        <Week
          key={i}
          week={s}
          selected={this.props.selected}
          selectedDates={this.props.selectedDates}
          onSelect={this.props.onSelect}
          minDate={this.props.minDate}
          maxDate={this.props.maxDate}
        />
      ),
      this
    );
  };
}

export default Weeks;
