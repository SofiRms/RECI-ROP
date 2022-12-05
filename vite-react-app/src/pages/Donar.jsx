import React from "react"
import { HistorDonar,InitDonar ,SecPeticion,Scroll} from "../components"
import { NavBar } from "../ui/NavBar"
import { Row, Col} from 'react-bootstrap'


export const Donar = () =>{


    return(
        <>
        <NavBar/>
        <div >
        <Row>
          <Col><section className="container">
              <InitDonar/>
              
            </section>
          </Col>
          <Col>
              <section className="container">
                <HistorDonar/>
              </section>
          </Col>
        </Row>
          
         
        </div>
      </>
    )
}

