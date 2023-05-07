import React, {useState, useEffect} from 'react'
import { Card } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css'

const Szolgaltatasok = () => {
    let urlGeneral = 'http://127.0.0.1:8000/api/general/'
    let url = 'http://127.0.0.1:8000/api/szolgaltatasok/'
    const [szolgaltatasok, setSzolgaltatasok] = useState([])

    useEffect(()=>{
      fetch(url, {
        method: 'GET',
      })
      .then((response) => response.json())
      .then((data) => {
        setSzolgaltatasok(data)
        })
    },[])



  return (
    <div id='kartyak'>
      <Container fluid>
        <Row>
        {szolgaltatasok?.map((kartya, i) => {
              return(
                <Col sm={6} lg={3} key={i} className='cella'>
                <Card>
                  <Card.Body>
                    <Card.Title>{kartya.Megnevezes}</Card.Title>
                    <Card.Text>
                      {kartya.Ar + " Ft "}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              )
            })}
        </Row>
      </Container>
    </div>
  )
}
export default Szolgaltatasok