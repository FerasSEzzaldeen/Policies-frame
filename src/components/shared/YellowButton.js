import styled from "styled-components";

const StyledButton = styled.button`
    width: 200px;
    height: 44px;
    border-radius: 10px;
    border: none;
    background-color: #EAB35A;
    font-size: 20px;
`;

const YellowButton = (props) => {
    return (
        <StyledButton onClick={props.onClick}>{props.title}</StyledButton>
        );
    }
export default YellowButton;