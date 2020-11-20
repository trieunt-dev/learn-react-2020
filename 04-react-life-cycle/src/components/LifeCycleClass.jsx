import React, { PureComponent } from 'react';
import DisplayItem from './DisplayItem';

export default class LifeCycleClass extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            display: false,
        };
    }

    // componentDidUpdate() {
    //     console.log('2. componentDidUpdate() running');
    // }

    render() {
        console.log('1. Render running');
        return (
            <div>
                <h1>LifeCycleClass: {this.state.counter}</h1>

                {this.state.display && <DisplayItem />}
                <button
                    onClick={() => {
                        this.setState({
                            counter: this.state.counter + 1,
                        });
                    }}
                >
                    Click counter
                </button>

                <button
                    onClick={() => {
                        this.setState({
                            display: !this.state.display,
                        });
                    }}
                >
                    Display
                </button>
            </div>
        );
    }
}
