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
          <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}
          onClick={() => handleImageClick({
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
            partyName1: '계시덱',
            party_2_1: <img style={{width: "95%", borderRadius: "5px"}}
                        src={char_star[0].party_2_1}></img>,
            party_2_2: <img style={{width: "95%", borderRadius: "5px", marginTop:-1}}
                        src={char_star[0].party_2_2}></img>,
            party_2_3: <img style={{width: "95%", borderRadius: "5px"}}
                        src={char_star[0].party_2_3}></img>,
            party_2_4: <img style={{width: '70%', marginTop: 65}} 
                        src={char_star[0].party_2_4}></img>,
            partyName2: '파티 추천 2'
          })} >
              <img src={char_star[0].src} style={{ height: "299px", gridArea: "1 / 1" }} 
                
              />
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/star_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />
              

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }}
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>보이저
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Voyager
                </h3>
              </h3>
                  
            </div>
            </Col >
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }} 
            onClick={() => handleImageClick({
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
            })} >
              <img src={char_star[1].src} style={{ height: "299px", gridArea: "1 / 1" }} />
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/star_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>릴리아
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Lilya
                </h3>
              </h3>
                  
            </div>
      
            </Col >
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}
            onClick={() => handleImageClick({
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
            })} >
              <img src={char_star[2].src} style={{ height: "299px", gridArea: "1 / 1" }} 
              />
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/star_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>레굴루스
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Regulus
                </h3>
              </h3>
                  
            </div>
              
            </Col >
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}
            onClick={() => handleImageClick({
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
            })} >
              <img src={char_star[3].src} style={{ height: "299px", gridArea: "1 / 1" }} 
              />
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/star_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>투스 페어리
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Tooth Fairy
                </h3>
              </h3>
                  
            </div>
              
            </Col >
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}
            onClick={() => handleImageClick({
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
            })} >
              <img src={char_star[4].src} style={{ height: "299px", gridArea: "1 / 1" }} 
              />
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/star_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "24px",
                color: "whitesmoke"}}>37
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Thirty-seven
                </h3>
              </h3>
                  
            </div>
              
            </Col >
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}
            onClick={() => handleImageClick({
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
            })} >
              <img src={char_star[5].src} style={{ height: "299px", gridArea: "1 / 1" }} 
              />
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/star_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>에즈라
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Ezra
                </h3>
              </h3>
                  
            </div>
              
            </Col >
          </Row>
          <Row style={{ marginTop: '1vh' }}>
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}
            onClick={() => handleImageClick({
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
            })} >
              <img src={char_star[6].src} style={{ height: "299px", gridArea: "1 / 1" }} 
              />
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/star_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>윈드송
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Windsong
                </h3>
              </h3>
                  
            </div>
            </Col>
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }} 
            onClick={() => handleImageClick({
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
            })} >
              <img src={char_star[7].src} style={{ height: "299px", gridArea: "1 / 1" }} 
                
              />
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/star_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "21px",
                color: "whitesmoke"}}>플러터 페이지
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Flutterpage
                </h3>
              </h3>
                  
            </div>
            </Col >
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}>
              <img src={char_star[8].src} style={{ height: "299px", gridArea: "1 / 1" }} 
                onClick={() => handleImageClick({

                })} 
              />
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/star_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>바르카롤라
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Barcarola
                </h3>
              </h3>
                  
            </div>
            </Col >
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}>
              <img src={char_star[9].src} style={{ height: "299px", gridArea: "1 / 1" }} 
                onClick={() => handleImageClick({

                })} 
              />
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/star_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>양월
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Liang Yue
                </h3>
              </h3>
                  
            </div>
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
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}
            onClick={() => handleImageClick({
              bg: <img src={char_mineral[0].bg} style={{
                marginTop: "-200px",
                marginLeft: "-80px",
                width: "120%",
                opacity: "0.14"
              }} />,
              portrait: <img src={char_mineral[0].prtSrc} style={{ 
                width: "190%",
                position: "absolute",
                top: "-60px",
                left: "10px"}} />,
              psyName1: char_mineral[0].psyName1,
              psyName2: char_mineral[0].psyName2,
              psy1: <img src={char_mineral[0].psySrc1} style={{
                width: "90%"
              }} 
                />,
              psy2: char_mineral[0].psySrc2,
              emo: char_mineral[0].emo,
              res1: char_mineral[0].res1,
              res2: char_mineral[0].res2,
              res3: char_mineral[0].res3,
              resName1 : char_mineral[0].resName1,
              resName2 : char_mineral[0].resName2,
              resName3 : char_mineral[0].resName3,
              resPattern: char_mineral[0].resPattern,
              resPatternName: char_mineral[0].resPatternName,
              resPatternText: char_mineral[0].resPatternText,
              party_1_1: <img style={{width: "95%", height: "72%", borderRadius: "5px", marginTop: 0}}
                          src={char_mineral[0].party_1_1}></img>,
              party_1_2: <img style={{width: "95%", height: "72%", borderRadius: "5px", marginTop:0}}
                          src={char_mineral[0].party_1_2}></img>,
              party_1_3: <img style={{width: "95%", height: "72%", borderRadius: "5px", marginTop: 0}}
                          src={char_mineral[0].party_1_3}></img>,
              party_1_4: <img style={{width: "95%", height: "72%", borderRadius: "5px", marginTop: 0}}
                          src={char_mineral[0].party_1_4}></img>,
              partyName1: '조바벨 반격덱',
              party_2_1: <img style={{width: "95%", height: "72%", borderRadius: "5px", marginTop: 0}}
                          src={char_mineral[0].party_2_1}></img>,
              party_2_2: <img style={{width: '70%', marginTop: 65}} 
                          src={char_mineral[0].party_2_2}></img>,
              partyName2: '힐/탱 요구시 단독 기용 가능'
            })} >
              <img src={char_mineral[0].src} style={{ height: "299px", gridArea: "1 / 1" }} 
                onClick={() => handleImageClick({

                })} 
              />
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/mineral_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>뉴바벨
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Newbabel
                </h3>
              </h3>
              </div>
              
            </Col >
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}>
              <img src={char_mineral[1].src} style={{ height: "299px", gridArea: "1 / 1" }} 
                onClick={() => handleImageClick({

                })} 
              />
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/mineral_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>이터니티
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Eternity
                </h3>
              </h3>
                  
            </div>
            </Col >
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}>
              <img src={char_mineral[2].src} style={{ height: "299px", gridArea: "1 / 1" }} 
                onClick={() => handleImageClick({

                })} 
              />
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/mineral_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>피클즈
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Pickles
                </h3>
              </h3>
                  
            </div>
          
            </Col >
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}>
              <img src={char_mineral[3].src} style={{ height: "299px", gridArea: "1 / 1" }} 
                onClick={() => handleImageClick({

                })} 
              />
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/mineral_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>갈라보나
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Kaala Bauna
                </h3>
              </h3>
                  
            </div>
            </Col >
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}>
              <img src={char_mineral[4].src} style={{ height: "299px", gridArea: "1 / 1" }} 
                onClick={() => handleImageClick({

                })} 
              />
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/mineral_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>곡랑
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Jiu Niangzi
                </h3>
              </h3>
                  
            </div>
            </Col >
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}>
              <img src={char_mineral[5].src} style={{ height: "299px", gridArea: "1 / 1" }} 
                onClick={() => handleImageClick({

                })} 
              />
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/mineral_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>제멜바이스
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Semmelweiss
                </h3>
              </h3>
            </div>
            </Col >
          </Row>
          <Row style={{ marginTop: '1vh' }}>
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}>
              <img src={char_mineral[6].src} style={{ height: "299px", gridArea: "1 / 1" }} 
                onClick={() => handleImageClick({

                })} 
              />
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/mineral_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>파투투
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Patutu
                </h3>
              </h3>
                  
            </div>
            </Col>
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}>
              <img src={char_mineral[7].src} style={{ height: "299px", gridArea: "1 / 1" }} 
                onClick={() => handleImageClick({

                })} 
              />
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/mineral_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>레콜레타
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Recoleta
                </h3>
              </h3>
                  
            </div>
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
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}
            onClick={() => handleImageClick({

            })} >
              <img src={char_plant[0].src} style={{ height: "299px", gridArea: "1 / 1" }}/>
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/mineral_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>드루비스
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Druvis III
                </h3>
              </h3>
                  
            </div>
            </Col >
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}
            onClick={() => handleImageClick({

            })} >
              <img src={char_plant[1].src} style={{ height: "299px", gridArea: "1 / 1" }}/>
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/mineral_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>안안 리
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>An-an Li
                </h3>
              </h3>
                  
            </div>
            </Col >
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}
            onClick={() => handleImageClick({

            })} >
              <img src={char_plant[2].src} style={{ height: "299px", gridArea: "1 / 1" }}/>
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/mineral_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>소더비
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Sotheby
                </h3>
              </h3>
                  
            </div>
            </Col >
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}
            onClick={() => handleImageClick({

            })} >
              <img src={char_plant[3].src} style={{ height: "299px", gridArea: "1 / 1" }}/>
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/mineral_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>제시카
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Jessica
                </h3>
              </h3>
                  
            </div>
            </Col >
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}
            onClick={() => handleImageClick({

            })} >
              <img src={char_plant[4].src} style={{ height: "299px", gridArea: "1 / 1" }}/>
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/mineral_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>마커스
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Marcus
                </h3>
              </h3>
                  
            </div>
            </Col >
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}
            onClick={() => handleImageClick({

            })} >
              <img src={char_plant[5].src} style={{ height: "299px", gridArea: "1 / 1" }}/>
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/mineral_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>빌라
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Вила
                </h3>
              </h3>
                  
            </div>
            </Col >
          </Row>
          <Row style={{ marginTop: '1vh' }}>
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}
            onClick={() => handleImageClick({

            })} >
              <img src={char_plant[6].src} style={{ height: "299px", gridArea: "1 / 1" }}/>
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/mineral_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>카카니아
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Kakania
                </h3>
              </h3>
                  
            </div>
            </Col >
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}
            onClick={() => handleImageClick({

            })} >
              <img src={char_plant[7].src} style={{ height: "299px", gridArea: "1 / 1" }}/>
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/mineral_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>아르고스
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Argus
                </h3>
              </h3>
                  
            </div>
            </Col >
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}
            onClick={() => handleImageClick({

            })} >
              <img src={char_plant[8].src} style={{ height: "299px", gridArea: "1 / 1" }}/>
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/mineral_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>윌로우
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Willow
                </h3>
              </h3>
                  
            </div>
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
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}
            onClick={() => handleImageClick({

            })} >
              <img src={char_beast[0].src} style={{ height: "299px", gridArea: "1 / 1" }}/>
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/beast_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>센츄리온
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Centurion
                </h3>
              </h3>
                  
            </div>
            </Col >
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}
            onClick={() => handleImageClick({

            })} >
              <img src={char_beast[1].src} style={{ height: "299px", gridArea: "1 / 1" }}/>
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/beast_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>메디슨 포켓
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Medicine Pocket
                </h3>
              </h3>
                  
            </div>
            </Col >
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}
            onClick={() => handleImageClick({

            })} >
              <img src={char_beast[2].src} style={{ height: "299px", gridArea: "1 / 1" }}/>
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/beast_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>멜라니아
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Melania
                </h3>
              </h3>
                  
            </div>
            </Col >
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}
            onClick={() => handleImageClick({

            })} >
              <img src={char_beast[3].src} style={{ height: "299px", gridArea: "1 / 1" }}/>
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/beast_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>갈기 모래
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Shamane
                </h3>
              </h3>
                  
            </div>
            </Col >
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}
            onClick={() => handleImageClick({

            })} >
              <img src={char_beast[4].src} style={{ height: "299px", gridArea: "1 / 1" }}/>
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/beast_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>스파토데아
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Spathodea
                </h3>
              </h3>
                  
            </div>
            </Col >
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}
            onClick={() => handleImageClick({

            })} >
              <img src={char_beast[5].src} style={{ height: "299px", gridArea: "1 / 1" }}/>
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/beast_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>갈천
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Getian
                </h3>
              </h3>
                  
            </div>
            </Col >
          </Row>
          <Row style={{ marginTop: '1vh' }}>
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}
            onClick={() => handleImageClick({

            })} >
              <img src={char_beast[6].src} style={{ height: "299px", gridArea: "1 / 1" }}/>
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/beast_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>J
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>J
                </h3>
              </h3>
                  
            </div>
            </Col >
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}
            onClick={() => handleImageClick({

            })} >
              <img src={char_beast[7].src} style={{ height: "299px", gridArea: "1 / 1" }}/>
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/beast_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>안조 날라
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Anjo Nala
                </h3>
              </h3>
                  
            </div>
            </Col >
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}
            onClick={() => handleImageClick({

            })} >
              <img src={char_beast[8].src} style={{ height: "299px", gridArea: "1 / 1" }}/>
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/beast_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>로페라
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Lopera
                </h3>
              </h3>
                  
            </div>
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
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}
            onClick={() => handleImageClick({

            })} >
              <img src={char_spirit[0].src} style={{ height: "299px", gridArea: "1 / 1" }}/>
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/spirit_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>A 나이트
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>A Knight
                </h3>
              </h3>
                  
            </div>
            </Col >
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}
            onClick={() => handleImageClick({

            })} >
              <img src={char_spirit[1].src} style={{ height: "299px", gridArea: "1 / 1" }}/>
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/spirit_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>이졸데
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Isolde
                </h3>
              </h3>
                  
            </div>
            </Col >
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}
            onClick={() => handleImageClick({

            })} >
              <img src={char_spirit[2].src} style={{ height: "299px", gridArea: "1 / 1" }}/>
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/spirit_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>머큐리아
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Mercuria
                </h3>
              </h3>
                  
            </div>
            </Col >
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}
            onClick={() => handleImageClick({

            })} >
              <img src={char_spirit[3].src} style={{ height: "299px", gridArea: "1 / 1" }}/>
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="/spirit_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>튜즈데이
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Tuesday
                </h3>
              </h3>
                  
            </div>
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
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}
            onClick={() => handleImageClick({

            })} >
              <img src={char_intellect[0].src} style={{ height: "299px", gridArea: "1 / 1" }}/>
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="intellect_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>6
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Six
                </h3>
              </h3>
                  
            </div>
            </Col >
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}
            onClick={() => handleImageClick({

            })} >
              <img src={char_intellect[1].src} style={{ height: "299px", gridArea: "1 / 1" }}/>
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="intellect_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>루시
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Lucy
                </h3>
              </h3>
                  
            </div>
            </Col >
            <Col md={2}>
            <div className='char-box' style={{ display: "grid", placeItems: "center", position: "relative" }}
            onClick={() => handleImageClick({

            })} >
              <img src={char_intellect[2].src} style={{ height: "299px", gridArea: "1 / 1" }}/>
              <img src="/char_img_bg.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "135%", 
                  height: "60%",
                  marginBottom: -140, 
                  opacity: 1 
                }} 
              />

              <img src="intellect_career.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "21%", 
                  height: "16%",
                  marginBottom: 250,
                  marginLeft: -90, 
                }} 
              />

              <img src="/char_kapaidi.png" alt="" 
                style={{ 
                  gridArea: "1 / 1", 
                  width: "98%", 
                  height: "98%",
                  marginBottom: 1,
                  marginLeft: 0, 
                  zIndex: -10
                }} 
              />

              <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-200px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "23px",
                color: "whitesmoke"}}>알레프
                <h3 style={{
                gridArea: "1 / 1", 
                marginBottom: "-220px",
                zIndex: 30,
                fontFamily: "Nanum Myeongjo, serif",
                fontWeight: "600",
                fontSize: "10px",
                color: "whitesmoke"}}>Aleph
                </h3>
              </h3>
                  
            </div>
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