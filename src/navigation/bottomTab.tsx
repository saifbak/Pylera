import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/app/components/home';
import { Image, TouchableOpacity, View } from 'react-native';
import { scale, vs } from 'react-native-size-matters';
import { COLORS, ICONS } from '../shared/utils/theme';
import Discover from '../screens/app/components/discover';
import Medication from '../screens/app/components/medication';
import Treatment from '../screens/app/components/treatment';
import Dose from '../screens/app/components/dose';
import { createStackNavigator } from '@react-navigation/stack';
import Track from '../screens/app/components/track';

const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }: any) {
    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route: { key: string | number; name: any; params: any; }, index: any) => {
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
                    <TouchableOpacity
                        key={index.toString()}
                        activeOpacity={0.8}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1, backgroundColor: COLORS.primary, height: vs(55), alignItems: "center", justifyContent: "center" }}
                    >
                        <Image
                            style={{ width: scale(22), height: vs(22), resizeMode: "contain" }}
                            source={label === 'Home' ? ICONS.home : label === "Discover" ? ICONS.discover : label === "Medication" ? ICONS.dose : label === "Treatment" ? ICONS.treatment : label === "DoseScreens" ? ICONS.medication : ICONS.home}
                        />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

type IDoseScreenStacksProps = {
    Dose: undefined;
    Track: undefined;
}
const horizontalAnimation = {
    headerShown: false,
    // gestureDirection: 'horizontal',
    cardStyleInterpolator: ({ current, layouts }: any) => {
        return {
            cardStyle: {
                transform: [
                    {
                        translateX: current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.width, 0],
                        }),
                    },
                ],
            },
        };
    },
};

const DosetackScreens = createStackNavigator<IDoseScreenStacksProps>();
const DoseScreens = () => {
    return (
        <DosetackScreens.Navigator
            initialRouteName='Dose'
            screenOptions={horizontalAnimation}>
            <DosetackScreens.Screen name="Dose" component={Dose} />
            <DosetackScreens.Screen name="Track" component={Track} />
        </DosetackScreens.Navigator>
    )
}

function BottomTabs() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, }} tabBar={props => <MyTabBar {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Discover" component={Discover} />
            <Tab.Screen name="Medication" component={Medication} />
            <Tab.Screen name="Treatment" component={Treatment} />
            <Tab.Screen name="DoseScreens" component={DoseScreens} />
        </Tab.Navigator>
    );
}

export default BottomTabs;