import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import { Footer} from 'react-bootstrap'

const Footer = () => {
  return (
    <footer >
      <Container >
        <Row>
          <Col className=' text-center py-3 '>
            Copyright &copy; {new Date().getFullYear()} ReactApp |

            {""} All Rights Reserved | Powered By {""}
            <a
              href="https://www.google.com" target="_blank" rel="noopener noreferrer"
              style={{ cursor: "pointer" }} title="Visit The Site"
            >
              Lokinder007
            </a>
          </Col>
        </Row>
      </Container>
    </footer>

  )
}

export default Footer