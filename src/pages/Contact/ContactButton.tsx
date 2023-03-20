import styled from "styled-components";

const ContactButton = () => {
  return (
    <StyledButton>
        <a href={"/"}>
            Contact
        </a>
    </StyledButton>
  );
};

export default ContactButton;

const StyledButton = styled.button`
    border: none;   
    margin-top: 20px;
    height: 40px;
    width: 150px;
    background-color: rgb(25,118,210);
    color: white;

    a {
        font-family: sans-serif;
        letter-spacing: 5px;
        font-weight: 550;
        color: white;
        text-decoration: none;
    }
`