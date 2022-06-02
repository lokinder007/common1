import axios from 'axios'
import React, { useState } from 'react'
import { Button, Card, CardGroup, Container } from 'react-bootstrap'

const News = () => {
    const [news, setNews] = useState([])

    const fetchNews = () => {
        axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=0c33dd7fe466417d853bbac0c5fe03f5')
            .then((res) => {
                console.log(res)
                setNews(res.data.articles)
            })
    }
    return (
        <Container>
            <div className="container my-3">
                <div className="row">
                    <div className="col-4">
                        <button className='btn btn-primary' onClick={fetchNews}>Fetch-News</button>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {
                        news.map((value ,index) => {
                            return (
                                <div key={index} className="col-4">
                                    <CardGroup>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={value.urlToImage} />
                                            <Card.Body>
                                                <Card.Title>{value.title}</Card.Title>
                                                <Card.Text>
                                                    {value.description}
                                                </Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </CardGroup>
                                </div>
                            )
                        })

                    }
                </div>
            </div>
        </Container>
    )
}

export default News