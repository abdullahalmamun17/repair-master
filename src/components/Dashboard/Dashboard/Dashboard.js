import { faCommentDots, faListAlt, faPlusSquare, faThLarge, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import jwtDecode from 'jwt-decode';
import React, { useContext, useEffect, useState } from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import { UserContext } from '../../../App';
import AddReview from '../AddReview/AddReview';
import AddService from '../AddService/AddService';
import AdminPanel from '../AdminPanel/AdminPanel';
import ManageServices from '../ManageServices/ManageServices';
import OrderList from '../OrderList/OrderList';


const Dashboard = () => {
    const [loggedInUser] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(false)
    const decoded = jwtDecode(sessionStorage.getItem('token'))

    useEffect(() => {
        const email = loggedInUser.email || decoded.email

        fetch('https://repair-master.herokuapp.com/is-admin', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(result => setIsAdmin(result))
    }, [])

    return (
        <section className="container-fluid font-poppins">
            <Tab.Container id="left-tabs-example" defaultActiveKey="orderList">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <h1 className="text-center mb-5 mt-1 border-bottom" style={{ color: '#C55FFC' }}>REPAIR <span style={{ color: '#F85C70' }}>MASTER</span></h1>
                            <Nav.Item className="w-75 mx-auto">
                                <Nav.Link eventKey="orderList" className="text-dark">
                                    <FontAwesomeIcon icon={faListAlt} className="me-2" />
                                    Order List
                            </Nav.Link>
                            </Nav.Item>
                            {isAdmin &&
                                <>
                                    <Nav.Item className="w-75 mx-auto">
                                        <Nav.Link eventKey="makeAdmin" className="text-dark">
                                            <FontAwesomeIcon icon={faUserShield} className="me-2" />
                                            Admin Panel</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="w-75 mx-auto">
                                        <Nav.Link eventKey="addService" className="text-dark">
                                            <FontAwesomeIcon icon={faPlusSquare} className="me-2" />Add Service</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="w-75 mx-auto">
                                        <Nav.Link eventKey="manageService" className="text-dark">
                                            <FontAwesomeIcon icon={faThLarge} className="me-2" />Manage Service</Nav.Link>
                                    </Nav.Item>
                                </>
                            }
                            {
                                !isAdmin &&
                                <Nav.Item className="w-75 mx-auto">
                                    <Nav.Link eventKey="review" className="text-dark">
                                        <FontAwesomeIcon icon={faCommentDots} className="me-2" />Review</Nav.Link>
                                </Nav.Item>
                            }
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="orderList">
                                <OrderList></OrderList>
                            </Tab.Pane>
                            <Tab.Pane eventKey="addService">
                                <AddService></AddService>
                            </Tab.Pane>
                            <Tab.Pane eventKey="makeAdmin">
                                <AdminPanel></AdminPanel>
                            </Tab.Pane>
                            <Tab.Pane eventKey="manageService">
                                <ManageServices></ManageServices>
                            </Tab.Pane>
                            <Tab.Pane eventKey="review">
                                <AddReview></AddReview>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </section>
    );
};

export default Dashboard;