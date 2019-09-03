import React from 'react';
import {observer} from 'mobx-react'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            key: "",
            value: ""
        };

        this.handle_key = this.handle_key.bind(this);
        this.handle_value = this.handle_value.bind(this);
        this.handle_submit = this.handle_submit.bind(this);
    }

    handle_key(e) {
        this.setState({
            key: e.target.value
        })
    }

    handle_value(e) {
        this.setState({
            value: e.target.value
        })
    }

    handle_submit(e) {
    }

    render() {
        return (
            <form onSubmit={this.handle_submit}>
                <label>
                    Key:
                    <input type="text" value={this.state.key} onChange={this.handle_key}/>
                </label>
                <label>
                    Value:
                    <input type="text" value={this.state.value} onChange={this.handle_value}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default observer(App);
