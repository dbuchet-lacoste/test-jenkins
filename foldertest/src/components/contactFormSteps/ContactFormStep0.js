import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import _ from 'lodash';

import Lexique from '../../locales';
import { fields } from '../../config/fields';

import 'react-datepicker/dist/react-datepicker.css';
import 'moment/locale/fr';

class ContactFormStep0 extends Component {

    constructor(props) {
        super(props);
        this.lexique = Lexique[this.props.locale];

        this.state = { prefill_type: '' };

    }

    componentDidMount() {
        this.mapPropsToState();
    }

    mapPropsToState() {
        const ob = {};
        if (!this.props.initValues || !this.props.initValues.project) return;
        const {project} = this.props.initValues;
        if (project) {
            Object.keys(project).map(p => {
                ob[p] = (p === "date" && project[p] && project[p] !== "") ? moment(project[p]) : project[p];
                return null;
            })
        }
        this.setState(ob);
    }

    componentDidUpdate(prevProps) {
        if (prevProps === this.props) return;
        this.mapPropsToState();
    }

    controlForm(e) {
        if (e.target.checkValidity()) {
            e.preventDefault();
            const select = this.state.prefill_type === "" ? "conference" : this.state.prefill_type;
            const ob = _.find(fields, {value: select});

            const ret = {
                prefill_type: this.state.prefill_type,
                label: this.state.prefill_type === "" ? "" : ob.engine,
                [ob.field2.value]: this.state[ob.field2.value],
                [ob.field3.value]: this.state[ob.field3.value],
            }
            if (ret.date) ret.date = ret.date.format('YYYY-MM-DD');

            this.props.onStepSubmit({project: ret});
        }
    }

    prefillTypeChanged(v) {
        this.setState({prefill_type: v})
    }

    generateFields() {
        const lexique = this.lexique.step0;
        const select = this.state.prefill_type === "" ? "conference" : this.state.prefill_type;

        const ob = _.find(fields, {value: select});

        return (
        <div>
            <div className="input-row">
                <div className="col-label">
                    <label htmlFor={`input_${ob.field2.value}`}>{lexique[ob.field2.value].label}</label>
                </div>
                <div className="col-input">
                    { this.generateField(ob.field2) }
                </div>
            </div>
            <div className="input-row">
                <div className="col-label">
                    <label htmlFor={`input_${ob.field3.value}`}>{lexique[ob.field3.value].label}</label>
                </div>
                <div className="col-input">
                    { this.generateField(ob.field3) }
                </div>
            </div>
        </div>
    );
    }

    onChangeFieldHandler(field, value) {
        this.setState({
            [field] : value
        })
    }

    generateField(field) {
        const lexique = this.lexique.step0;

        switch (field.type) {
            case "text":
                return (
                    <div className="input-container">
                        { this.props.mode === "header" && field.value === "location" && <i className="fa fa-map-marker"></i> }
                        <input
                            onChange={e => this.onChangeFieldHandler(field.value, e.target.value)}
                            type="text"
                            id={`input_${field.value}`}
                            value={this.state[field.value] ? this.state[field.value] : ""}
                            placeholder={lexique[field.value].placeholder}
                            />
                    </div>
                );
            case "select":
                return (
                    <div className="select-container">
                        <select onChange={e => this.onChangeFieldHandler(field.value, e.target.value)} id={`input_${field.value}`} value={this.state[field.value] ? this.state[field.value] : ""}>
                            <option value="" disabled hidden>{lexique[field.value].placeholder}</option>
                            { field.options.map(o => (<option key={o} value={o}>{lexique[field.value].options[o]}</option>))}
                        </select>
                    </div>
                );
            case "date":
                return (
                    <div className="input-container">
                        { this.props.mode === "header" && <i className="fa fa-calendar-o"></i> }
                        <DatePicker
                        locale={this.props.locale}
                        onChange={d => this.onChangeFieldHandler(field.value, d)}
                        minDate={moment()}
                        dateFormat={this.lexique.global.dateDisplay}
                        selected={this.state[field.value] ? this.state[field.value] : ""}
                        placeholderText={lexique[field.value].placeholder} />
                    </div>
                )
            default:
                return null;
        }
    }

    generateCTANotFinalized() {
        if (this.props.mode !== "header") return null;
        const lexique = this.lexique;
        return (
            <div className="input-row container-cta-not-finalized">
                <div className="col-label">
                </div>
                <div className="col-input tar">
                    <button className="btn-as-link">{ lexique.header.notfinalized }</button>
                </div>
            </div>
        )
    }

    render() {
        const lexique = this.lexique;
        return (
            <section className="step-form" style={{width: `calc(100% / ${this.props.nbSteps})`}}>
                <h5>{lexique.step0.title}</h5>
                <form onSubmit={e=>this.controlForm(e)}>
                    <div className="input-row">
                        <div className="col-label">
                            <label htmlFor="prefill_type">{lexique.step0.prefill.label}</label>
                        </div>
                        <div className="col-input">
                            <div className="select-container">
                                <select onChange={e => this.prefillTypeChanged(e.target.value)} id="prefill_type" name="prefill_type" value={this.state.prefill_type}>
                                    <option value="" disabled hidden>{lexique.step0.prefill.placeholder}</option>
                                    {
                                        fields.map(v => (
                                            <option key={v.value} value={v.value}>{lexique.step0.prefill.options[v.value]}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    { this.generateFields() }
                    <div className="input-row row-controls">
                        <div className="col-label">

                        </div>
                        <div className="col-input tar">
                            <button type="submit">{this.props.mode === "header" ? lexique.header.submit : lexique.step1.submit} {this.props.mode !== "header" && <i className="fa fa-angle-right"></i> }</button>
                        </div>
                    </div>
                    { this.generateCTANotFinalized() }
                </form>
            </section>
        )
    }
}

export default ContactFormStep0;
