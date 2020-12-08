import React, { useContext, createContext } from 'react';

import { makeObservable, runInAction, configure, /* makeAutoObservable */ } from 'mobx';

import {
  observable, // наблюдаемое
  computed, // вычисляемое
  action, // действие, мутация
  reaction, // реакция
} from "mobx"

// https://mobx.js.org/configuration.html

configure({
  enforceActions: 'observed',
});

const str = () => Math.random().toString(36).substring(7);
const sleep = (timeout = 1000) => new Promise((res) => setTimeout(res, timeout));

/**
 * Примером реакции является observer из mobx-react
 */
export class UserStore {

  followers = observable([
    "A",
    "B",
    "C"
  ]);

  info = observable({
    email: 'tripolskypetr@gmail.com',
  }, {
    email: observable, // тут объявляется "типизация"
  });

  firstName = 'Sergey';
  age = 30;

  get nickName() {
    return `${this.firstName}-${this.age}`;
  }

  incrementAge = () => { this.age++; }

  decrementAge = () => { this.age--; }

  follow = () => this.followers.push(str())

  updateEmail = () => this.info.email = 'b00x@ya.ru';

  loadFollowers = async () => {
    await sleep();
    runInAction(() => {
      this.followers.clear();
      this.followers.push('A new user from http(fake)');
    });
  };

  constructor() { 
    makeObservable(this, {
      firstName: observable,
      age: observable,
      nickName: computed,
      followers: observable,
      incrementAge: action('Increment an age'),
      decrementAge: action('Decrement an age'),
      follow: action('Add new follower'),
      updateEmail: action('Set new email'),
      //loadFollowers: action.bound, // Tip: prefer arrow functions over
    })
  }
  
};

// decorate выпилен
// https://stackoverflow.com/a/64441295/7388307

const user = new UserStore();

const UserContext = createContext<UserStore>(user);

export const UserProvider = ({children, mock = null}) => (
  <UserContext.Provider value={mock || user}>
    {children}
  </UserContext.Provider>
);

export const withUser = (Component) => (props) => {
  const user = useContext(UserContext);
  return (
    <Component {...{...props, user}}>
      {props.children}
    </Component>
  );
}

export default withUser;
