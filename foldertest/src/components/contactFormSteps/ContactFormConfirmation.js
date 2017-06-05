import React, { Component } from 'react';
import Lexique from '../../locales';

class ContactFormConfirmation extends Component {

    render() {
        const lexique = Lexique[this.props.locale];
        return (
            <section className="step-form" style={{width: `calc(100% / ${this.props.nbSteps})`}}>
                <h5>{lexique.confirm.title}</h5>
                <p className="confirmation-sent">{lexique.confirm.infos}</p>
            </section>
        )
    }
}

export default ContactFormConfirmation;
