import React, { useState } from 'react';
import { MDBTabsPane, MDBTabsContent, MDBTabsLink, MDBTabsItem, MDBTabs, MDBCard, MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput, MDBCheckbox, MDBCardBody, MDBCardHeader } from 'mdb-react-ui-kit';
import './LoginRegister.css';
import pic from '../assets/SignIn_vectorPic.svg';
import { Link } from 'react-router-dom';



const LoginRegister = () => {

  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  return (

    <MDBContainer fluid className="p-5 my-5 d-flex align-items-center justify-content-center">

      <MDBRow className="d-flex align-items-center justify-content-center">

        <MDBCol col='10' md='5'>
          <img src={pic} className="img-fluid" alt="Vector Pic" />
        </MDBCol>

        <MDBCol col='4' md='6'>

          <MDBCard className="border my-5 square br-custom">

            <MDBCardHeader border='0'>
              <MDBTabs justify className='pt-5 mb-3 d-flex flex-row justify-content-between'>
                <MDBTabsItem>
                  <MDBTabsLink className='text-capitalize' onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                    Log In
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink className='text-capitalize' onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                    Sign up
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>
            </MDBCardHeader>


            <MDBCardBody className="p-5">


              <MDBTabsContent>

                <MDBTabsPane show={justifyActive === 'tab1'}>

                  <MDBInput wrapperClass='mb-4' label='Email' id='formControlLg' type='email' size="lg" />
                  <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" />

                  <Link to='/home'>
                    <div className='text-center text-md-start mt-4 pt-2 d-grid'>
                      <MDBBtn className="mb-0 px-5 text-capitalize" size='lg'>Log In</MDBBtn>
                    </div>
                  </Link>

                  <div className="d-flex justify-content-between mt-4 pt-2">
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                  </div>

                </MDBTabsPane>

                <MDBTabsPane show={justifyActive === 'tab2'}>

                  <MDBInput wrapperClass='mb-4' label='Full Name' id='formControlLg' type='name' size="lg" />
                  <MDBInput wrapperClass='mb-4' label='Email' id='formControlLg' type='email' size="lg" />
                  <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" />

                  <Link to='/home'>
                    <div className='text-center text-md-start mt-4 pt-2 d-grid'>
                      <MDBBtn className="mb-0 px-5 text-capitalize" size='lg'>Sign up</MDBBtn>
                    </div>
                  </Link>

                  <div className="d-flex justify-content-between mt-4 pt-2">
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                  </div>
                </MDBTabsPane>

              </MDBTabsContent>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default LoginRegister;