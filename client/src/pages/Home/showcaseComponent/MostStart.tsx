import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import MostCard from "./MostCard";
import {MostRating} from "../../../helperFunction/filterFunctions";

const MostStart:React.FunctionComponent = () => {
    const mostStart = MostRating()
    return (
        <Container>
            <Row className="mt-5">
                <Col md={6}>
                <span className="mostPopular">
                    Топ 3 самых рейтинговых игр
                </span>
                </Col>
            </Row>
            <Row className="d-flex justify-content-evenly mt-5">
                {mostStart.map(el =>
                    <MostCard key={el.id} props={el}/>
                )}
            </Row>
        </Container>
    );
};

export default MostStart;