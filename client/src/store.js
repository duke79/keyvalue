import {observable, action} from "mobx";
import axios from "axios";

export const keyvalue_url = "http://localhost:5555";

class Store {
    pairs = observable.map({});
    user = observable.box(null)

    set_key = action("set_key", function (key, value) {
        const url = `${keyvalue_url}/set?key=${key}&value=${value}&user=${store.user.get()}`;
        axios
            .get(url)
            .then(res => {
                console.log(res.data);
                this.pairs.set(key, res.data)
            });

        return this.pairs.get(key);
    });

    get_key = action("get_key", function (key) {
        const url = `${keyvalue_url}/get?key=${key}&user=${store.user.get()}`;
        axios
            .get(url)
            .then(res => {
                if(res.status == 200) {
                    this.pairs.set(key, res.data)
                } else {
                    this.pairs.set(key, null)
                }
            });

        return this.pairs.get(key);
    });
}

const store = new Store();
export default store;
