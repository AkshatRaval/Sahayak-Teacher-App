import TabBar from '@/components/TabBar';
import { Tabs } from 'expo-router';
import { House, LibraryBig, TestTubeDiagonal, UserRound, WandSparkles, } from 'lucide-react-native';
import React from 'react';



const _layout = () => {
    return (
        <Tabs 
            tabBar={props => <TabBar {...props} />}
        >
            <Tabs.Screen name='index' options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ color, size }) => (<House size={28} color="black" />)
            }} />
            <Tabs.Screen name='Generate' options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ color, size }) => (<WandSparkles size={28} color="black" />)
            }} />
            <Tabs.Screen name='Assess' options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ color, size }) => (<TestTubeDiagonal size={28} color="black" />)
            }} />
            <Tabs.Screen name='Library' options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ color, size }) => (<LibraryBig size={28} color="black" />)
            }} />
            <Tabs.Screen name='Profile' options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ color, size }) => (<UserRound size={28} color="black" />)
            }} />
        </Tabs>
    )
}

export default _layout