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


class UserLogout extends React.Component {
    constructor(props) {
        super(props);

        this.on_submit = this.on_submit.bind(this);
    }

    on_submit(e) {
        store.user.set(null);
    }

    render() {
        // console.log("user");
        // console.log(store.user.get());
        // if(null == store.user) store.user = "";
        return (
            <S.Form>
                <S.Text>{store.user.get()}</S.Text>
                <Button type="submit" onClick={this.on_submit}>logout</Button>
            </S.Form>
        )
    }
}

export default observer(UserLogout);