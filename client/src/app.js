import React from 'react';
import { observer } from 'mobx-react'
import store from './store'
import styled from 'styled-components'
import GetKey from "./components/get_key";
import SetKey from "./components/set_key";
import UserLogin from "./components/user_login"
import UserLogout from "./components/user_logout"
import 'bootstrap/dist/css/bootstrap.css';

let S = {};
S.Body = styled.div`
  background: #ffffff none repeat scroll 0 0;
  border-radius: 2px;
  margin: 10px auto 30px;
  max-width: 38%;
  padding: 50px 70px 70px 71px;
`;

class App extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        console.log(store.user);
        if (null !== store.user.get()) {
            return (
                <S.Body>
                    <UserLogout/>
                    <GetKey />
                    <SetKey />
                </S.Body>
            );
        } else {
            return (
                <S.Body>
                    <UserLogin />
                </S.Body>
            )
        }
    }
}

export default observer(App);
