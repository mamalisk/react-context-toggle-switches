import React, { Component } from 'react';
import ToggleSwitch from './components/ToggleSwitch/ToggleSwitch';
import './App.css';
import { withMarketingLogic, MarketConsumer } from './state/State';

class App extends Component {

  getSwitches = (context) => {

    const toggleSwitches = [];

    context.colors.forEach((color, type) => {
        toggleSwitches.push(
          <ToggleSwitch key={type.description}
                        color={color}
                        name={type}
                        checked={false}
                        onClick={() => context.changeState(type)}
                            />
        )
    });

    return (
    <div className = "App">
      <h1> Our Toggle Switch!</h1>
      {
          toggleSwitches
      }
    </div>
    )
  }

  render() {
    return (
    <MarketConsumer>
      {
        (context) => this.getSwitches(context)
      }
      </MarketConsumer>
      );
    }
}

export default withMarketingLogic(App);