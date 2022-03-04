import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import MostCard from "./MostCard";
import {MostRating} from "../../../helperFunction/filterFunctions";
import './MostPopular.css'

const MostStart: React.FunctionComponent = () => {
    const mostStart = MostRating()
    return (
        <div className="most">
            <Container>
                <Row>
                    <Col md={6}>
                <span className="mostPopular">
                    Топ 3 самых рейтинговых игр
                </span>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-evenly most__content mt-3">
                    {mostStart.map(el =>
                        <MostCard key={el.id} props={el}/>
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default MostStart;