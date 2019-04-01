import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './index.css';

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4 foot rounded">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4 offset-1">
            <h5 className="title">Areas we service:</h5>
            <p>
              Acton, Ayer, Boxboro, Concord, Harvard, Lincoln, Littleton, Maynard, Shirley, Sudbury, Wayland, Westford, and more.
              Just call or email to confirm.
            </p>
          </MDBCol>
          <MDBCol md="4 offset-2">
            <h5 className="title">Get in touch to set up a meeting!</h5>
            <ul>
              <li className="list-unstyled">
                1.(857).231.1041
              </li>
              <li className="list-unstyled">
                <a href="mailto:kettspets@gmail.com">kettspets@gmail.com</a>
              </li>
              <li className="list-unstyled">

              </li>
              <li className="list-unstyled">

              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3 rounded">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} <a className="foot-a" href="/"> Kett's Pets </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
