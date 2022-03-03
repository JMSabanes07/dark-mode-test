import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  grid-template-columns: minmax(auto, 400px);
  justify-content: flex-start;
  gap: 0.5rem;

  input {
    background: ${(props) => props.theme.bg.secondary};
    border: none;
    padding: 1rem 1.3rem;
    color: ${(props) => props.theme.text.primary};
    border: 2px solid transparent;
    transition: 0.1s;
    ::placeholder {
      opacity: 1;
      color: ${(props) => props.theme.text.placeholder};
    }
    :hover {
      border: 2px solid ${(props) => props.theme.bg.highlight};
    }
    :focus {
      border: 2px solid ${(props) => props.theme.bg.highlight};
      outline: none;
    }
  }
  button {
    background: ${(props) => props.theme.bg.tertiary};
    border: none;
    padding: 1rem 3rem;
    width: fit-content;
    cursor: pointer;
    transition: 0.2s;
    color: ${(props) => props.theme.text.primary};
    font-weight: 600;
    :hover {
      padding: 1rem 3.5rem;
      background: ${(props) => props.theme.bg.highlight};
    }
  }
`
