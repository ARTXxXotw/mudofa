import React from 'react'
import { BrowserRouter,Switch,Route } from "react-router-dom";
import { CompatRouter } from "react-router-dom-v5-compat";
import Main from './accsest/front/Main'
import Yangiliklar from './accsest/front/Yangiliklar'
import Allnews from './accsest/front/Allnews'

export default function App() {
  return (
    <BrowserRouter>
          <CompatRouter>
             <Switch>
               <Route path="/" exact component={Main} />
               <Route path="/Yangiliklar" exact component={Yangiliklar} />
               <Route path="/Allnews" exact component={Allnews} />
             </Switch>
         </CompatRouter>
         </BrowserRouter>
  )
}
