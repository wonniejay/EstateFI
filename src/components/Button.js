import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;
    cursor: pointer;
`;

//버튼컴포넌트에서 프롭스로받은 타이틀이 버튼 목록에 표시되도록 해주었고,
//스타일드컴포넌트를 사용해서 버튼 태그에 스타일을 준 스타일드버튼 컴포넌트를 만들어줬다.
//프롭스로 받은 온클릭은 스타일드버튼의 온클릭에 넣어줌으로써 클릭이벤트를 상위 컴포넌트에서 받을 수 있도록 했다.
function Button(props) {
  const { title, onClick } = props;

  return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

export default Button;