import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Index from './pages/Index/Index'
import Teacher from './pages/Teacher/Teacher'
import Water from './pages/Water/Water'
import More from './pages/More/More'
import Community from './pages/Community/Community'
import Family from './pages/Famliy/Family'
import Repair from './pages/Repair/Repair'
import Collection from './pages/Collection/Collection'
import FamilyDetail from './pages/Family-detail/Family-detail'
import RepairDetail from './pages/Repair-detail/Repair-detail'
import WaterSingle from './pages/Water-single/Water-single'
import FamilySingle from './pages/Family-single/Family-single'
import RepairSingle from './pages/Repair-single/Repair-single'
import WaterContent from './pages/Water-content/Water-content'
import RepairContent from './pages/Repair-content/Repair-content'
import Password from './pages/Password/Password'
export default class Parent extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/index" component={Index}></Route>
          <Route path="/teacher" component={Teacher}></Route>
          <Route path="/water" component={Water}></Route>
          <Route path="/more" component={More}></Route>
          <Route path="/community" component={Community}></Route>
          <Route path="/family" component={Family}></Route>
          <Route path="/repair" component={Repair}></Route>
          <Route path="/collection" component={Collection}></Route>
          <Route path="/family-detail" component={FamilyDetail}></Route>
          <Route path="/repair-detail" component={RepairDetail}></Route>
          <Route path="/water-single/:id" component={WaterSingle}></Route>
          <Route path="/family-single/:id" component={FamilySingle}></Route>
          <Route path="/repair-single/:id" component={RepairSingle}></Route>
          <Route path="/water-content/:id" component={WaterContent}></Route>
          <Route path="/repair-content/:id" component={RepairContent}></Route>
          <Route path="/password" component={Password}></Route>
          <Redirect to="/index"></Redirect>
        </Switch>
      </div>
    )
  }
}
