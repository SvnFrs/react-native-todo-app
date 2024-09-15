import React from "react";
import { Tabs } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen options={{headerShown: false,
                tabBarIcon: ({ color, focused}) => (
                    <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color}/>
                )
            }} name="(home)"/>
        </Tabs>
    )
}