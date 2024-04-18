import { View, ScrollView } from 'react-native'
import React from 'react'
import { GeneratedForm } from '../../../components/Form/GeneratedForm';



export default function AddUserScreen() {
  const dynamicData = [
    {
      section: 'Contact Info',
      inputs: [
        {name: 'user.firstName', icon: 'person', label: 'First Name', inputType: 'FormTextInput'},
        {name: 'user.lastName', icon: 'person', label: 'Last Name', inputType: 'FormTextInput'},
        {name: 'user.birthday', icon: 'calendar-today', label: 'Birthday', inputType: 'FormDateInput'},
        {name: 'user.phone', icon: 'phone', label: 'Phone', keyboardType: 'numeric', inputType: 'FormTextInput'},
        {name: 'user.email', icon: 'email', label: 'Email', keyboardType: 'email-address', inputType: 'FormTextInput'},
        {name: 'user.address', icon: 'location-pin', label: 'Address', inputType: 'FormTextInput'},
      ]
    },
    {
      section: 'Emergency Contact',
      inputs: [
        {name: 'guardian.firstName', icon: 'person', label: 'First Name', inputType: 'FormTextInput'},
        {name: 'guardian.lastName', icon: 'person', label: 'Last Name', inputType: 'FormTextInput'},
        {name: 'guardian.phone', icon: 'phone', label: 'Phone', keyboardType: 'numeric', inputType: 'FormTextInput'},
        {name: 'guardian.email', icon: 'email', label: 'Email', keyboardType: 'email-address', inputType: 'FormTextInput'}
      ]
    }
  ]
  //         {type: "Text", props: {style: {marginLeft: 12, fontSize: 18, fontWeight: '500'}}, children: "Contact Info"},
  //         {type: "FormTextInput", props: {name: "firstName", form, icon: "person", label: "First Name"}},
  //         {type: "FormTextInput", props: {name: "lastName", form, icon: "person", label: "Last Name"}},
  //         {type: "FormDateInput", props: {name: "birthday", form, label: "Birthday"}},
  //         {type: "FormTextInput", props: {name: "phone", form, icon: "phone", label: "Phone", keyboardType: 'numeric'}},
  //         {type: "FormTextInput", props: {name: "email", form, icon: "email", label: "Email", keyboardType: 'email-address'}},
  //         {type: "FormTextInput", props: {name: "address", form, icon: "location-pin", label: "Address"}},
  //         // {type: "FormConditional", props:{name: "isStudent", form, value: true}, children:}
  //       ]
  //     },
  //     {
  //       type: "View", children: [
  //         {type: "Text", props: {style: {marginLeft: 12, fontSize: 18, fontWeight: '500'}}, children: "Emergency Contact"},
  //         {type: "FormTextInput", props: {name: "phone", form, icon: "phone", label: "Phone", keyboardType: 'numeric'}},
  //         {type: "FormTextInput", props: {name: "email", form, icon: "email", label: "Email", keyboardType: 'email-address'}},
  //         {type: "FormTextInput", props: {name: "address", form, icon: "location-pin", label: "Address"}}
  //       ]
  //     },
  //     {
  //       type: "View", children: [
  //         {type: "Text", props: {style: {marginLeft: 12, fontSize: 18, fontWeight: '500'}}, children: "About You"},
  //         {type: "FormTextInput", props: {name: "phone", form, icon: "phone", label: "Are you in School?", keyboardType: 'numeric'}},
  //         {type: "FormTextInput", props: {name: "email", form, icon: "email", label: "Email", keyboardType: 'email-address'}},
  //         {type: "FormTextInput", props: {name: "address", form, icon: "location-pin", label: "Address"}}
  //       ]
  //     }
  //   ]
  // }

  return (
    <ScrollView>
        <GeneratedForm data={dynamicData} />
    </ScrollView>
  )
}