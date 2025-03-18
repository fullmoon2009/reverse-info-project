import { useState } from 'react';
import { char_star, char_mineral, char_plant, char_beast, char_spirit, char_intellect } from './../data.js';
import { Container, Row, Col } from 'react-bootstrap'
import Modal from "./detail.jsx";
import "./mainBox.css"




const renderMainBox = (clickImageId, handleImageClick) => {
  switch (clickImageId) {
    case 1:
      return (
        <>
          <Row>
          <Col className='col'>
          <img src={char_star[0].src} style={{height: "299px"}}  onClick={() => handleImageClick({
                bg: char_star[0].src,
                portrait: <img src={char_star[0].prtSrc} style={{ 
                  width: "105%",
                  position: "absolute",
                  top: "-10px",
                  left: "155px"}} />,
                psyName1: char_star[0].psyName1,
                psyName2: char_star[0].psyName2,
                psy1: char_star[0].psySrc1,
                psy2: char_star[0].psySrc2,
                emo: char_star[0].emo,
                res1: char_star[0].res1,
                res2: char_star[0].res2,
                res3: char_star[0].res3,
                resName1 : char_star[0].resName1,
                resName2 : char_star[0].resName2,
                resName3 : char_star[0].resName3,
                resPattern: char_star[0].resPattern,
                resPatternName: char_star[0].resPatternName,
                resPatternText: char_star[0].resPatternText,
                party_1_1: <img style={{width: "95%", borderRadius: "5px"}}
                            src={char_star[0].party_1_1}></img>,
                party_1_2: <img style={{width: "95%", borderRadius: "5px", marginTop:-1}}
                            src={char_star[0].party_1_2}></img>,
                party_1_3: <img style={{width: "95%", borderRadius: "5px"}}
                            src={char_star[0].party_1_3}></img>,
                party_1_4: <img style={{width: "95%", borderRadius: "5px"}}
                            src={char_star[0].party_1_4}></img>,
                partyName1: '바르카롤라 계시덱',
                party_2_1: <img style={{width: "95%", borderRadius: "5px"}}
                            src={char_star[0].party_2_1}></img>,
                party_2_2: <img style={{width: "95%", borderRadius: "5px", marginTop:-1}}
                            src={char_star[0].party_2_2}></img>,
                party_2_3: <img style={{width: "95%", borderRadius: "5px"}}
                            src={char_star[0].party_2_3}></img>,
                party_2_4: <img style={{width: '70%', marginTop: 65}} 
                            src={char_star[0].party_2_4}></img>,
                partyName2: '파티 추천 2'
              })} />
            </Col >
            <Col md={2}>
              <img src={char_star[1].src} style={{height: "299px"}} onClick={() => handleImageClick({
                bg: char_star[1].src,
                portrait: <img src={char_star[1].prtSrc} style={{ 
                  width: "105%",
                  position: "absolute",
                  top: "-40px",
                  left: "140px"}} />,
                psyName1: char_star[1].psyName1,
                psyName2: char_star[1].psyName2,
                psy1: char_star[1].psySrc1,
                psy2: char_star[1].psySrc2,
                emo: char_star[1].emo,
                res1: char_star[1].res1,
                res2: char_star[1].res2,
                res3: char_star[1].res3,
                resName1 : char_star[1].resName1,
                resName2 : char_star[1].resName2,
                resName3 : char_star[1].resName3,
                resPattern: char_star[1].resPattern,
                resPatternName: char_star[1].resPatternName,
                resPatternText: char_star[1].resPatternText,
                party_1_1: <img style={{width: "95%", borderRadius: "5px", marginTop: -2}}
                            src={char_star[1].party_1_1}></img>,
                party_1_2: <img style={{width: "95%", borderRadius: "5px", marginTop:-1}}
                            src={char_star[1].party_1_2}></img>,
                party_1_3: <img style={{width: "95%", height: "72%", borderRadius: "5px", marginTop: 1}}
                            src={char_star[1].party_1_3}></img>,
                party_1_4: <img style={{width: "95%", borderRadius: "5px"}}
                            src={char_star[1].party_1_4}></img>,
                partyName1: '단일 조합',
                party_2_1: <img style={{width: "95%", borderRadius: "5px", marginTop: -2}}
                            src={char_star[1].party_2_1}></img>,
                party_2_2: <img style={{width: "95%", height: "72%", borderRadius: "5px", marginTop:1}}
                            src={char_star[1].party_2_2}></img>,
                party_2_3: <img style={{width: "95%", borderRadius: "5px", marginTop:-1}}
                            src={char_star[1].party_2_3}></img>,
                party_2_4: <img style={{width: "95%", height: "72%", borderRadius: "5px", marginTop: 1}} 
                            src={char_star[1].party_2_4}></img>,
                partyName2: '다수 조합'
              })} />
            </Col >
            <Col md={2}>
              <img src={char_star[2].src} style={{height: "299px"}} onClick={() => handleImageClick({
                title: 'Regulus'
              })}/>
            </Col >
            <Col md={2}>
              <img src={char_star[3].src} style={{height: "299px"}} onClick={() => handleImageClick({
                
              })}/>
            </Col >
            <Col md={2}>
              <img src={char_star[4].src} style={{height: "299px"}} onClick={() => handleImageClick({

              })}/>
            </Col >
            <Col md={2}>
              <img src={char_star[5].src} style={{height: "299px"}} onClick={() => handleImageClick({

              })}/>
            </Col >
          </Row>
          <Row style={{ marginTop: '1vh' }}>
            <Col md={2}>
              <img src={char_star[6].src} style={{height: "299px"}} onClick={() => handleImageClick({

              })}/>
            </Col>
            <Col md={2}>
              <img src={char_star[7].src} style={{height: "299px"}} onClick={() => handleImageClick({
              
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
              <img src={char_mineral[0].src} style={{height: "299px"}} onClick={() => handleImageClick({
          
              })} />
            </Col >
            <Col md={2}>
              <img src={char_mineral[1].src} style={{height: "299px"}} onClick={() => handleImageClick({
          
              })} />
            </Col >
            <Col md={2}>
              <img src={char_mineral[2].src} style={{height: "299px"}} onClick={() => handleImageClick({
          
              })} />
            </Col >
            <Col md={2}>
              <img src={char_mineral[3].src} style={{height: "299px"}} onClick={() => handleImageClick({
          
              })} />
            </Col >
            <Col md={2}>
              <img src={char_mineral[4].src} style={{height: "299px"}} onClick={() => handleImageClick({
          
              })} />
            </Col >
            <Col md={2}>
              <img src={char_mineral[5].src} style={{height: "299px"}} onClick={() => handleImageClick({
          
              })} />
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
              <img src={char_plant[0].src} style={{height: "299px"}} onClick={() => handleImageClick({
          
              })} />
            </Col >
            <Col md={2}>
              <img src={char_plant[1].src} style={{height: "299px"}} onClick={() => handleImageClick({
          
              })} />
            </Col >
            <Col md={2}>
              <img src={char_plant[2].src} style={{height: "299px"}} onClick={() => handleImageClick({
          
              })} />
            </Col >
            <Col md={2}>
              <img src={char_plant[3].src} style={{height: "299px"}} onClick={() => handleImageClick({
          
              })} />
            </Col >
            <Col md={2}>
              <img src={char_plant[4].src} style={{height: "299px"}} onClick={() => handleImageClick({
          
              })} />
            </Col >
            <Col md={2}>
              <img src={char_plant[5].src} style={{height: "299px"}} onClick={() => handleImageClick({
          
              })} />
            </Col >
          </Row>
          <Row style={{ marginTop: '1vh' }}>
            <Col md={2}>
              <img src={char_plant[6].src} style={{height: "299px"}} onClick={() => handleImageClick({
          
              })} />
            </Col >
            <Col md={2}>
              <img src={char_plant[7].src} style={{height: "299px"}} onClick={() => handleImageClick({
          
              })} />
            </Col >
            <Col md={2}>
              <img src={char_plant[8].src} style={{height: "299px"}} onClick={() => handleImageClick({
          
              })} />
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
              <img src={char_beast[0].src} style={{height: "299px"}} onClick={() => handleImageClick({
          
              })} />
            </Col >
            <Col md={2}>
              <img src={char_beast[1].src} style={{height: "299px"}} onClick={() => handleImageClick({
          
              })} />
            </Col >
            <Col md={2}>
              <img src={char_beast[2].src} style={{height: "299px"}} onClick={() => handleImageClick({
          
              })} />
            </Col >
            <Col md={2}>
              <img src={char_beast[3].src} style={{height: "299px"}} onClick={() => handleImageClick({
          
              })} />
            </Col >
            <Col md={2}>
              <img src={char_beast[4].src} style={{height: "299px"}} onClick={() => handleImageClick({
          
              })} />
            </Col >
            <Col md={2}>
              <img src={char_beast[5].src} style={{height: "299px"}} onClick={() => handleImageClick({
          
              })} />
            </Col >
          </Row>
          <Row style={{ marginTop: '1vh' }}>
            <Col md={2}>
              <img src={char_beast[6].src} style={{height: "299px"}} onClick={() => handleImageClick({
          
              })} />
            </Col >
            <Col md={2}>
              <img src={char_beast[7].src} style={{height: "299px"}} onClick={() => handleImageClick({
          
              })} />
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
              <img src={char_spirit[0].src} style={{height: "299px"}} onClick={() => handleImageClick({
          
              })} />
            </Col >
            <Col md={2}>
              <img src={char_spirit[1].src} style={{height: "299px"}} onClick={() => handleImageClick({
          
              })} />
            </Col >
            <Col md={2}>
              <img src={char_spirit[2].src} style={{height: "299px"}} onClick={() => handleImageClick({
          
              })} />
            </Col >
            <Col md={2}>
              <img src={char_spirit[3].src} style={{height: "299px"}} onClick={() => handleImageClick({
          
              })} />
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
              <img src={char_intellect[0].src} style={{height: "299px"}} onClick={() => handleImageClick({
          
              })} />
            </Col >
            <Col md={2}>
              <img src={char_intellect[1].src} style={{height: "299px"}} onClick={() => handleImageClick({
          
              })} />
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