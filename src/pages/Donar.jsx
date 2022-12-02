import React from "react"
import { HistorDonar,Scroll, SecPeticion,NavbarLogged } from "../Components"
import { Row, Col} from 'react-bootstrap'

export const Donar = () =>{


    return(
        <>
        <NavbarLogged/>
        <div >
        <Row>
          <Col><section className="">
              <InitDonar/>
              <HistorDonar/>
            </section>
          </Col>
          <Col> <section className="">
             <Scroll>
             <SecPeticion/>
             </Scroll>
            </section>
          </Col>
        </Row>
          
         
        </div>
      </>
    )
}