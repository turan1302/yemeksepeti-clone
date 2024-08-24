import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";
import { inject, observer } from "mobx-react";
@inject("FavouriteStore")
@observer

export default class TopMenu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active: this.props.FavouriteStore.activeMenu
    };
  }

  changeMenu = (menu)=>{
    this.props.FavouriteStore.changeActiveMenu(menu);
    this.setState({
      active : menu
    })
  }

  render() {
    const { active } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.changeMenu("restoran")} style={styles.button_area}>
          <View style={[{ alignItems: "center" }, (active === "restoran") ? styles.active_button : {}]}>
            <Text style={styles.button_text}>Restoranlar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.changeMenu("market")} style={styles.button_area}>
          <View style={[{ alignItems: "center" }, (active === "market") ? styles.active_button : {}]}>
            <Text style={styles.button_text}>Marketler</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
