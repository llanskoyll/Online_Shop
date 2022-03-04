import React from 'react';
import {Button, Card, ListGroup} from "react-bootstrap";
import {IProduct} from "../../../models/IProduct";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

interface PropsCard {
    props: IProduct
}

const MostCard: React.FunctionComponent<PropsCard> = ({props}) => {

    const {isAuth} = useTypedSelector(state => state.user)
    const textReduction = (text: string): string => {
        if (text.length > 80) {
            return text.split(' ').slice(0, 30).join(" ") + '...'
        } else {
            return text
        }
    }
    const addBasket = () => {
        if(!isAuth) {
            alert('Войдите в аккаунт для добавление товара в коризну!')
        } else {
            alert('Тип добавил')
        }
    }
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {textReduction(props.description)}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Rating : <b>{props.star}</b></ListGroup.Item>
                <ListGroup.Item>Downloads : <b>{props.downloads}</b></ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Button
                    onClick = {() => addBasket()}
                    variant = "primary">
                    Добавить в корзину
                </Button>
            </Card.Body>
        </Card>
    );
};
export default MostCard;




// <Col md={3}>
//     <Card style={{width: '18rem'}}>
//         <Card.Body>
//             <Card.Title>{props.name}</Card.Title>
//             <Card.Text>
//                 {textReduction(props.description)}
//             </Card.Text>
//             <Card.Text>
//                 <div className = "mt-2">Рейтинг : <b>{props.star}</b></div>
//                 <div className = "mt-2">Количество установок : <b>{props.downloads}</b></div>
//             </Card.Text>
//         </Card.Body>
//         <Card.Footer>
//             <Button
//                 onClick = {() => addBasket()}
//                 type="primary">
//                 Добавить в корзину
//             </Button>
//         </Card.Footer>
//     </Card>
// </Col>