import styled from "styled-components"

interface IButton {
    backgroundColor?: string
    borderRadius?: number
    color?: string
    padding?: string
    hover?: "base",
    width?: number
    height?: number
}

export const SButton = styled.button<IButton>`
  background-color: ${props => props.backgroundColor || props.theme.palette.success};
  color: ${props => props.color || props.theme.palette.primary};
  
  ${props => props.borderRadius ? `border-radius: ${props.borderRadius}px;` : ""}
  ${props => props.padding ? `padding: ${props.padding};` : ""}
  ${props => props.width ? `width: ${props.width}px;` : ""}
  ${props => props.height ? `height: ${props.height}px;` : ""}

  cursor: pointer;
  border: 0;
  outline: none;
  
  &:hover {
    background-color: ${props => props.theme.palette.successLight};
  }
`

interface IInput {
    borderRadius?: number
    margin?: string
    padding?: string
    border?: string
    hint?: boolean
}

export const SInput = styled.input<IInput>`
  border-radius: ${props => props.borderRadius || 0}px;
  
  ${props => props.margin ? `margin: ${props.margin};` : ""}
  ${props => props.padding ? `padding: ${props.padding};` : ""}
  ${props => props.border ? `border: ${props.border};` : `border: 0;`}
  
  outline: none;
`

interface IFormWrapper {
    type?: string
}
export const SForm = styled.div<IFormWrapper>`
    ${props => {
        switch(props.type) {
          case "default" : default: return `
            input {
                background-color: black
            }
          `;
          case "modern": return `
            input {
                background-color: orange
            }
          `
        }
    }}
`

export const SInputHint = `
    
`;
