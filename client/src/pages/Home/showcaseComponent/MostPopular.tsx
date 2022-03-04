import React from 'react';
import {MostDownload} from "../../../helperFunction/filterFunctions";
import {Col, Container, Row} from "react-bootstrap";
import MostCard from "./MostCard";
import './MostPopular.css'

const MostPopular: React.FunctionComponent = () => {

    const mostDownload = MostDownload()

    return (
        <div className="most">
            <Container>
                <Row>
                    <Col md={6}>
                <span className="mostPopular">
                    Топ 3 самых популярных игр
                </span>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-evenly mt-3">
                    {mostDownload.map(el =>
                        <MostCard key={el.id} props={el}/>
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default MostPopular;