import React from 'react';
import { observer } from 'mobx-react'
import store from '../store'
import styled from 'styled-components'
import { InputGroup, Button, FormControl } from 'react-bootstrap';

let S = {};

S.Form = styled.div`
  display: grid;
  margin-bottom: 50px;
`;

S.Text = styled.text`
  padding: 10px;
  margin-top: 10px;
  text-align: center;
  box-shadow: 0px 2px 15px 0px #000000;
`;


class UserLogin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            "user": ""
        }

        this.on_change_user = this.on_change_user.bind(this);
        this.on_submit = this.on_submit.bind(this);
    }

    on_change_user(e) {
        this.state.user = e.target.value;
    }

    on_submit(e) {
        // sessionStorage.setItem("user", this.state.user);
        store.user.set(this.state.user);
        console.log("set_user");
        console.log(store.user.value);
    }

    render() {
        console.log("user_loing");
        return (
            <S.Form>
                <S.Text>Enter user name:</S.Text>
                <InputGroup type="text" value={this.state.user} onChange={this.on_change_user} placeholder="username">
                    <FormControl
                        placeholder="User"
                        aria-label="User"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <Button type="submit" onClick={this.on_submit}>submit</Button>
            </S.Form>
        )
    }
}

export default observer(UserLogin);