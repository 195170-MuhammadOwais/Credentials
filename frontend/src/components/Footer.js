import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

export default function App() {
    return (
        <MDBFooter className='text-center' color='white' bgColor='dark'>
            <MDBContainer className='p-4'>

                <section className=''>
                    <form action=''>
                        <MDBRow className='d-flex justify-content-center'>
                            <MDBCol size="auto">
                                <p className='pt-2'>
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </MDBCol>

                            <MDBCol md='5' start='12'>
                                <MDBInput contrast type='email' label='Email address' className='mb-4' />
                            </MDBCol>

                            <MDBCol size="auto">
                                <MDBBtn outline color='light' type='submit' className='mb-4'>
                                    Subscribe
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </form>
                </section>

                <section className='mb-4'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
                        voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
                        sequi voluptate quas.
                    </p>
                </section>

                <section className=''>
                    <MDBRow>
                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>Links</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <Link to='/' className='text-white'>
                                        Link 1
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' className='text-white'>
                                        Link 2
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' className='text-white'>
                                        Link 3
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' className='text-white'>
                                        Link 4
                                    </Link>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>Links</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <Link to='/' className='text-white'>
                                        Link 1
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' className='text-white'>
                                        Link 2
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' className='text-white'>
                                        Link 3
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' className='text-white'>
                                        Link 4
                                    </Link>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>Links</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <Link to='/' className='text-white'>
                                        Link 1
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' className='text-white'>
                                        Link 2
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' className='text-white'>
                                        Link 3
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' className='text-white'>
                                        Link 4
                                    </Link>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>Links</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <Link to='/' className='text-white'>
                                        Link 1
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' className='text-white'>
                                        Link 2
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' className='text-white'>
                                        Link 3
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' className='text-white'>
                                        Link 4
                                    </Link>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </section>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2022 Copyright: ---
            </div>
        </MDBFooter>
    );
}