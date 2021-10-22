import React from 'react';
import ContactCard from './compenents/ContactCard';

class App extends React.Component {
  render() {

    return (
      <div>
        <h1 className="title">Friends Cards</h1>
        <ContactCard />
      </div>
    )
  }
}

export default App
