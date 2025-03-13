import { useState } from 'react';
import { char_star, char_mineral, char_plant, char_beast, char_spirit, char_intellect } from './../data.js';
import { Container, Row, Col } from 'react-bootstrap'
import Modal from "./detail.jsx";




const renderMainBox = (clickImageId, handleImageClick) => {
  switch (clickImageId) {
    case 1:
      return (
        <>
          <Row>
            <Col md={2}>
              <img src={char_star[0].src} onClick={() => handleImageClick({
                bg: char_star[0].src,
                portrait: char_star[0].prtSrc,
                psyName1: char_star[0].psyName1,
                psyName2: char_star[0].psyName2,
                psy1: char_star[0].psySrc1,
                psy2: char_star[0].psySrc2,
                emo: char_star[0].emo,
              })} />
            </Col >
            <Col md={2}>
              <img src={char_star[1].src} onClick={() => handleImageClick({
                image: "./public/backg.png"
            
              })} />
            </Col >
            <Col md={2}>
              <img src={char_star[2].src} onClick={() => handleImageClick({
                title: 'Regulus'
              })}/>
            </Col >
            <Col md={2}>
              <img src={char_star[3].src} onClick={() => handleImageClick({
                
              })}/>
            </Col >
            <Col md={2}>
              <img src={char_star[4].src} onClick={() => handleImageClick({

              })}/>
            </Col >
            <Col md={2}>
              <img src={char_star[5].src} onClick={() => handleImageClick({

              })}/>
            </Col >
          </Row>
          <Row style={{ marginTop: '1vh' }}>
            <Col md={2}>
              <img src={char_star[6].src} onClick={() => handleImageClick({

              })}/>
            </Col>
            <Col md={2}>
              <img src={char_star[7].src} onClick={() => handleImageClick({
              
              })}/>
            </Col >
            <Col md={2}>
            </Col >
            <Col md={2}>
            </Col >
            <Col md={2}>
            </Col >
          </Row>
        </>
      );

    case 2:
      return (
        <>
          <Row>
            <Col md={2}>
              <img src={char_mineral[0].src} />
            </Col >
            <Col md={2}>
              <img src={char_mineral[1].src} />
            </Col >
            <Col md={2}>
              <img src={char_mineral[2].src} />
            </Col >
            <Col md={2}>
              <img src={char_mineral[3].src} />
            </Col >
            <Col md={2}>
              <img src={char_mineral[4].src} />
            </Col >
            <Col md={2}>
              <img src={char_mineral[5].src} />
            </Col >
          </Row>
          <Row style={{ marginTop: '1vh' }}>
            <Col md={2}>
            </Col>
            <Col md={2}>
            </Col >
            <Col md={2}>
            </Col >
            <Col md={2}>
            </Col >
            <Col md={2}>
            </Col >
          </Row>
        </>
      )

    case 3:
      return (
        <>
          <Row>
            <Col md={2}>
              <img src={char_plant[0].src} />
            </Col >
            <Col md={2}>
              <img src={char_plant[1].src} />
            </Col >
            <Col md={2}>
              <img src={char_plant[2].src} />
            </Col >
            <Col md={2}>
              <img src={char_plant[3].src} />
            </Col >
            <Col md={2}>
              <img src={char_plant[4].src} />
            </Col >
            <Col md={2}>
              <img src={char_plant[5].src} />
            </Col >
          </Row>
          <Row style={{ marginTop: '1vh' }}>
            <Col md={2}>
              <img src={char_plant[6].src} />
            </Col>
            <Col md={2}>
              <img src={char_plant[7].src} />
            </Col >
            <Col md={2}>
              <img src={char_plant[8].src} />
            </Col >
            <Col md={2}>
            </Col >
            <Col md={2}>
            </Col >
          </Row>
        </>
      )

    case 4:
      return (
        <>
          <Row>
            <Col md={2}>
              <img src={char_beast[0].src} />
            </Col >
            <Col md={2}>
              <img src={char_beast[1].src} />
            </Col >
            <Col md={2}>
              <img src={char_beast[2].src} />
            </Col >
            <Col md={2}>
              <img src={char_beast[3].src} />
            </Col >
            <Col md={2}>
              <img src={char_beast[4].src} />
            </Col >
            <Col md={2}>
              <img src={char_beast[5].src} />
            </Col >
          </Row>
          <Row style={{ marginTop: '1vh' }}>
            <Col md={2}>
              <img src={char_beast[6].src} />
            </Col>
            <Col md={2}>
              <img src={char_beast[7].src} />
            </Col >
            <Col md={2}>
            </Col >
            <Col md={2}>
            </Col >
            <Col md={2}>
            </Col >
          </Row>
        </>
      )

    case 5:
      return (
        <>
          <Row>
            <Col md={2}>
              <img src={char_spirit[0].src} />
            </Col >
            <Col md={2}>
              <img src={char_spirit[1].src} />
            </Col >
            <Col md={2}>
              <img src={char_spirit[2].src} />
            </Col >
            <Col md={2}>
              <img src={char_spirit[3].src} />
            </Col >
            <Col md={2}>
            </Col >
            <Col md={2}>
            </Col >
          </Row>
          <Row style={{ marginTop: '1vh' }}>
            <Col md={2}>
            </Col>
            <Col md={2}>
            </Col >
            <Col md={2}>
            </Col >
            <Col md={2}>
            </Col >
            <Col md={2}>
            </Col >
          </Row>
        </>
      )

    case 6:
      return (
        <>
          <Row>
            <Col md={2}>
              <img src={char_intellect[0].src} />
            </Col >
            <Col md={2}>
              <img src={char_intellect[1].src} />
            </Col >
            <Col md={2}>
            </Col >
            <Col md={2}>
            </Col >
            <Col md={2}>
            </Col >
            <Col md={2}>
            </Col >
          </Row>
          <Row style={{ marginTop: '1vh' }}>
            <Col md={2}>
            </Col>
            <Col md={2}>
            </Col >
            <Col md={2}>
            </Col >
            <Col md={2}>
            </Col >
            <Col md={2}>
            </Col >
          </Row>
        </>
      )
  }
}

export { renderMainBox };