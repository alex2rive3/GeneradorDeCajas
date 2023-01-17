import styled from "styled-components";

const DisplayBox = ({ color, dimenciones }) => {
    return (
        <>
            <Box color={color} dimencion={dimenciones}></Box>
        </>
    );
};
const Box = styled.div`
    width: ${(props) => props.dimencion}px;
    height: ${(props) => props.dimencion}px;
    background-color: ${(props) => props.color};
`;
export default DisplayBox;
