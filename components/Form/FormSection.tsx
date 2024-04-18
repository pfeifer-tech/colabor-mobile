import { Pressable, Text, View } from "react-native";
import {useMemo} from "react";
import DynamicComponents from "../DynamicComponents";

export default function FormSection({section, inputs, form, updateForm, page, nextPage, requiredFields, pageCount, submitForm}) {
    const isLastPage = useMemo(() => page+1 === pageCount, [page, pageCount])

    const isFinished = useMemo(() => {
        return !isLastPage||(!requiredFields.length&&Object.keys(form).length)||(requiredFields.length&&requiredFields.map(({name}) => {
            return !!name.split('.').reduce((a,b) => a?a[b]:undefined, form)
        }).reduce((a, b) => a&&b)&&isLastPage)
    }, [form, isLastPage])

    return <View>
        <Text style={{marginLeft: 12, fontSize: 18, fontWeight: '500', marginBottom: 12}}>{section}</Text>
        {inputs.map(({inputType, ...props}, index) => {
            return <DynamicComponents key={index} type={inputType} props={{form, updateForm, ...props}} />
        })}
        <Pressable
            onPress={isLastPage?submitForm:nextPage}
            disabled={!isFinished}
            style={{backgroundColor: isFinished?'#346fe1':'#d3d3d3', padding: 12, margin: 12, alignItems: 'center', justifyContent: 'center', borderRadius: 8}}
        >
            <Text style={{color: '#fff', fontWeight: '600', fontSize: 16}}>{isLastPage?'Submit':'Next'}</Text>
        </Pressable>
    </View>
}