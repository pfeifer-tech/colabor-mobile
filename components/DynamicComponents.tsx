import { createElement, ReactNode } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from "expo-router";
import { View, Text, Image, TextInput, Pressable } from "react-native";

import PhoneClickable from "./PhoneClickable";
import Accordion from "./Accordion";
import ContactMethod from "./ContactMethod";
import FormTextInput from "./Form/FormTextInput";
import FormDateInput from "./Form/FormDateInput";

export default function DynamicComponents({type, props, children=<></>}: {type: string, props: any, children?: ReactNode}, index) {
    const renderables = {
        "PhoneClickable": PhoneClickable,
        "MaterialIcons": MaterialIcons,
        "ContactMethod": ContactMethod,
        "Accordion": Accordion,
        "Link": Link,
        "View": View,
        "Text": Text,
        "FormTextInput": FormTextInput,
        "FormDateInput": FormDateInput,
        "TextInput": TextInput,
        "Pressable": Pressable
    }

    if(typeof children === 'string') {
        if(!type) {
            return <Text>{children}</Text>
        }
        return createElement(renderables[type], props||null, children)
    }
    if(Array.isArray(children)) {
        if(!type) {
            return <>
                {children.map((child, index) => <DynamicComponents {...child} key={index} />)}
            </>
        }
        return createElement(renderables[type], props||null, children.map((child, index) => <DynamicComponents {...child} key={index} />))
    }
    if(!type) {
        return <>{children}</>
    }
    return createElement(renderables[type], props||null, children)
}