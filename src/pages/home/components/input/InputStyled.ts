import styled from 'styled-components';

const InputStyled = styled.input`
	background-color: inherit;
	border: none;
	caret-color: rgba(255, 255, 255, 0.7);
	color: #fff;
	font-size: 16px;
	font-weight: 400;
	height: 100%;
	width: 100%;

	:focus {
		outline: none;
	}

	::placeholder {
		color: rgba(255, 255, 255, 0.7);
	}
`;

export default InputStyled;
