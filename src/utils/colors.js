// export const colors = {
//   black: "#000",
//   white: "#fff",
//   paragraphClr: "#999",
//   subHeading: "#555",
//   sliderActiveDot: "#0A327A",
//   sliderInActiveDot: "#A5A5A9",
//   gradiant2: "#9BC0F2",
//   gradiant1: "#163F84",
//   inputBg: "#F2F2F2",
//   btnLoginGmail: "#C74137",
//   btnLoginInsta: "#3A44D4",
//   highlightColor: "#00317F",
//   inActive: "#575757",
//   flatListBg: "#F5F8F8",
//   red: "red",
//   subCategoryBG: "#F0F0F0",
//   transparent: "rgba(92, 92, 92, 0.9)",
//   checkedColor: "#317BE7",
//   spBg: "#F6F2FE",
//   stepBtnBG: "#Efcffcff"
// };

const themeValue = {
  val : true
};
export const setThemeValue = (val) => {
  themeValue.val = val
  // console.log("\n\n Value", themeValue)
}

export const getThemeValue = () => {
  return themeValue.val
}

export const colorsFn = () => {
  // console.log("\n\n inside value", getThemeValue())
  if (true) {
    return {
      black: '#000',
      white: '#fff',
      paragraphClr: '#999',
      subHeading: '#555',
      sliderActiveDot: '#0A327A',
      sliderInActiveDot: '#A5A5A9',
      gradiant2: '#9BC0F2',
      gradiant1: '#7144AE',
      inputBg: '#F2F2F2',
      btnLoginGmail: '#C74137',
      btnLoginInsta: '#3A44D4',
      highlightColor: '#00317F',
      inActive: '#575757',
      flatListBg: '#F5F8F8',
      red: 'red',
      subCategoryBG: '#F0F0F0',
      transparent: 'rgba(92, 92, 92, 0.9)',
      checkedColor: '#317BE7',
      spBg: '#F6F2FE',
      stepBtnBG: '#Efcffcff',
      red: 'red',
      callBg: '#090706',
      audioBtn: '#181818',

      // textByClient: '#444444',
      main_background: '#F5F8F8',
      sub_background: '#FFFFFF',
      primary_color: "#7B3DB3",
      secondary_color: "#ECE3FD",
      dark_gray : "#434343",
      light1_gray: "#A5A5A9",
      light2_gray: "#EBEBEB",
      online_color: "#43A721",
      third_color: "#DAA2FF",
      red: 'red',
      blue: 'blue',
      green: 'green',
    };
  } else {
    return {
      textByClient: '#444444',

      black: '#fff',
      white: '#000',
      paragraphClr: '#999',
      subHeading: '#ddd',
      sliderActiveDot: '#0A327A',
      sliderInActiveDot: '#A5A5A9',
      gradiant2: '#9BC0F2',
      gradiant1: '#163F84',
      inputBg: '#F2F2F2',
      btnLoginGmail: '#C74137',
      btnLoginInsta: '#3A44D4',
      highlightColor: '#00317F',
      inActive: '#575757',
      flatListBg: '#F5F8F8',
      red: 'red',
      subCategoryBG: '#F0F0F0',
      transparent: 'rgba(92, 92, 92, 0.9)',
      checkedColor: '#317BE7',
      spBg: '#000000ee',
      stepBtnBG: '#Efcffcff',
    };
  }
};

export const colors = colorsFn();
