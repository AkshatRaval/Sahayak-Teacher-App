import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PlatformPressable, Text } from '@react-navigation/elements';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { House, LibraryBig, TestTubeDiagonal, UserRound, WandSparkles } from 'lucide-react-native';
import { StyleSheet, View } from 'react-native';

function TabBar({ state, descriptors, navigation }) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  const greyColor = "#737373"
  const primaryColor = "#0891b2"
  const bgPrimaryColor = "#0891b210"

  const icons = {
    index: (props) => <House size={26} color={greyColor} {...props} />,
    Generate: (props) => <WandSparkles size={26} color={greyColor} {...props} />,
    Assess: (props) => <TestTubeDiagonal size={26} color={greyColor} {...props} />,
    Library: (props) => <LibraryBig size={26} color={greyColor} {...props} />,
    Profile: (props) => <UserRound size={26} color={greyColor} {...props} />
  }

  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.name}
            style={styles.tabbarItems}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Text style={{ color: isFocused ? colors.primary : colors.text, backgroundColor: isFocused ? bgPrimaryColor : "white", padding: 10, borderRadius: 50 }}>
              {
                icons[route.name]({
                  color: isFocused ? primaryColor : greyColor
                })
              }
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    position: 'absolute',
    bottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    borderCurve: 'continuous',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    borderColor: "#737373",
    borderWidth: 0.2
  },
  tabbarItems: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

})

const MyTabs = createBottomTabNavigator({
  tabBar: (props) => <TabBar {...props} />,
});

export default TabBar