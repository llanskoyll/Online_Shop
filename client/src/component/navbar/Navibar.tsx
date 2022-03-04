import React from 'react';
import {NavLink, useHistory} from 'react-router-dom'
import './Navibar.css'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useAction} from "../../hooks/useAction";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import './Navibar.css'
const Navibar: React.FunctionComponent = () => {

    const router = useHistory()
    const {isAuth} = useTypedSelector(state => state.user)
    const {setIsAuth} = useAction()

    const Logout = (status: boolean) => {
        setIsAuth(status)
        router.push('/login')
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    {isAuth
                        ?
                        <>
                            <Nav className="me-auto nav__links">
                                <NavLink className = "nav__link" to="/">Home</NavLink>
                                <NavLink className = "nav__link" to="/catalog">Catalog</NavLink>
                                <NavLink className = "nav__link" to="/profile">Profile</NavLink>
                                <NavLink className = "nav__link" to="/basket">Basket</NavLink>
                            </Nav>
                            <Nav>
                                <Button
                                    onClick = {() => Logout(false)}
                                    variant = "danger">
                                    Logout</Button>
                            </Nav>
                        </>
                        :
                        <>
                            <Nav className="me-auto nav__links">
                                <NavLink className = "nav__link" to="/">Home</NavLink>
                                <NavLink className = "nav__link" to="/catalog">Catalog</NavLink>
                            </Nav>
                            <Nav>
                                <Button
                                    onClick = {() => router.push('/login')}
                                    variant = "success">
                                    Login
                                </Button>
                            </Nav>
                        </>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navibar;

