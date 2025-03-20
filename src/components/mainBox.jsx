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
                bg: <img src={char_star[0].bg} style={{
                  marginTop: "-405px",
                  marginLeft: "-200px",
                  width: "130%",
                  opacity: "0.17"
                }} />,
                portrait: <img src={char_star[0].prtSrc} style={{ 
                  width: "115%",
                  position: "absolute",
                  top: "-40px",
                  left: "170px",
                  zIndex:1000}} />,
                psyName1: char_star[0].psyName1,
                psyName2: char_star[0].psyName2,
                psy1: <img src={char_star[0].psySrc1} style={{
                  width: "90%",}} 
                  />,
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
                bg: <img src={char_star[1].bg} style={{
                  marginTop: "-450px",
                  width: "120%",
                  opacity: "0.15"
                }} />,
                portrait: <img src={char_star[1].prtSrc} style={{ 
                  width: "105%",
                  position: "absolute",
                  top: "-40px",
                  left: "140px"}} />,
                psyName1: char_star[1].psyName1,
                psyName2: char_star[1].psyName2,
                psy1: <img src={char_star[1].psySrc1} style={{
                  width: "90%",}} 
                  />,
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
                bg: <img src={char_star[2].bg} style={{
                  marginTop: "-30px",
                  width: "110%",
                  marginLeft: "-80px",
                  opacity: "0.16"
                }} />,
                portrait: <img src={char_star[2].prtSrc} style={{ 
                  width: "115%",
                  position: "absolute",
                  top: "-50px",
                  left: "140px"}} />,
                psyName1: char_star[2].psyName1,
                psyName2: char_star[2].psyName2,
                psy1: <img src={char_star[2].psySrc1} style={{
                  width: "90%",}} 
                  />,
                psy2: char_star[2].psySrc2,
                emo: char_star[2].emo,
                res1: char_star[2].res1,
                res2: char_star[2].res2,
                res3: char_star[2].res3,
                resName1 : char_star[2].resName1,
                resName2 : char_star[2].resName2,
                resName3 : char_star[2].resName3,
                resPattern: char_star[2].resPattern,
                resPatternName: char_star[2].resPatternName,
                resPatternText: char_star[2].resPatternText,
                party_1_1: <img style={{width: "95%", borderRadius: "5px", marginTop: -2}}
                            src={char_star[2].party_1_1}></img>,
                party_1_2: <img style={{width: "95%", borderRadius: "5px", marginTop:-1}}
                            src={char_star[2].party_1_2}></img>,
                party_1_3: <img style={{width: "95%", height: "72%", borderRadius: "5px", marginTop: 1}}
                            src={char_star[2].party_1_3}></img>,
                party_1_4: <img style={{width: "95%", borderRadius: "5px"}}
                            src={char_star[2].party_1_4}></img>,
                partyName1: '서브딜',
                party_2_1: <img style={{width: "95%", borderRadius: "5px", marginTop: -2}}
                            src={char_star[2].party_2_1}></img>,
                party_2_2: <img style={{width: "95%", height: "72%", borderRadius: "5px", marginTop:1}}
                            src={char_star[2].party_2_2}></img>,
                party_2_3: <img style={{width: "95%", borderRadius: "5px", marginTop:-1}}
                            src={char_star[2].party_2_3}></img>,
                party_2_4: <img style={{width: "95%", height: "72%", borderRadius: "5px", marginTop: 1}} 
                            src={char_star[2].party_2_4}></img>,
                partyName2: '다수 조합'
              })}/>
            </Col >
            <Col md={2}>
              <img src={char_star[3].src} style={{height: "299px"}} onClick={() => handleImageClick({
                bg: <img src={char_star[3].bg} style={{
                  marginTop: "-400px",
                  marginLeft: "-50px",
                  width: "160%",
                  opacity: "0.2"
                }} />,
                portrait: <img src={char_star[3].prtSrc} style={{ 
                  width: "70%",
                  position: "absolute",
                  top: "-60px",
                  left: "180px"}} />,
                psyName1: char_star[3].psyName1,
                psyName2: char_star[3].psyName2,
                psy1: <img src={char_star[3].psySrc1} style={{
                  width: "90%",}} 
                  />,
                psy2: char_star[3].psySrc2,
                emo: char_star[3].emo,
                res1: char_star[3].res1,
                res2: char_star[3].res2,
                res3: char_star[3].res3,
                resName1 : char_star[3].resName1,
                resName2 : char_star[3].resName2,
                resName3 : char_star[3].resName3,
                resPattern: char_star[3].resPattern,
                resPatternName: char_star[3].resPatternName,
                resPatternText: char_star[3].resPatternText,
                party_1_1: <img style={{width: "95%", borderRadius: "5px", marginTop: -2}}
                            src={char_star[3].party_1_1}></img>,
                party_1_2: <img style={{width: "95%", borderRadius: "5px", marginTop:-1}}
                            src={char_star[3].party_1_2}></img>,
                party_1_3: <img style={{width: "95%", height: "72%", borderRadius: "5px", marginTop: 1}}
                            src={char_star[3].party_1_3}></img>,
                party_1_4: <img style={{width: "95%", borderRadius: "5px"}}
                            src={char_star[3].party_1_4}></img>,
                partyName1: '단일 조합',
                party_2_1: <img style={{width: "95%", borderRadius: "5px", marginTop: -2}}
                            src={char_star[3].party_2_1}></img>,
                party_2_2: <img style={{width: "95%", height: "72%", borderRadius: "5px", marginTop:1}}
                            src={char_star[3].party_2_2}></img>,
                party_2_3: <img style={{width: "95%", borderRadius: "5px", marginTop:-1}}
                            src={char_star[3].party_2_3}></img>,
                party_2_4: <img style={{width: "95%", height: "72%", borderRadius: "5px", marginTop: 1}} 
                            src={char_star[3].party_2_4}></img>,
                partyName2: '다수 조합'
              })}/>
            </Col >
            <Col md={2}>
              <img src={char_star[4].src} style={{height: "299px"}} onClick={() => handleImageClick({
                bg: <img src={char_star[4].bg} style={{
                  marginTop: "-600px",
                  marginLeft: "-80px",
                  width: "180%",
                  opacity: "0.14"
                }} />,
                portrait: <img src={char_star[4].prtSrc} style={{ 
                  width: "130%",
                  position: "absolute",
                  top: "-50px",
                  left: "100px"}} />,
                psyName1: char_star[4].psyName1,
                psyName2: char_star[4].psyName2,
                psy1: <img src={char_star[4].psySrc1} style={{
                  width: "85%",
                  marginTop: -10
                }} 
                  />,
                psy2: char_star[4].psySrc2,
                emo: char_star[4].emo,
                res1: char_star[4].res1,
                res2: char_star[4].res2,
                res3: char_star[4].res3,
                resName1 : char_star[4].resName1,
                resName2 : char_star[4].resName2,
                resName3 : char_star[4].resName3,
                resPattern: char_star[4].resPattern,
                resPatternName: char_star[4].resPatternName,
                resPatternText: char_star[4].resPatternText,
                party_1_1: <img style={{width: "95%", borderRadius: "5px", marginTop: -2}}
                            src={char_star[4].party_1_1}></img>,
                party_1_2: <img style={{width: "95%", borderRadius: "5px", marginTop:-1}}
                            src={char_star[4].party_1_2}></img>,
                party_1_3: <img style={{width: "95%", height: "72%", borderRadius: "5px", marginTop: 1}}
                            src={char_star[4].party_1_3}></img>,
                party_1_4: <img style={{width: "95%", borderRadius: "5px"}}
                            src={char_star[4].party_1_4}></img>,
                partyName1: '단일 조합',
                party_2_1: <img style={{width: "95%", borderRadius: "5px", marginTop: -2}}
                            src={char_star[4].party_2_1}></img>,
                party_2_2: <img style={{width: "95%", height: "72%", borderRadius: "5px", marginTop:1}}
                            src={char_star[4].party_2_2}></img>,
                party_2_3: <img style={{width: "95%", borderRadius: "5px", marginTop:-1}}
                            src={char_star[4].party_2_3}></img>,
                party_2_4: <img style={{width: "95%", height: "72%", borderRadius: "5px", marginTop: 1}} 
                            src={char_star[4].party_2_4}></img>,
                partyName2: '다수 조합'
              })}/>
            </Col >
            <Col md={2}>
              <img src={char_star[5].src} style={{height: "299px"}} onClick={() => handleImageClick({
                bg: <img src={char_star[5].bg} style={{
                  marginTop: "-600px",
                  marginLeft: "-130px",
                  width: "180%",
                  opacity: "0.14"
                }} />,
                portrait: <img src={char_star[5].prtSrc} style={{ 
                  width: "80%",
                  position: "absolute",
                  top: "-40px",
                  left: "180px"}} />,
                psyName1: char_star[5].psyName1,
                psyName2: char_star[5].psyName2,
                psy1: <img src={char_star[5].psySrc1} style={{
                  width: "90%"
                }} 
                  />,
                psy2: char_star[5].psySrc2,
                emo: char_star[5].emo,
                res1: char_star[5].res1,
                res2: char_star[5].res2,
                res3: char_star[5].res3,
                resName1 : char_star[5].resName1,
                resName2 : char_star[5].resName2,
                resName3 : char_star[5].resName3,
                resPattern: char_star[5].resPattern,
                resPatternName: char_star[5].resPatternName,
                resPatternText: char_star[5].resPatternText,
                party_1_1: <img style={{width: "95%", borderRadius: "5px", marginTop: -2}}
                            src={char_star[5].party_1_1}></img>,
                party_1_2: <img style={{width: "95%", borderRadius: "5px", marginTop:-1}}
                            src={char_star[5].party_1_2}></img>,
                party_1_3: <img style={{width: "95%", height: "72%", borderRadius: "5px", marginTop: 1}}
                            src={char_star[5].party_1_3}></img>,
                party_1_4: <img style={{width: "95%", borderRadius: "5px"}}
                            src={char_star[5].party_1_4}></img>,
                partyName1: '단일 조합',
                party_2_1: <img style={{width: "95%", borderRadius: "5px", marginTop: -2}}
                            src={char_star[5].party_2_1}></img>,
                party_2_2: <img style={{width: "95%", height: "72%", borderRadius: "5px", marginTop:1}}
                            src={char_star[5].party_2_2}></img>,
                party_2_3: <img style={{width: "95%", borderRadius: "5px", marginTop:-1}}
                            src={char_star[5].party_2_3}></img>,
                party_2_4: <img style={{width: "95%", height: "72%", borderRadius: "5px", marginTop: 1}} 
                            src={char_star[5].party_2_4}></img>,
                partyName2: '다수 조합'
              })}/>
            </Col >
          </Row>
          <Row style={{ marginTop: '1vh' }}>
            <Col md={2}>
              <img src={char_star[6].src} style={{height: "299px"}} onClick={() => handleImageClick({
                bg: <img src={char_star[6].bg} style={{
                  marginTop: "-470px",
                  marginLeft: "-200px",
                  width: "180%",
                  opacity: "0.14"
                }} />,
                portrait: <img src={char_star[6].prtSrc} style={{ 
                  width: "130%",
                  position: "absolute",
                  top: "-40px",
                  left: "80px"}} />,
                psyName1: char_star[6].psyName1,
                psyName2: char_star[6].psyName2,
                psy1: <img src={char_star[6].psySrc1} style={{
                  width: "90%"
                }} 
                  />,
                psy2: char_star[6].psySrc2,
                emo: char_star[6].emo,
                res1: char_star[6].res1,
                res2: char_star[6].res2,
                res3: char_star[6].res3,
                resName1 : char_star[6].resName1,
                resName2 : char_star[6].resName2,
                resName3 : char_star[6].resName3,
                resPattern: char_star[6].resPattern,
                resPatternName: char_star[6].resPatternName,
                resPatternText: char_star[6].resPatternText,
                party_1_1: <img style={{width: "95%", borderRadius: "5px", marginTop: -2}}
                            src={char_star[6].party_1_1}></img>,
                party_1_2: <img style={{width: "95%", borderRadius: "5px", marginTop:-1}}
                            src={char_star[6].party_1_2}></img>,
                party_1_3: <img style={{width: "95%", height: "72%", borderRadius: "5px", marginTop: 1}}
                            src={char_star[6].party_1_3}></img>,
                party_1_4: <img style={{width: "95%", borderRadius: "5px"}}
                            src={char_star[6].party_1_4}></img>,
                partyName1: '단일 조합',
                party_2_1: <img style={{width: "95%", borderRadius: "5px", marginTop: -2}}
                            src={char_star[6].party_2_1}></img>,
                party_2_2: <img style={{width: "95%", height: "72%", borderRadius: "5px", marginTop:1}}
                            src={char_star[6].party_2_2}></img>,
                party_2_3: <img style={{width: "95%", borderRadius: "5px", marginTop:-1}}
                            src={char_star[6].party_2_3}></img>,
                party_2_4: <img style={{width: "95%", height: "72%", borderRadius: "5px", marginTop: 1}} 
                            src={char_star[6].party_2_4}></img>,
                partyName2: '다수 조합'
              })}/>
            </Col>
            <Col md={2}>
              <img src={char_star[7].src} style={{height: "299px"}} onClick={() => handleImageClick({
                bg: <img src={char_star[7].bg} style={{
                  marginTop: "-600px",
                  marginLeft: "-310px",
                  width: "180%",
                  opacity: "0.14"
                }} />,
                portrait: <img src={char_star[7].prtSrc} style={{ 
                  width: "210%",
                  position: "absolute",
                  top: "-60px",
                  left: "50px"}} />,
                psyName1: char_star[7].psyName1,
                psyName2: char_star[7].psyName2,
                psy1: <img src={char_star[7].psySrc1} style={{
                  width: "90%"
                }} 
                  />,
                psy2: char_star[7].psySrc2,
                emo: char_star[7].emo,
                res1: char_star[7].res1,
                res2: char_star[7].res2,
                res3: char_star[7].res3,
                resName1 : char_star[7].resName1,
                resName2 : char_star[7].resName2,
                resName3 : char_star[7].resName3,
                resPattern: char_star[7].resPattern,
                resPatternName: char_star[7].resPatternName,
                resPatternText: char_star[7].resPatternText,
                party_1_1: <img style={{width: "95%", borderRadius: "5px", marginTop: -2}}
                            src={char_star[7].party_1_1}></img>,
                party_1_2: <img style={{width: "95%", borderRadius: "5px", marginTop:-1}}
                            src={char_star[7].party_1_2}></img>,
                party_1_3: <img style={{width: "95%", height: "72%", borderRadius: "5px", marginTop: 1}}
                            src={char_star[7].party_1_3}></img>,
                party_1_4: <img style={{width: "95%", borderRadius: "5px"}}
                            src={char_star[7].party_1_4}></img>,
                partyName1: '단일 조합',
                party_2_1: <img style={{width: "95%", borderRadius: "5px", marginTop: -2}}
                            src={char_star[7].party_2_1}></img>,
                party_2_2: <img style={{width: "95%", height: "72%", borderRadius: "5px", marginTop:1}}
                            src={char_star[7].party_2_2}></img>,
                party_2_3: <img style={{width: "95%", borderRadius: "5px", marginTop:-1}}
                            src={char_star[7].party_2_3}></img>,
                party_2_4: <img style={{width: "95%", height: "72%", borderRadius: "5px", marginTop: 1}} 
                            src={char_star[7].party_2_4}></img>,
                partyName2: '다수 조합'
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