import React from 'react';
import {MostDownload} from "../../../helperFunction/filterFunctions";
import {Col, Container, Row} from "react-bootstrap";
import MostCard from "./MostCard";
import './MostPopular.css'
const MostPopular: React.FunctionComponent = () => {

    const mostDownload = MostDownload()

    return (
        <Container>
            <Row className="mt-5">
                <Col md={6}>
                <span className="mostPopular">
                    Топ 3 самых популярных игр
                </span>
                </Col>
            </Row>
            <Row className="d-flex justify-content-evenly mt-5">
                {mostDownload.map(el =>
                    <MostCard key={el.id} props={el}/>
                )}
            </Row>
        </Container>
    );
};

export default MostPopular;