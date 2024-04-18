import { useEffect, useState, useRef } from "react"
import { View, Text, Pressable } from "react-native";
import FormSection from "./FormSection";
import PagerView from 'react-native-pager-view';
import { useForm } from "../../hooks/useForm";

export function GeneratedForm({data, url}: {data?: any, url?: string}) {
    const [dynamicData, setDynamicData] = useState(null)
    const {form, updateForm} = useForm()
    const pageRef = useRef(null)
    const [page, setPage] = useState(0)

    function submitForm() {
        if(url) {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(form)
            })
            .then(async res => {
                return await res.json()
            })
            .then(console.log)
            return
        }
        console.log('No URL provided', form)
    }

    useEffect(() => {
        if(!!data) {
            setDynamicData(data)
        }
        if(!!url) {
            fetch(url)
            .then(async res => {
                const responseData = await res.json()
                setDynamicData({
                    type: "View", 
                    props: {style: {width: '100%'}}, 
                    children: [
                        {
                            type: "View", 
                            children: [
                            {type: "Text", props: {style: {marginLeft: 12, fontSize: 18, fontWeight: '500'}}, children: "Contact Info"}
                            ]
                        },
                    ]
                })
            })
            .then(console.log)
        }
    }, [])

    return <View style={{width: '100%', flexDirection: 'column'}}>
        <View style={{width: '100%', flexDirection: 'row', justifyContent: 'center'}}>
            {dynamicData&&dynamicData.map((x, index) => <Pressable key={index}
                style={{paddingHorizontal: 8, height: 48, alignItems: 'center', flexDirection: 'row'}}
                onPress={()=>pageRef.current.setPage(index)}
            >
                <View style={{borderRadius: 20, width: page===index?12:8, height: page===index?12:8, backgroundColor: page===index?'#a7a7a7':'#ccc'}}></View>
            </Pressable>)}
        </View>
        <PagerView 
            style={{flexDirection: 'column', flexGrow: 1, width: '100%', height: 620, justifyContent: 'center'}} 
            initialPage={0}
            ref={pageRef}
            onPageSelected={(e)=>setPage(e.nativeEvent.position)}
        >
            {dynamicData&&dynamicData.map((section, index) => {
                return <View key={index}>
                    <FormSection form={form} 
                        updateForm={updateForm} {...section} 
                        page={index} 
                        nextPage={()=>pageRef.current.setPage(index+1)} 
                        requiredFields={dynamicData.reduce((a,b) => a.inputs.concat(b.inputs)).filter(a => a.required)}
                        pageCount={dynamicData.length}
                        submitForm={submitForm}
                    />
                </View>
            })}
        </PagerView>
    </View>
}