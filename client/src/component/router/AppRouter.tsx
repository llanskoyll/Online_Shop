import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes, RoutesName} from "../../routes/router";

const AppRouter = () => {

    const {isAuth} = useTypedSelector(state => state.user)

    return (
        isAuth
            ?
            <Switch>
                {privateRoutes.map(route =>
                    <Route
                        key = {route.path}
                        path = {route.path}
                        exact = {route.exact}
                        component = {route.component}/>
                )}
                <Redirect to = {RoutesName.HOME} />
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route =>
                    <Route
                        key = {route.path}
                        path = {route.path}
                        exact = {route.exact}
                        component = {route.component}/>
                )}
                <Redirect to = {RoutesName.HOME} />
            </Switch>
    );
};

export default AppRouter;