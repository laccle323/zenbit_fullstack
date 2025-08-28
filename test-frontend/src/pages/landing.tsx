import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './landing.scss';

const LandingPage: React.FC = () => {
    return (
        <>
            {/* Hero Section */}
            <header className="hero-section text-white d-flex align-items-center">
                <div className="overlay" />
                <Container className="text-center position-relative z-1">
                    <h1 className="display-4 fw-bold">The chemical negatively charged</h1>
                    <p className="lead">
                        Numerous calculations predict, and experiments confirm, that the force field<br/>reflects the beam, while the mass defect is not formed. The chemical compound is<br/>negatively charged. Twhile the mass defect is
                    </p>
                    <Button variant="outline-light" size="lg">Get Started</Button>
                </Container>
            </header>

            {/* Deals Section */}
            <section className="py-5 bg-light">
                <Container>
                    <h3 className="text-primary fw-bold mb-4">Open Deals</h3>
                    <Row className="g-3">
                        {deals.map((deal, index) => (
                            <Col md={6} key={index}>
                                <div className="deal-card position-relative text-white" style={{backgroundImage: `url(${deal.image})`}}>
                                    <div className="align-content-end h-100 p-3">
                                        <h4>{deal.title}</h4>
                                        <Row className="g-1 fs-6 fw-bold">
                                            <Col md={4} sm={6}>{deal.price}</Col>
                                            <Col md={4} sm={6}>Yield {deal.yield}</Col>
                                            <Col md={4} sm={6}>Sold {deal.sold}</Col>
                                            <Col md={4} sm={6}>Ticket {deal.ticket}</Col>
                                            <Col md={4} sm={6}>Days left {deal.daysLeft}</Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
};

interface Deal {
    title: string;
    price: string;
    ticket: string;
    yield: string;
    daysLeft: string;
    sold: string;
    image: string;
}

// Sample Data
const deals: Deal[] = [
    {
        title: 'The Marina Torch',
        price: '6 500 000 DHS',
        ticket: '60 000 DHS',
        yield: '9.25%',
        daysLeft: '120',
        sold: '75%',
        image: '/images/img1.jpg',
    },
    {
        title: 'HHHR Tower',
        price: '500 000 DHS',
        ticket: '60 000 DHS',
        yield: '9.25%',
        daysLeft: '150',
        sold: '77%',
        image: '/images/img2.jpg',
    },
    {
        title: 'Ocean peaks',
        price: '6 500 000 DHS',
        ticket: '60 000 DHS',
        yield: '9.25%',
        daysLeft: '140',
        sold: '88%',
        image: '/images/img3.jpg',
    },
    {
        title: 'Al Yaquob Tower',
        price: '500 000 DHS',
        ticket: '60 000 DHS',
        yield: '9.25%',
        daysLeft: '150',
        sold: '73%',
        image: '/images/img4.jpg',
    },
];

export default LandingPage;
