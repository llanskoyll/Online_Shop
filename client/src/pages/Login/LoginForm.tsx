import React, {useState} from 'react';
import {Alert, Button, Form} from "react-bootstrap";
import {useAction} from "../../hooks/useAction";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const LoginForm: React.FunctionComponent = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {isAuth} = useTypedSelector(state => state.user)
    const {setLogin} = useAction()
    const login = () => {
        const user = {
            username: username,
            password: password
        }
        setLogin(user)
    }
    return (
        <div className="LoginForm mt-5">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Логин</Form.Label>
                    <Form.Control
                        value = {username}
                        onChange = {(e) => setUsername(e.target.value)}
                        type="login"
                        placeholder="Enter you`r login"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"/>
                </Form.Group>
                <Button
                    onClick = {login}
                    variant="primary">
                    Войти
                </Button>
            </Form>
        </div>
    );
};

export default LoginForm;