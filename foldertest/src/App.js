import React, { Component } from 'react';
import ContactFormVitrine from './components/ContactFormVitrine';

class App extends Component {
  render() {
    return (
        <div className="form-contact-vitrine">
            <ContactFormVitrine  {...this.props}/>
        </div>
    );
  }
}

export default App;
