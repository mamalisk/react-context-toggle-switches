import React, { Component } from 'react'
import styled from 'styled-components';
import { Slider, CheckedSlider } from './atoms/Slider';
import { MarketConsumer } from '../../state/State';
const defaultHeight = '34px';

const ToggleSwitchContainer = styled.div`
    display: inline-block;
    position: relative;
    text-align: center;
    width: 60px;
    height: ${defaultHeight};
`;


export default class ToggleSwitch extends Component {

  state = {
    checked: this.props.checked
  }

  handleClick = () => {
      this.setState({
        checked: !this.state.checked
      })
      this.props.onClick()
  }

  render() {
    const SwitchSlider = this.state.checked ? CheckedSlider : Slider;

    return (
      <MarketConsumer>
        {
          context => (
            <>
            <h2>{this.props.name.description}</h2>
              <ToggleSwitchContainer>
                <SwitchSlider
                        color={context.colors.get(this.props.name)}
                        defaultHeight={defaultHeight}
                        onClick={this.handleClick}
                        checked={context.getState(this.props.name)}
                  />
              </ToggleSwitchContainer>
            </>
          )
        }
      </MarketConsumer>
    )
  }
}
