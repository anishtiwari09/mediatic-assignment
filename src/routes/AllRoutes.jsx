import React from "react";
import { Route, Switch } from "react-router-dom";
import Todo from "../Component/Page1/Todo";
import EditTask from "../Component/Page2/EditTask"
export default function AllRoutes() {
  return (
    <div>
      <Switch>
      <Route exact path="/:taskId">
         <EditTask />
        </Route>
        
        <Route exact path="/">
          <Todo />
        </Route>
        
      </Switch>
    </div>
  );
}
