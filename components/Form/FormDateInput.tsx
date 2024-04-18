import FormTextInput from "./FormTextInput";
import { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function FormDateInput({name, form, updateForm, label}: {name: string, form: any, updateForm: (name: string, value: string) => void, label: string}) {

    const [showPicker, setShowPicker] = useState(false)

    function onChange({type}, selectedDate) {
        setShowPicker(false)
        if(type === 'set') {
            updateForm(name, selectedDate)
        }
    }

    return <>
        <FormTextInput name={name} form={form} icon='calendar-today' 
            updateForm={updateForm} label={label}
            onPress={() => setShowPicker(true)} 
        />
          
          
        {showPicker&&<DateTimePicker
            mode="date"
            value={form.birthday||new Date()}
            onChange={onChange}
        />}
    </>
}