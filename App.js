import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Component/Home/Home1/Home.js'

import NotFound from "./Component/NotFound/NotFound.js"
import Navbar from "./Component/Navbar/Navbar.js"
import FullPage from "./Component/Home/Home1/Newhome/BoomHome/FullPage/FullPage"
import FormCV from "./Components2/FormCV/FormCV"
import FirstPage from './Component/FirstPage/FirstPage'
import Login from './Component/Login/Login'
import PrivateRoute from './Component/PrivateRoute/PrivateRoute'
import SignUp from './Component/SignUp/SignUp'
import CardUser from './Components2/CardUser/CardUser'


import Admin from "./Components2/AdminPage/Admin"

import Company from "./Components3/Company/Company"
import NewPrivateRouter from './Components4/NewPrivateRouter/NewPrivateRouter'
import CompanyLogin from './Components4/CompanyLogin/CompanyLogin'
import CompanySignUp from './Components4/CompanySignUp/CompanySignUp'
import Review from './Components7last/Review/ReviewNayeem'
import ApproveCV from './Components3/ApproveCV/ApproveCV'





function App() {
  
  return (
   

     <Router>

      <Route>

           <Navbar />
           
     </Route>

    


      <div>
       


        <Switch>
        <Route exact path="/">
            <FirstPage />
          </Route>


          <Route  path="/home">
            <Home />
          </Route>


          <Route path="/fullpage/:id">
            <FullPage></FullPage>
           
          </Route>

          <PrivateRoute path="/FormCV/:id">
            <FormCV></FormCV>
           
          </PrivateRoute>


          <Route path="/login">
            <Login />
          </Route>

          <NewPrivateRouter path="/company/nayeem">
            <Company />
          </NewPrivateRouter>
          <NewPrivateRouter path="/approve">
            <ApproveCV />
          </NewPrivateRouter>

           
{/* 
           <Route path="/company">
            <Company />
          </Route> */}

          <PrivateRoute path="/carduser">
            <CardUser />
          </PrivateRoute>

          <PrivateRoute path="/review">
            <Review />
          </PrivateRoute>


           <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/companysignup">
            <CompanySignUp />
          </Route>
          <Route path="/companylogin">
            <CompanyLogin />
          </Route>

          



           {/* <Route exact path="/registration">
            <Registration />
          </Route>

          <Route exact path="/event">
            <Event />
          </Route> */}




           <Route path="/admin">
            <Admin />
          </Route>
         




          <Route path="*">
            <NotFound />
          </Route>
          


          
          

        </Switch>


        



      </div>
    </Router>
  );
}

export default App;
