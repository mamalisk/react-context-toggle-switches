import React from 'react';

export const Symbols = {
    GOOD: Symbol('GOOD'),
    FAST: Symbol('FAST'),
    CHEAP: Symbol('CHEAP')
}

const SwitchColors = new Map([
    [Symbols.GOOD, '#2196F3'],
    [Symbols.FAST, 'green'],
    [Symbols.CHEAP, 'red']
]);

const MarketContext = React.createContext();
export const MarketProvider = MarketContext.Provider;
export const MarketConsumer = MarketContext.Consumer;

const SwitchStates = {
    [Symbols.GOOD]: false,
    [Symbols.FAST]: false,
    [Symbols.CHEAP]: false
}

const MarketingState = {
    colors: SwitchColors,
    states: SwitchStates,
    changeState: (switchClicked) => {
        MarketingState.states[switchClicked] = !MarketingState.states[switchClicked];        
    },
    getState: (switchClicked) => (MarketingState.states[switchClicked])
}

export const withMarketingLogic = (Wrapped) => <MarketProvider value={MarketingState}><Wrapped /></MarketProvider>;
