'use client'
import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';

function Filter() {
    function closeClick() {
        $("._filter_panel").removeClass("open");
        $(".overlay").removeClass("open");
    } 
  return (
    <>
        {/* <div className='_filter_panel'>
            <div className='_filter_header'>
                <button onClick={closeClick} className='_back'><i className="bi bi-arrow-left-square"></i></button>
                <button onClick={closeClick} className='exp-by'>EXPLORE BY <i className="bi bi-sliders"></i></button>
                <button className='_reset'>Reset <i className="bi bi-arrow-counterclockwise"></i></button>
            </div>
            
            <div className='_filter-body'>
                <Accordion defaultActiveKey="0" className='year'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Registration Year</Accordion.Header>
                        <Accordion.Body>
                        <Form>
                            {['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    label="2000 - 2010"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    label="2010 - 2015"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                                <Form.Check
                                    label=" 2015 - 2020"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-3`}
                                />
                                <Form.Check
                                    label="All"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-4`}
                                />
                                </div>
                            ))}
                        </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey="0" className='budget'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Budget</Accordion.Header>
                        <Accordion.Body>
                        <Form>
                            {['checkbox'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    label="Less Than 50L"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    label="50L to 1Cr"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                                <Form.Check
                                    label="1Cr to 1.5Cr"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-3`}
                                />
                                <Form.Check
                                    label="1.5Cr & Above"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-4`}
                                />
                                </div>
                            ))}
                        </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey="0" className='brand '>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Brands + Models</Accordion.Header>
                        <Accordion.Body>
                        <Form>
                            {['checkbox'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <small>Top Brands</small>    
                                    <Form.Check
                                        label="Maruti Suzuki (119)"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        label=" Hyundai (59)"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    />
                                    <Form.Check
                                        label="Honda (31)"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-3`}
                                    />
                                    <Form.Check
                                        label="Toyota (18)"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-4`}
                                    />
                                    <Form.Check
                                        label=" Tata (15)"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-5`}
                                    />
                                    <small>Others Brands</small>
                                    <Form.Check
                                        label=" Tata (15)"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-5`}
                                    />
                                    <Form.Check
                                        label=" Tata (15)"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-5`}
                                    />
                                    <Form.Check
                                        label=" Tata (15)"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-5`}
                                    />
                                </div>
                            ))}
                        </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey="0" className='body'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Body Type</Accordion.Header>
                        <Accordion.Body>
                        <Form>
                            {['checkbox'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    label="Hatchback (163)"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    label=" Sedan (63)"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                                <Form.Check
                                    label="SUV (63)"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-3`}
                                />
                                <Form.Check
                                    label=" MUV (14)"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-4`}
                                />
                                </div>
                            ))}
                        </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion className='transmission'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Transmission</Accordion.Header>
                        <Accordion.Body>
                        <Form>
                            {['checkbox'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    label="Hatchback (163)"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    label=" Sedan (63)"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                                <Form.Check
                                    label="SUV (63)"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-3`}
                                />
                                <Form.Check
                                    label=" MUV (14)"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-4`}
                                />
                                </div>
                            ))}
                        </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion className='color'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Color</Accordion.Header>
                        <Accordion.Body>
                        <Form>
                            {['checkbox'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    label="Hatchback (163)"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    label=" Sedan (63)"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                                <Form.Check
                                    label="SUV (63)"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-3`}
                                />
                                <Form.Check
                                    label=" MUV (14)"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-4`}
                                />
                                </div>
                            ))}
                        </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>                 
        </div>
        <div className='overlay'></div> */}
    </>
  )
}

export default Filter