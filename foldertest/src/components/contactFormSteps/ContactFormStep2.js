import React, { Component } from 'react';
import _ from 'lodash';
import ReCaptcha from '@brandandcelebrities/recaptcha';
import { conf, env } from '../../config';
import Lexique from '../../locales';

class ContactFormStep2 extends Component {

    constructor(props) {
        super(props);
        this.state = { first_name: '', last_name:'', email:'', phone_number:'', company_name:'', position_title:'', captcha:(env === "dev" ? "UneededCaptcha" : ""), captchaError: false }

        this.fields = [
            { key: 'lastname', state:'last_name', required:true, type:'text' },
            { key: 'firstname', state:'first_name', required:true, type:'text' },
            { key: 'email', state:'email', required:true, type:'email' },
            { key: 'phone', state:'phone_number', required:true, type:'text' },
            { key: 'company', state:'company_name', required:true, type:'text' },
            { key: 'jobtitle', state:'position_title', required:true, type:'text' },
        ];

        if (env === "dev") console.warn('[DEV] Disabling Captcha verification');
    }

    handleInputChange(k, v) {
        this.setState({ [k]: v })
    }

    controlForm(e) {
        e.preventDefault();
        this.setState({captchaError: false});
        if (e.target.checkValidity()) {
            if (this.state.captcha === '') {
                this.setState({captchaError: true});
                return ;
            }
            this.props.onStepSubmit(_.omit(this.state, 'captchaError'));
        }
    }

    renderFields() {
        const lexique = Lexique[this.props.locale];
        return this.fields.map(v => (
            <div key={v.key} className="input-row">
                <div className="col-label">
                    <label htmlFor={`input_${v.key}`} dangerouslySetInnerHTML={{__html:`${lexique.step2[v.key].label} ${v.required ? lexique.global.required : ''}`}}></label>
                </div>
                <div className="col-input">
                    <input id={`input_${v.key}`} type={v.type} required={v.required} value={this.state[v.state]} onChange={e => this.handleInputChange(v.state, e.target.value)} placeholder={lexique.step2[v.key].placeholder} />
                </div>
            </div>
        ))
    }

    setCaptcha(v) {
        this.setState({captcha: v ? v : '', captchaError: false});
    }

    render() {
        const lexique = Lexique[this.props.locale];
        return (
            <section className="step-form" style={{width: `calc(100% / ${this.props.nbSteps})`}}>
                <h5>{lexique.step2.title}</h5>
                <form onSubmit={e=>this.controlForm(e)}>
                    { this.renderFields() }
                    <div className="input-row">
                        <div className="col-label"></div>
                        <div className={`col-input captcha-input${this.state.captchaError ? ' captcha-error' : ''}`}>
                            {env !== "dev" && <ReCaptcha
                                sitekey={conf.captchaToken}
                                lang={this.props.locale}
                                callback={v => this.setCaptcha(v)}
                                domid={this.props.captchadom} /> }
                        </div>
                    </div>
                    <div className="input-row row-controls">
                        <div className="col-label">
                            <span className="notice" dangerouslySetInnerHTML={{__html:lexique.global.mandatory}} />
                        </div>
                        <div className="col-input tar">
                            <span>{lexique.step2.tagline}</span>
                            <button type="submit">{lexique.step2.submit}</button>
                        </div>
                    </div>
                </form>
            </section>
        )
    }
}

export default ContactFormStep2;
