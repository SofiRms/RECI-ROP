import React from "react"
import { HistorDonar } from "../Components/HistorDonar"
import { InitDonar } from "../Components/InitDonar"
import { SecPeticion } from "../Components/SecPeticion"

import { Row, Col} from 'react-bootstrap'

import { NavbarLogged } from "../Components/NavbarLogged"
import { Scroll } from "../Components/scroll"
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

