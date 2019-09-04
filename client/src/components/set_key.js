import React from 'react';
import {observer} from 'mobx-react'
import store from '../store'
import styled from 'styled-components'
import {Button, FormControl, InputGroup} from 'react-bootstrap';

let S = {};

S.Form = styled.div`
  display: grid;
`;

S.Text = styled.text`
  padding: 10px;
  margin-top: 10px;
  text-align: center;
  box-shadow: 0px 2px 15px 0px #000000;
`;

class SetKey extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            key: "",
            value: ""
        };

        this.handle_key = this.handle_key.bind(this);
        this.handle_value = this.handle_value.bind(this);
        this.on_set = this.on_set.bind(this);
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

    render() {
        let store_value = "";
        if(this.state.key.length > 0) {
            store_value = store.pairs.get(this.state.key);
            if (null === store_value) {
                store_value = "Something is not working!"
            }
        }

        return (
            <S.Form>
                <InputGroup type="text" value={this.state.key} onChange={this.handle_key}>
                    <FormControl
                        placeholder="Key"
                        aria-label="Key"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup type="text" value={this.state.value} onChange={this.handle_value}>
                    <FormControl
                        placeholder="Value"
                        aria-label="Value"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <Button  type="submit" onClick={this.on_set}>set</Button>
                {store_value ? <S.Text>{store_value}</S.Text> : <div/>}
            </S.Form>
        );
    }
}

export default observer(SetKey);
