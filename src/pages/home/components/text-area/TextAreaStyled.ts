import styled from 'styled-components';

const TextAreaStyled = styled.textarea`
	background-color: inherit;
	border: none;
	caret-color: rgba(255, 255, 255, 0.7);
	color: #fff;
	font-family: inherit;
	font-size: 16px;
	font-weight: 400;
	height: 142px;
	resize: none;
	width: 100%;

	:focus {
		outline: none;
	}

	::placeholder {
		color: rgba(255, 255, 255, 0.7);
	}
`;

export default TextAreaStyled;
