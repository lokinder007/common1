import axios from 'axios'
import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'

const Jokes = () => {
    var size = 10;
    const [joke, setJoke] = useState('')
    const [photo, setPhoto] = useState([])

    const getJoke = () => {
        // axios.get('https://official-joke-api.appspot.com/random_joke')
        axios.get('https://api.jokes.one/jod?category=animal')
            .then(res => {
                console.log(res.data.contents.jokes.text)
                // setJoke(res.data.setup + '...' + res.data.punchline);
            })
            .catch(err => {
                alert('Somthing went wrong.')
            })
    }

    const getPhoto = () => {
        // axios.get('https://official-joke-api.appspot.com/random_joke')
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((res) => {
                console.log(res.data)
                setPhoto(res.data)

                // console.log(photo)
            })
            .catch(err => {
                alert('Somthing went wrong.')
            })
    }

    return (
        <Container>
            <h1>Jokes</h1>
            <Button onClick={getJoke}> Get Joke </Button> <br /><br />
            {joke}
            <Button onClick={getPhoto}> Get Photo </Button> <br /><br />
            {/* {
                <img src={photo} alt="image" />
            } */}

            <div className="container">
                <div className="row">
                    {

                        photo.slice(0, size).map((value, index) => {
                            return (
                                <div key={index} className="col-4 mb-3">
                                    <div className="card">
                                        <img src={value.url} alt="image" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </Container>
    )
}

export default Jokes