import { createElement } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from "expo-router";
import { View, Text, Image } from "react-native";

import PhoneClickable from "./PhoneClickable";
import Accordion from "./Accordion";
import ContactMethod from "./ContactMethod";

export default function DynamicComponents({type, props, children}, index) {
    const renderables = {
        "PhoneClickable": PhoneClickable,
        "MaterialIcons": MaterialIcons,
        "ContactMethod": ContactMethod,
        "Accordion": Accordion,
        "Link": Link,
        "View": View,
        "Text": Text,
    }

    if(typeof children === 'string') {
        return createElement(renderables[type], props||null, children)
    }
    if(Array.isArray(children)) {
        return createElement(renderables[type], props||null, children.map((child, index) => <DynamicComponents {...child} key={index} />))
    }
    return createElement(renderables[type], props||null, children?<DynamicComponents {...children} />:null)
}