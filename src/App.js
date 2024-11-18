import React from 'react';
import AzureServiceBusComponent from './AzureServiceBusComponent';

function App() {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Azure Service Bus React App'),
    React.createElement(AzureServiceBusComponent)
  );
}

export default App;
