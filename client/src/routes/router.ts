import React from 'react'
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Basket from "../pages/Basket/Basket";
import Catalog from "../pages/Catalog/Catalog";


export interface IRouter {
    path: string,
    exact: boolean,
    component: React.ComponentType
}

export enum RoutesName {
    HOME = '/',
    LOGIN = '/login',
    PROFILE = '/profile',
    BASKET = '/basket',
    CATALOG = '/catalog',
}

export const publicRoutes: IRouter[] = [
    {path: RoutesName.LOGIN, exact: true, component: Login},
    {path: RoutesName.CATALOG, exact: true, component: Catalog},
    {path: RoutesName.HOME, exact: true, component: Home}
]
export const privateRoutes: IRouter[] = [
    {path: RoutesName.PROFILE, exact: true, component: Profile},
    {path: RoutesName.HOME, exact: true, component: Home},
    {path: RoutesName.BASKET, exact: true, component: Basket},
    {path: RoutesName.CATALOG, exact: true, component: Catalog},
]

