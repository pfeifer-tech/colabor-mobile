
import { useState } from 'react'

export function useForm() {
    const [form, setForm] = useState({})

    function propegateChildren(name: string, value: string, obj: any=form) {
        const split = name.split('.')
        const child = split.shift()

        if(split.length===0) {
            return {...obj, [child]: value}
        }
        return {...obj, [child]: propegateChildren(split.join(), value, form[child]||{})}
    }

    function updateForm(name: string, value: string) {
        setForm(propegateChildren(name,value));
    }

    return {form, updateForm}
}