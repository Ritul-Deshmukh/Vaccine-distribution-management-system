import React, { Component } from 'react'
import { Card, CardDeck} from 'react-bootstrap';
import './About.css';



class About extends Component {
    render() {
        return (
            <div className="Cards change" >
                <CardDeck>

                    <Card>
                        <Card.Body>
                        <Card.Title>Ritul Deshmukh</Card.Title>
                        <Card.Text>
                            I am currently pursuing Computer Science and Engineering from Shri Ramdeobaba College of Engineering and Management. My special interest lies in Agile Development and Project Management in Software Engineering.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">III Year B.Tech CSE</small>
                        </Card.Footer>
                    </Card>

                    
                    </CardDeck>
            </div>
        )
    }
}

export default About