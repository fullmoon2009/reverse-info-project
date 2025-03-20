import React from "react";
import "../App.css";
import { Row, Col } from "react-bootstrap";

const Modal = ({ onClose, content }) => {
  if (!content) return null;

  return (
    <div className="modal-background" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose} style={{zIndex:1000}}>✖</button>
        {content.bg}
        
        {/* image box */}
        <div style={{ 
            width: "230px", 
            height: "430px",
            position: "absolute",
            top: "70px",
            left: "20px" }}>
            <img src="./public/backg.png" style={{ width: "160%"}} />
            {content.portrait}
        </div>

        {/* weapon box */}
        <div style={{
            border: "thick double dimgrey", 
            width: "450px",
            position: "absolute",
            left: "40%",
            top: "70px",
            height: "200px",
            display: "flex"}}>

            {/* weapon 1 name */}
            <div style={{
              position: "absolute",
              // border: "1px solid dimgrey",
              width: "50%",
              height: "30px"
            }}>
              <p style={{marginTop: "3px"}}>{content.psyName1}</p>
            </div>
            
            {/* weapon 1 */}
            <div style={{
              borderTop: "1px solid dimgrey",
              width: "50%",
              marginTop: "30px"
            }}>
              {content.psy1}
            </div>

            {/* weapon 2 name */}
            <div style={{
              position: "absolute",
              // border: "1px solid dimgrey",
              width: "50%",
              height: "30px",
              left: "50%"
            }}>
              <p style={{marginTop: "3px"}}>{content.psyName2}</p>
            </div>

            {/* weapon 2 */}
            <div style={{
              borderLeft: "1px solid dimgrey",
              borderTop: "1px solid dimgrey",
              width: "50%",
              left: "50%",
              marginTop: "30px"
            }}>
              <img src={content.psy2} style={{
                width: "90%",}}/>
            </div>
        </div>

        {/* resonance change box */}
        <div style={{
          position: "absolute",
          border: "thick double dimgrey",
          height : "200px",
          width: "140px",
          top: "70px",
          right: "51px",
          display: "flex"
        }}>

          {/* resonance change 1 name */}
          <div style={{
            position: "absolute",
            width: "100%",
            height: "30px"
          }}>
            <p style={{marginTop: "3px"}}>{content.resPatternName}</p>
          </div>
            
          {/* resonance change 1 */}
          <div style={{
            borderTop: "1px solid dimgrey",
            width: "100%",
            marginTop: "30px"
          }}>
            <img src={content.resPattern} style={{width: "90%", marginTop: "10px"}}/>
            <p style={{fontSize: 13, color:"lightgrey", marginTop: "5px"}}>{content.resPatternText}</p>
          </div>
        </div>

        {/* resonance box */}
        <div style={{
          position: "absolute",
          border: "thick double dimgrey",
          height: "220px",
          width: "607px",
          top: "290px",
          left: "40%",
          display: "flex"
        }}>

          {/* resonance 1 name */}
          <div style={{
              position: "absolute",
              borderBottom: "1px solid dimgrey",
              width: "calc(100% / 3)",
              height: "30px"
            }}>
              <p style={{marginTop: "3px"}}>{content.resName1}</p>
            </div>

          {/* resonance 1 */}
          <div style={{
            borderRight: "1px solid dimgrey",
            width: "calc(100% / 3)",
            marginTop: "30px"
          }}>
            <img src={content.res1} style={{width: "90%", marginTop:15, cursor: "pointer"}} onClick={() => window.open(content.res1, "_blank", "noopener,noreferrer")}/>
          </div>

          {/* resonance 2 name */}
          <div style={{
              position: "absolute",
              borderBottom: "1px solid dimgrey",
              width: "calc(100% / 3)",
              left: "calc(100% / 3)",
              height: "30px"
            }}>
              <p style={{marginTop: "3px"}}>{content.resName2}</p>
            </div>

          {/* resonance 2 */}
          <div style={{
            borderRight: "1px solid dimgrey",
            width: "calc(100% / 3)",
            marginTop: "30px",
          }}>
            <img src={content.res2} style={{width: "85%", marginTop:6, cursor: "pointer"}} onClick={() => window.open(content.res2, "_blank", "noopener,noreferrer")}/>
          </div>

          {/* resonance 3 name */}
          <div style={{
              position: "absolute",
              borderBottom: "1px solid dimgrey",
              width: "calc(100% / 3)",
              right: "0px",
              height: "30px"
            }}>
              <p style={{marginTop: "3px"}}>{content.resName3}</p>
            </div>

          {/* resonance 3 */}
          <div style={{
            width: "calc(100% / 3)",
            marginTop: "30px",
          }}>
            <img src={content.res3} style={{width: "85%", marginTop:5, cursor: "pointer"}} onClick={() => window.open(content.res3, "_blank", "noopener,noreferrer")}/>
          </div>
        </div>
        
      

        {/* party box */}
        <div style={{
          position: "absolute",
          border: "thick double dimgrey",
          height: "270px",
          width: "855px",
          right: "51px",
          bottom:"25px",
          display: "flex"
        }}>

          {/* party 1 name */}
          <div style={{
              position: "absolute",
              borderBottom: "1px solid dimgrey",
              width: "50%",
              height: "30px"
            }}>
              <p style={{marginTop: "3px"}}>{content.partyName1}</p>
            </div>

          {/* party 1 */}
          <div style={{
            borderRight: "1px solid dimgrey",
            width: "50%",
            marginTop: "30px",
        
          }}>
            <Row style={{paddingLeft: "15px",
            paddingRight: "15px", paddingTop: "7px"}}>
              <Col style={{ padding: "0 3px" }}>{content.party_1_1}</Col>
              <Col style={{ padding: "0 3px" }}>{content.party_1_2}</Col>
              <Col style={{ padding: "0 3px" }}>{content.party_1_3}</Col>
              <Col style={{ padding: "0 3px" }}>{content.party_1_4}</Col>
            </Row>
          </div>

          {/* party 2 name */}
          <div style={{
              position: "absolute",
              borderBottom: "1px solid dimgrey",
              width: "50%",
              right: 0,
              height: "30px"
            }}>
              <p style={{marginTop: "3px"}}>{content.partyName2}</p>
            </div>

          {/* party 2 */}
          <div style={{
            width: "50%",
            marginRight: 0,
            marginTop: "30px"
          }}>
            <Row style={{paddingLeft: "15px",
            paddingRight: "15px", paddingTop: "7px"}}>
              <Col style={{ padding: "0 3px" }}>{content.party_2_1}</Col>
              <Col style={{ padding: "0 3px" }}>{content.party_2_2}</Col>
              <Col style={{ padding: "0 3px" }}>{content.party_2_3}</Col>
              <Col style={{ padding: "0 3px" }}>{content.party_2_4}</Col>
            </Row>
          </div>
        </div>

        <p style={{position: "absolute", bottom: -13, left: 300, fontSize: 12}}>*위 조합은 동 역할군 중 가장 고성능 캐릭터를 포함한 조합으로, 비슷한 역할군의 다른 캐릭터로 대체 가능합니다</p>

        <div style={{
          height: "270px",
          width: "150px",
          position: "absolute",
          bottom: "25px"
        }}>
          <img src={content.emo} style={{
            width: "110%",
            marginTop: "40px"}} />
        </div>
        
      </div>
    </div>
  );
};

export default Modal;