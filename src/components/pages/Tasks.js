import React, { useReducer, useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap';

const Tasks = () => {

    //    !---Task 1---!
    const [inputValue, setInputValue] = useState('Lokinder')

    const onChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue)
    }

    //    !---Task 2---!
    const [count, setCount] = useState(0)
    const [showText, setShowText] = useState(true)

    //    !---Task 3---!
    const reducer = (state, action) => {
        switch (action.type) {
            case "Increment":
                return { count: state.count + 1, showText: state.showText }

            case "ToggleShowText":
                return { count: state.count, showText: !state.showText }

            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })

 //    !---Task 4---!
 const [inputNumber, setInputNumber] = useState(0)

 const showABC = (e) => {
     const newValue = e.target.value;
     setInputNumber(newValue)
 }


    return (
        <>

            <Card bg='primary' style={{ width: '18rem' }} className="text-center m-4">
                <Card.Header>Input Value - 1st Task</Card.Header>
                <Card.Body>
                    <Card.Title>{inputValue}</Card.Title>
                    <input type="text" placeholder='Enter something...' onChange={onChange} />
                    <Card.Text>
                        Shows the Input Value
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className="text-center m-4">
                <Card.Header>Numbers</Card.Header>
                <Card.Body>
                    <Card.Title>{count}</Card.Title>
                    <Card.Text>
                        {showText ? <p>This is even Number</p> : <p>This is {count}, odd Number</p>}
                    </Card.Text>
                    <Button variant="primary"
                        onClick={() => {
                            setCount(count + 1)
                            setShowText(!showText)
                        }}
                    >
                        Click Here
                    </Button>
                </Card.Body>
                <Card.Footer  className="text-muted">2nd Task </Card.Footer>
            </Card>

            <Card style={{ width: '18rem' }} className="text-center m-4">
                <Card.Header>Numbers</Card.Header>
                <Card.Body>
                    <Card.Title>{state.count}</Card.Title>
                    <Card.Text>
                        {state.showText && <p>This is {state.count} even number </p> || <p>This is odd Number</p>}
                    </Card.Text>
                    <Button variant="primary"
                        onClick={() => {
                            dispatch({ type: "Increment" })
                            dispatch({ type: "ToggleShowText" })
                        }}
                    >
                        Click Here
                    </Button>
                </Card.Body>
                <Card.Footer className="text-muted">2nd Task </Card.Footer>
            </Card>

            <Card bg='primary' style={{ width: '18rem' }} className="text-center m-4">
                <Card.Header>Input Number</Card.Header>
                <Card.Body>
                    <Card.Title>{inputNumber}</Card.Title>
                    <Card.Text>
                    {inputNumber ? <p>This is {inputNumber} divisible by 3</p> : <p>This is {inputNumber}, divisible by 5</p>}
                    </Card.Text>
                    <input type="number" placeholder='Enter number...' onChange={showABC} />
                   
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>

        </>
    )
}

export default Tasks