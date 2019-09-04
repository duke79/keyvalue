import React from 'react';
import {observer} from 'mobx-react'
import store from './store'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            key: "",
            value: ""
        };

        this.handle_key = this.handle_key.bind(this);
        this.handle_value = this.handle_value.bind(this);
        this.on_set = this.on_set.bind(this);
        this.on_get = this.on_get.bind(this);
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

    on_set(e) {
        store.set_key(this.state.key, this.state.value);
    }

    on_get(e) {
        store.get_key(this.state.key);
    }

    render() {
        let store_value = store.pairs.get(this.state.key);
        if (null === store_value) {
            store_value = "Key not found!"
        }

        return (
            <div>
                <div>
                    <label>
                        Key:
                        <input type="text" value={this.state.key} onChange={this.handle_key}/>
                    </label>
                    <label>
                        Value:
                        <input type="text" value={this.state.value} onChange={this.handle_value}/>
                    </label>
                    <input type="submit" value="set" onClick={this.on_set}/>
                </div>

                <div>
                    <label>
                        Key:
                        <input type="text" value={this.state.key} onChange={this.handle_key}/>
                    </label>
                    <input type="submit" value="get" onClick={this.on_get}/>
                    {store_value}
                </div>

            </div>
        );
    }
}

export default observer(App);
