import styled from 'styled-components'

export const ToggleButtonContainer = styled.button`
  display: grid;
  gap: 1rem;
  grid-auto-flow: column;
  align-items: center;

  width: fit-content;
  padding: 0.5rem 0.7rem;
  border-radius: 5rem;
  border: none;
  position: relative;
  background: ${(p) => p.theme.bg.secondary};
  transition: 0.3s;
  cursor: pointer;
  svg {
    color: ${(p) => p.theme.text.primary};
  }
  ::after {
    content: '';
    position: absolute;
    left: ${(p) => (p.toggle === 'dark' ? '0%' : '50%')};
    width: 35px;
    height: 35px;
    background: ${(p) => p.theme.bg.highlight};
    border-radius: 50%;
    transition: 0.3s;
  }
`
