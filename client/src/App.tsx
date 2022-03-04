import React from 'react';
import './pages/App.css'
import Navibar from "./component/navbar/Navibar";
import AppRouter from "./component/router/AppRouter";
import {useAction} from "./hooks/useAction";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {Layout} from "antd";


function App() {

    const product = useTypedSelector(state => state.products)
    const {setAddProduct} = useAction()
    if (product.products.length === 0) {
        setAddProduct()
    } //  Request for product lists
    return (
        <div className="App">
                <Navibar/>
                <AppRouter/>
        </div>
    );
}

export default App;
