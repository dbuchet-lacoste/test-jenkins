import React, { Component } from 'react';
import Lexique from '../../locales';

class ContactFormStep1 extends Component {

    constructor(props) {
        super(props);
        this.state = { message: '' }
    }

    handleInputChange(m) {
        this.setState({ message: m })
    }

    controlForm(e) {
        if (e.target.checkValidity()) {
            e.preventDefault();
            this.props.onStepSubmit(this.state);
        }
    }

    render() {
        const lexique = Lexique[this.props.locale];
        return (
            <section className="step-form" style={{width: `calc(100% / ${this.props.nbSteps})`}}>
                <h5>{this.props.mode === "full" ? lexique.step1.titleFull : lexique.step1.title}</h5>
                <form onSubmit={e=>this.controlForm(e)}>
                    <div className="input-row">
                        <div className="col-label">
                            <label htmlFor="input_message" dangerouslySetInnerHTML={{__html:`${lexique.step1.label} ${lexique.global.required}`}}></label>
                            <p>{lexique.step1.description}</p>
                        </div>
                        <div className="col-input">
                            <textarea id="input_message" required value={this.state.message} onChange={e => this.handleInputChange(e.target.value)} />
                        </div>
                    </div>
                    <div className="input-row row-controls">
                        <div className="col-label">
                            <span className="notice"  dangerouslySetInnerHTML={{__html:lexique.global.mandatory}} />
                        </div>
                        <div className="col-input tar">
                            <button type="submit">{lexique.step1.submit} <i className="fa fa-angle-right"></i></button>
                        </div>
                    </div>
                </form>
            </section>
        )
    }
}

export default ContactFormStep1;
