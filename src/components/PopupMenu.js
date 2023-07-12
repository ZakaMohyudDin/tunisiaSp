import * as React from "react";
import { StyleSheet, Text } from "react-native";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from "react-native-popup-menu";
import { normalize } from "react-native-elements";

const PopupMenu = ({ isOppened }) => {
  const { SlideInMenu } = renderers;
  return (
    <Menu
      opened={isOppened}
      backHandler={true}
      style={{ paddigTop: normalize(40) }}
      onSelect={(value) => alert(`Selected number: ${value}`)}
    >
      <MenuTrigger />
      <MenuOptions>
        <MenuOption value={1} text="One" />
        <MenuOption value={2}>
          <Text style={{ color: "red" }}>Two</Text>
        </MenuOption>
        <MenuOption value={3} disabled={true} text="Three" />
      </MenuOptions>
    </Menu>
  );
};
export default PopupMenu;

const styles = StyleSheet.create({});
