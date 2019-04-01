import React, { Component } from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import './index.css';
import dog1 from "../images/dog1.PNG";
import dog2 from "../images/dog2.PNG";
import dog3 from "../images/dogs3.PNG";
import dog4 from "../images/dog4.PNG";
import dog5 from "../images/dog5.PNG";
import cat1 from "../images/cat1.jpg";
import cat2 from "../images/cat2.PNG";


const CarouselHome = () => {
  return (
    <MDBContainer>
      <h4 className="mt-5 mb-2">Meet some of our friends!</h4>
      <MDBCarousel activeItem={1} length={7} showControls={false} showIndicators={true} className="z-depth-1">
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img className="d-block w-100" src={dog3} alt="dog" />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive"></h3>
              <p></p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img className="d-block w-100" src={dog2} alt="dog" />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive"></h3>
              <p></p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img className="d-block w-100" src={dog1} alt="dog" />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive"></h3>
              <p></p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img className="d-block w-100" src={dog4} alt="dog" />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive"></h3>
              <p></p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="5">
            <MDBView>
              <img className="d-block w-100" src={dog5} alt="dog" />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive"></h3>
              <p></p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="6">
            <MDBView>
              <img className="d-block w-100" src={cat1} alt="cat" />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive"></h3>
              <p></p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="7">
            <MDBView>
              <img className="d-block w-100" src={cat2} alt="cat" />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive"></h3>
              <p></p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselHome;
