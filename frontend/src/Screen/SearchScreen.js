import React from "react";
import {useState} from "react";
import data from "../sampleData.js";
import { Card,Container,ListGroup,Badge,Col, CardGroup,Button,Row,Form, FormGroup } from 'react-bootstrap';
import "../SearchBar.css";
import bookCover from "../images/bookCover.jpg"
import SearchIcon from "../images/searchIcon.png"


export default function SearchScreen(){
    const novels = data.Novel
    const [searchTerm,setSearchTerm] = useState("")
    return(
        <>
        <Container>
            <Row> 
        <h1 className="mb-3">ค้นหานิยาย</h1>
        </Row>
        <FormGroup as={Row}>
            <Col sm={7}>
            <Form.Control 
            type="search" 
            placeholder="Search..." 
            onChange={(event) => {
                setSearchTerm(event.target.value)
            }}
        />
            </Col>
        <Col sm={2}>
            <Button variant="outline-light">
            <img src={SearchIcon} height={23} width={23}/>
            </Button>
        </Col>
        </FormGroup>
        <div className="dataResult">
            {data.Novel.filter((val) => {
                if (searchTerm == ""){
                    return val
                } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
            })
            .slice(0,10).map((val,key) => {
                return (
                    
                    <a className="dataItem" href={val.link} target="_blank" key={key}>
                        <p>{val.name}</p>
                    </a>
                    
                )
            })
        }
        </div>
            
    <br></br>
    <br></br>
    <p>____________________________________________________________________________________________________________________________________________________________________________________________________</p>
    <br></br>
    <br></br>
                {novels.map((novel) => {
                    // novel.allViewers.sort()
                    return <Row>
                    <CardGroup>
                    <Col sm={2}>
                    <Card>
                        <Card.Body>
                            <Card.Img variant="top" src={bookCover}/>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Body>
                        <Card.Title style={{fontSize : 24}}>{novel.name}</Card.Title>
                        <Card.Text style={{fontSize : 15}}>{novel.detail}</Card.Text>
                        <Card.Text style={{fontSize : 15}}>Writer : </Card.Text>
                        <Col>
                        {novel.category.map((categories) => {
                            return <Button variant="outline-danger" style={{fontSize : 10}}>{categories.name}</Button>
                        })}
                        </Col>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{fontSize : 15}}><Badge bg="primary">{novel.allViewers}</Badge> views</ListGroup.Item>
                            <ListGroup.Item style={{fontSize : 15}}>Rating <Badge bg="warning">{novel.rating.allScore / novel.rating.count}</Badge></ListGroup.Item>
                            <ListGroup.Item style={{fontSize : 15}}> Chapter : {novel.allChapter.length}</ListGroup.Item>
                        </ListGroup>
                        </Card.Body>
                    </Card>
                    </Col>
                    </CardGroup>
                    </Row>
                    
                })}

           
            <br /><br /><br /><br />
        
        </Container>    
      
    </>
    )
}