import styled from "styled-components";

const AnchorButton = styled.a`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
  color: #3C4048;
  border-radius: 15px;
  text-decoration: none;
  font-weight: 900;
  transition: .2s;

  &:hover{
    color: #EAEAEA;
    background-color: #303841;
  }

  &:active{
    color: #303841;
    background-color: #F6C90E;
  }
`;

const List = (props) => {
  return (
    <>
      <AnchorButton href={props.path}>{props.title}</AnchorButton>
      {/* <ListUl>
        {props.subs.map((sub) => (
          <ListLi>{sub}</ListLi>
        ))}
      </ListUl> */}
    </>
  );
};

export default List;
