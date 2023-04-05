import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ),
        url("https://images.summitmedia-digital.com/sap/images/2021/01/13/jirosoju-spot-insert-1-1610508122.jpg")
        center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;


const Contact = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CONTACT US</Title>
            <Form>
                <Input placeholder = "First Name"/>
                <Input placeholder = "Last Name"/>
                <Input placeholder = "Email"/>
                <Input placeholder = "Phone Number"/>
                <Input placeholder = "Comment"/>
                <Agreement>
                I consent to the processing of my personal
                information in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>SUBMIT</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Contact;
