import React, {useEffect} from 'react';
import {Container} from "react-bootstrap";
import MostPopular from "./showcaseComponent/MostPopular";
import MostStart from "./showcaseComponent/MostStart";
import {MostDownload} from "../../helperFunction/filterFunctions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Layout} from "antd";


const Home:React.FunctionComponent = () => {

    MostDownload()
    const user = useTypedSelector(state => state.user)
    return (
       <div className="Home">
            <MostPopular/>
            <MostStart/>
       </div>
    );
};

export default Home;