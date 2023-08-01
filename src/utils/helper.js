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

export const policiesFarmater = (policies) => {
  var farmatedPolicies = [];
  for (let i = 0; i < policies.length; i++) {
    var obj = {
      id: policies[i].id,
      isLongPress: false,
      width: 85,
      padding: 2,
      isShow: true,
      ques: policies[i].usagePolicyQuestion,
      ans: [policies[i].usagePolicyResponse],
      languageCode: policies[i].languageCode,
      isActive: policies[i].isActive,
      isDeleted: policies[i].isDeleted,
      createdAt: policies[i].createdAt,
      updatedAt: policies[i].updatedAt,
    };
    farmatedPolicies.push(obj);
  }
  return farmatedPolicies;
};


export function generateUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export const orderFarmater = (orders) => {
  console.log("\n\n\n farmated ... start ", orders);
  var farmaterOrders = [];
  for (let i = 0; i < orders.length; i++) {
    var obj = {
      isLongPress: false,
      width: 85,
      padding: 2,
      opacity: 0.99,
    };
    var finalObj = Object.assign({}, obj, orders[i]);
    farmaterOrders.push(finalObj);
  }
  console.log("\n\n\n\n ==> farmated Orders : ", farmaterOrders);
};