import axios from 'axios'
import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'

const Jokes = () => {
    var size = 10;
    const [joke, setJoke] = useState([])
    const [num, setNum] = useState(0)

    const [photo, setPhoto] = useState([])

    const getJoke = () => {

        axios.get('https://lokinder007.github.io/jsonapi/jokes.json')
            .then(res => {
                console.log(res.data[num])
                // setJoke(res.data);
                setJoke(`${res.data[num].setup}.... ${res.data[num].punchline}`)
            })
            .catch(err => {
                alert('Somthing went wrong.')
            })
        setNum(num + 1)
    }
    // useEffect(() => {
    //     getJoke()
    // }, [])

    const getPhoto = () => {

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
            {/* {
                joke.map((j) => {
                    return (
                        <p>{j.setup} ... {j.punchline} </p>
                    )
                })
            } */}

            <h2 className='mb-4'>{joke}</h2> 


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