import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";

export default function CustomBottomTabDesign({
  state,
  descriptors,
  navigation,
}) {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            }}
            style={[
              styles.tab,
              { backgroundColor: isFocused ? "white" : "transparent" },
            ]}
          >
            <Text style={{ color: isFocused ? "black" : "gray" }}>
              {options.title || route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    borderTopWidth: 0, // Remove the top border
  },
  tab: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
