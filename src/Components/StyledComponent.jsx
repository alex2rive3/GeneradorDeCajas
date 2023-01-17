import styled from "styled-components";

const Form = styled.form`
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 90%;
    margin: 20px auto;
`;

const Label = styled.label`
    flex: 1;
    text-align: center;
    font-size: 20px;
`;
const Input = styled.input`
    flex: 5;
    border: 1px solid black;
    border-radius: 25px;
    width: 95%;
    height: 30px;
`;
const Button = styled.button`
    flex: 1;
    margin: 0 auto;
    padding: 10px 20px;
`;
export { Form, Label, Input, Button };
