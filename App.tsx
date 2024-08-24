import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Routes from "./src/routes";
import { Provider } from "mobx-react";
import Store from "./src/store";

export default class App extends Component {
  render() {
    return (
      <Provider {...Store}>
        <Routes/>
      </Provider>
    )
  }
}
