import React, { Component } from 'react';

class Breadcrumb extends Component {

    onButtonClick(i) {
        // Complete, no more action
        if (this.props.complete) return;

        // If we try to go back and we are not authorized
        if (!this.props.goBack && i < this.props.active) return;

        // If we try to go next and we are not authorized
        if (!this.props.goNext && i > this.props.active) return;

        // If on current, do nothing
        if (i === this.props.active) return;

        // Alright, we dispatch !
        this.props.onButtonClick(i);
    }

    render() {
        const active = this.props.active >= this.props.steps ? this.props.steps - 1 : this.props.active;
        return (
            <div className={`breadcrumb${this.props.complete ? ' complete' : ''}`}>
                <span className="progress" style={{width: (active*(80+30))}}></span>
                <ul>
                    {Array(this.props.steps).fill(null).map((v, i) => <li key={i} className={`breadcrumb-step${this.props.active >= i ? ' active' : ''}${this.props.active === i ? ' current' : ''}`}><button onClick={e => this.onButtonClick(i)}>{(i+1)}</button></li>)}
                </ul>
            </div>
        );
    }
}

export default Breadcrumb;
