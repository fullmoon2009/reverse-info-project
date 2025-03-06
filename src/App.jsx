import { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import { char_star, char_mineral, char_plant } from './data.js';
import { renderMainBox } from './components/mainBox.jsx';

function App() {
  let [pos, setPos] = useState(true);
  let [dsSwitch, setDsSwitch] = useState(false);
  let [clickImageId, setClickImageId] = useState(false);
  let [clickCount, setClickCount] = useState(0);
  let [detailContent, setDetailContent] = useState('');
  let [showDetail, setShowDetail] = useState(false);

  const images = [
    { id: 1, src: "./public/star.png" },
    { id: 2, src: "./public/rock.png" },
    { id: 3, src: "./public/plant.png" },
    { id: 4, src: "./public/beast.png" },
    { id: 5, src: "./public/spirit.png" },
    { id: 6, src: "./public/intellect.png" }
  ];

  const handleImageClick = (id) => {
    setClickImageId(id);
    setDetailContent('dd');
    setShowDetail(true);
  }

  const closeModal = () => {
    setShowDetail(false);
  }


  return (
    <div className='App'>
      <div className={`motiv-box ${pos ? 'setPosDw' : 'setPosUp'}`}>
        <Row className='justify-content-center'> 
          {images.map((image) => (
            <Col key={image.id} md={2}>
              <img
                src={image.src}
                style={{ width: '100%' }}
                onClick={() => {
                  setClickCount(clickCount + 1);
                  setClickImageId(image.id);
                  setPos(!pos);
                  setDsSwitch(!dsSwitch);
                }}

                className={
                  clickCount % 2 === 0
                    ? 'show'
                    : (image.id == clickImageId && clickCount % 2 != 0)
                      ? 'show'
                      : 'hide'
                }
              />
            </Col>
          ))}
        </Row>
      </div>



      <div className={`main-box ${dsSwitch == false ? 'hide' : 'show'}`}>
            <Container>
              {renderMainBox(clickImageId)}
            </Container>
      </div>    

      {
        showDetail && (
          <div className='modal-overlay' onClick={closeModal}>
            <div className='modal-content'>
              <h3>content</h3>
              <button onClick={closeModal}>close</button>
            </div>
          </div>
        )
      }



    </div>
  )
}

export default App
