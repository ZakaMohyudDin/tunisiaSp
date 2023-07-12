import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

export const multiThemeColor = () => {
  const { theme } = useContext(ThemeContext);

  if (theme == "light") {
    return {
      main_background: "#F5F8F8",
      sub_background: "#FFFFFF",
      primary_color: "#7B3DB3",
      secondary_color: "#ECE3FD",
      dark_gray: "#434343",
      light1_gray: "#A5A5A9",
      light2_gray: "#EBEBEB",
      online_color: "#43A721",
      third_color: "#DAA2FF",
      red: "red",
      blue: "blue",
      white: "#fff",
      black: "#000",
    };
  } else {
    return {
      main_background: "#000000",
      sub_background: "#161617",
      primary_color: "#7B3DB3",
      secondary_color: "#ECE3FD",
      dark_gray: "#FFFFFF",
      light1_gray: "#EBEBEB",
      light2_gray: "#EBEBEB",
      online_color: "#43A721",
      third_color: "#DAA2FF",
      red: "red",
      blue: "blue",
      white: "#000",
      black: "#fff",
    };
  }
};
