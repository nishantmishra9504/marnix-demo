
import { ContactUs } from '@/interfaces';
import { usePostRequestMutation } from '@/redux/services/RequestHandler';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {APIEndPoints} from '../../APIEndPoints';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState: ContactUs = {
    name: '',
    email: '',
    phone: '',
    type: '',
    description: ''
}

const ContactForm = () => {
    const [formData, setFormData] = useState(initialState);
    const [postRequest, {data, isSuccess, isError, error}] = usePostRequestMutation();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=> {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e: any)=> {
        e.preventDefault();
        postRequest({url: APIEndPoints.add_inquiry, ...formData});
    }

    useEffect(()=>{
        if(isSuccess){
            toast.success('Your inquiry submitted, we will contact you soon thank you..', {autoClose: 1500});
            setFormData(initialState);
        }
        else if(isError){
            toast.error("Something went wrong", {autoClose: 1500});
        }
    },[isSuccess, isError])
  return (
    <>
    <Form onSubmit={(e)=>handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Name" name='name' value={formData.name} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>handleChange(e)} required/>
        </Form.Group>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="@ demomail" name='email' value={formData.email} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>handleChange(e)} required/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" placeholder="+91" name='phone' value={formData.phone} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>handleChange(e)} required/>
            </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="to-Query">
            <Form.Select className='select-box' name='type' value={formData.type} onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>handleChange(e)} required>
                <option >Select Type of Query</option>
                <option >SALES</option>
                <option >PURCHASE</option>
                <option >OTHERS</option>
            </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
            <Form.Control as="textarea" rows={3} placeholder="Describe Your Query" name='description' value={formData.description} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>handleChange(e)} required/>
        </Form.Group>
        <Row className="mb-3 a-lign">
            <Form.Group as={Col} controlId="forminfo">
                <Form.Label>* Our representative will get back to you within 12 hours.</Form.Label>
            </Form.Group>
            <Form.Group as={Col} controlId="formsubmit" className='j-align'>
                <Button  type="submit" className='cmn-button'>
                    Submit
                </Button>
            </Form.Group>
        </Row>
    </Form>
    <ToastContainer />
    </>
  )
}

export default ContactForm;
