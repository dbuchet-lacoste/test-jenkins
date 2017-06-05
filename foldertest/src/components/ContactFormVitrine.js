// @flow

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Cookies from 'js-cookie';

import { setTagOptions, tagEvent } from '@brandandcelebrities/atags';

import { conf, env } from '../config';
import Lexique from '../locales';

import '../css/form-contact-vitrine.css';

import Breadcrumb from './Breadcrumb';
import ContactFormStep0 from './contactFormSteps/ContactFormStep0';
import ContactFormStep1 from './contactFormSteps/ContactFormStep1';
import ContactFormStep2 from './contactFormSteps/ContactFormStep2';
import ContactFormConfirmation from './contactFormSteps/ContactFormConfirmation';

class ContactFormVitrine extends Component {

    constructor(props) {
        super(props);
        this.state = { currentStep: 0, _h:0, isLoading: false, showHeader: this.props.finder }
        this.formDatas = {};
        this.conf = {
            nbSteps: this.props.mode === "full" ? 3 : 2,
        }

        this.TAG_CATEGORY = `formulaire contact - ${props.type}`;
    }

    componentDidMount() {
        // TAG
        setTagOptions({
                    dev: env === "dev",
                    datalayer: true
                });
        //tagEvent(this.TAG_CATEGORY, 'Init', 'Affichage formulaire de contact');

        this.jumpToStep(0);
    }

    dispatchHeightToWordpress(h) {
        if (this.props.type === "FH") {
            window.dispatchEvent(new CustomEvent(window.EVENT_HEADER_FORM_HEIGHT_CHANGE, {detail: {h: h}}));
        }
    }

    jumpToStep(i) {
        const dom = this.props.finder ? (i+1) : i;
        const currentDom = ReactDOM.findDOMNode(this).parentNode;
        const _h = currentDom.getElementsByClassName('step-form')[dom].clientHeight;
        this.dispatchHeightToWordpress(_h);
        this.setState({currentStep: i, _h:_h, isLoading: false});
    }

    onStepSubmit(datas) {
        this.formDatas = Object.assign({}, this.formDatas, datas);

        if (this.state.currentStep === (this.conf.nbSteps - 1)) {
            this.sendForm();
        }
        else {
            // TAG
            const stepNumber = this.state.currentStep + 1;
            const niceNumber = stepNumber + 1;
            tagEvent(this.TAG_CATEGORY, `Step ${niceNumber}`, `Passage à l'étape ${niceNumber}`);

            this.jumpToStep(stepNumber);

            if (niceNumber === 3 && this.props.type.toUpperCase() === "FCC") {
                window.BAndCUtils.unfixContactCelebrity();
            }
        }
        if (this.state.showHeader && this.props.type === "FH") {
            // dispatch scroll to worpdress
            window.dispatchEvent(new Event(window.EVENT_HEADER_FINDER_DEPLOY))
        }
        this.setState({showHeader: false});
    }

    sendForm() {
        // Form is complete > send it to app
        tagEvent(this.TAG_CATEGORY, 'form completion', 'Envoi du formulaire');
        this.setState({isLoading: true});

        const toSend = {
            form: Object.assign(    {},
                                    _.omit(this.formDatas, ['captcha', 'project']),
                                    {
                                        locale: this.props.locale,
                                        referer: window.location.href,
                                        label:this.props.type.toLowerCase(),
                                        project: Object.assign({}, _.omit(this.formDatas.project, ['prefill_type'])),
                                    }
                                ),
            'g-recaptcha-response': this.formDatas.captcha,
            marketoToken: Cookies.get('_mkto_trk')
        };

        fetch(conf.api, {
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify(toSend),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(r => {
            if (r.ok) {
                tagEvent(this.TAG_CATEGORY, 'Success', 'Formulaire envoyé', false);
                this.jumpToStep(this.state.currentStep + 1);
            }
            else this.catchFormError(r.status);
        } )
        .catch(e => this.catchFormError(e));
    }

    catchFormError(e) {
        this.setState({isLoading: false});
        const lexique = Lexique[this.props.locale];
        tagEvent(this.TAG_CATEGORY, 'Error', `Erreur lors de l'envoi du formulaire`, false);
        window.alert(lexique.global.errorOnSubmit); // Quick & Dirty

    }

    printHeaderFinder() {
        if (!this.props.finder) return null;

        return (
            <div className="header-finder">
                <ContactFormStep0
                    onStepSubmit={d=>this.onStepSubmit(d)}
                    locale={this.props.locale}
                    initValues={this.formDatas}
                    mode="header"
                    nbSteps={1} />
            </div>
        );
    }

    clickCloseHandler() {
        this.setState({showHeader: true});
        this.jumpToStep(0);
        this.dispatchHeightToWordpress(0);
    }

    render() {

        const hSteps = this.state.showHeader ? 0 : this.state._h + (this.props.showBreadcrumb ? 200 : 50);
        const nbSteps = this.props.mode === "full" ? 4 : 3;

        return (
            <div className={`vitrine-form vitrine-form-${this.props.type.toUpperCase()}`}>
                { this.printHeaderFinder() }
                <div className={`form-with-steps ${hSteps===0 ? 'reployed' : 'deployed'}`} style={{maxHeight: hSteps}}>
                    <div className={`loader-overlay${this.state.isLoading ? ' display' : ''}`}>
                        <div className="img-container">
                            <img src={conf.loaderUrl} alt="" />
                        </div>
                    </div>
                    {
                        this.props.finder && (
                            <div className="close-container" onClick={ e => this.clickCloseHandler()}>
                                <img src="https://brandandcelebrities.com/wp-content/themes/brandandcelebrities/img/close.svg" alt="" />
                            </div>
                        )
                    }
                    {   this.props.showBreadcrumb &&
                        <Breadcrumb
                            complete={this.state.currentStep >= this.conf.nbSteps}
                            goBack={true}
                            goNext={false}
                            steps={this.conf.nbSteps}
                            active={this.state.currentStep}
                            onButtonClick={i => this.jumpToStep(i)} />
                    }
                    <div className="steps-container" style={{maxHeight: this.state._h}}>
                        <div className="steps-wrapper" style={{
                            transform: `translateX(-${this.state.currentStep*(100/nbSteps)}%)`,
                            width: `${(nbSteps*100)}%`
                        }}>
                            {
                                this.props.mode === "full" &&
                                <ContactFormStep0 onStepSubmit={d=>this.onStepSubmit(d)} locale={this.props.locale} initValues={this.formDatas} nbSteps={nbSteps} />
                            }
                            <ContactFormStep1 mode={this.props.mode} onStepSubmit={d=>this.onStepSubmit(d)} locale={this.props.locale} nbSteps={nbSteps} />
                            <ContactFormStep2 onStepSubmit={d=>this.onStepSubmit(d)} locale={this.props.locale} nbSteps={nbSteps} captchadom={this.props.type} />
                            <ContactFormConfirmation locale={this.props.locale} nbSteps={nbSteps} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactFormVitrine;
