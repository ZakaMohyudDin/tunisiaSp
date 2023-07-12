import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import moment from "moment";

export const normalize = (percent) => {
  var value = (windowWidth / 100) * percent;
  return value;
};

export const validateEmail = (email) => {
  filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (filter.test(email)) {
    // Yay! valid
    return true;
  } else {
    return false;
  }
};

export const notificationFarmater = (notifications) => {
  const endOfWeek = moment().endOf("week");
  const currentDate = moment(); // Get the current date
  const sevenDaysAgo = currentDate.subtract(7, "days");

  var newNotification = notifications.filter((obj) =>
    moment().isSame(obj.createdAt, "day")
  );
  var earliarNotification = notifications.filter((obj) =>
    moment().isSame(obj.createdAt, "day")
  );

  var weekNotification = notifications.filter((item) =>
    moment(item.createdAt).isBetween(sevenDaysAgo, endOfWeek, null, "[]")
  );

  var notification = [
    {
      isLongPress: false,
      width: 85,
      padding: 2,
      heading: "",
      isShow: true,
      id: "0",
      result: newNotification,
    },
    {
      isLongPress: false,
      width: 85,
      padding: 2,
      heading: "Earlier",
      isShow: true,
      id: "1",
      result: earliarNotification,
    },
    {
      isLongPress: false,
      width: 85,
      padding: 2,
      heading: "This Week",
      isShow: true,
      id: "2",
      result: weekNotification,
    },
  ];
  console.log("\n\n\n\n ==> todayNotification : ", notification[0].result);
  return notification;
};
