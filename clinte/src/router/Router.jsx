

import React from 'react'

import { Routes,Route}from "react-router-dom"
import Card from '../components/pages/card/Card'
import CreateState from '../components/pages/allStates/AllStates'
import AddState from '../components/pages/AddStates/AddState'
import UpdateState from '../components/pages/UpdateStates/UpdateState'

export const Router = () => {
  return (
<Routes>
<Route path="/" />
<Route path="states" element={<CreateState/>}/>
<Route path="Addstates" element={<AddState/>}/>
<Route path="Updatestates" element={<UpdateState/>}/>


</Routes>
    
  )
}
