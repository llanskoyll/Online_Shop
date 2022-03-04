import React from 'react';
import {NavLink, useHistory} from 'react-router-dom'
import './Navibar.css'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useAction} from "../../hooks/useAction";
import {Menu} from "antd";
import Sider from "antd/lib/layout/Sider";

const Navibar: React.FunctionComponent = () => {

    const router = useHistory()
    const {isAuth} = useTypedSelector(state => state.user)
    const {setIsAuth} = useAction()

    const Logout = (status: boolean) => {
        setIsAuth(status)
    }

    return (
        <Sider
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
            }}
        >
            <div className="logo"/>
            <Menu theme="dark" mode="inline">
                {isAuth
                    ?
                    <>
                        <Menu.Item key="1">
                            <NavLink to="/">Главная</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <NavLink to="/catalog">Каталог</NavLink>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <NavLink to='/profile'>Профиль</NavLink>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <NavLink to = "/login" onClick = {() => Logout(false)}>
                                Выйти
                            </NavLink>
                        </Menu.Item>
                    </>
                    :
                    <>
                        <Menu.Item key="1">
                            <NavLink to="/">Главная</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <NavLink to="/catalog">Каталог</NavLink>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <NavLink to='/login'>Войти</NavLink>
                        </Menu.Item>
                    </>
                }
            </Menu>
        </Sider>
    );
};

export default Navibar;


// <Navbar bg="dark" variant="dark">
//     <Container>
//         {isAuth ?
//             <>
//                 <div className="navbar__inner d-flex align-items-center">
//                     <div className="nav__link">
//                         <NavLink className = "nav__link item" to="/">Главная</NavLink>
//                     </div>
//                     <div className="nav__link">
//                         <NavLink className = "nav__link item" to="/catalog">Каталог</NavLink>
//                     </div>
//                     <div className="nav__link">
//                         <NavLink className = "nav__link item" to="/profile">Профиль</NavLink>
//                     </div>
//                 </div>
//                 <div className = "d-flex justify-content-end">
//                     <button
//                         className = "btn-nav"
//                         onClick = {() => Logout(false)}
//                     >
//                         Выйти
//                     </button>
//                 </div>
//             </>
//             :
//             <>
//                 <div className="navbar__inner d-flex align-items-center">
//                     <div className="nav__link">
//                         <NavLink className = "nav__link item" to="/">Главная</NavLink>
//                     </div>
//                     <div className="nav__link">
//                         <NavLink className = "nav__link item" to="/catalog">Каталог</NavLink>
//                     </div>
//                 </div>
//                 <div className = "d-flex justify-content-end">
//                     <button
//                         className = "btn-nav"
//                         onClick = {() => router.push(RoutesName.LOGIN)}>
//                         Войти
//                     </button>
//                 </div>
//             </>
//         }
//     </Container>
// </Navbar>