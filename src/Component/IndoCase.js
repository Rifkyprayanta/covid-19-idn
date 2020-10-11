import React from 'react'
import Card from 'react-bootstrap/Card'
import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function IndoCase() {
    return (
    <div classNam="app">
        <h2 clas="text-align:left">Jumlah Kasus di Indonesia</h2>
        <Row>
        <Col><Card body>Kasus Positif.</Card></Col>
        <Col><Card body>Kasus Sembuh.</Card></Col>
        <Col><Card body>Kasus Meninggal.</Card></Col>
        </Row>
    </div>
    )
}

export default IndoCase
