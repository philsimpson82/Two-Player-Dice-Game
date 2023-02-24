import { Row, Col } from 'reactstrap';

const Header = ({playerOneScore, playerTwoScore}) => {
    return(
        <>
            <Row className='justify-content-between'>
                <Col className='border text-center scoreCard' xs='3'>Player 1 Score: {playerOneScore}</Col>
                <Col className='border text-center scoreCard' xs='3'>Player 2 Score: {playerTwoScore}</Col>
            </Row>
        </>
    );
};

export default Header;