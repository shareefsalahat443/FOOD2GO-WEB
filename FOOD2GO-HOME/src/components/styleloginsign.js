import styled from 'styled-components';


export const Container = styled.div`
  display: flex; /* Added flex display */
  justify-content: center; /* Center children horizontally */
  align-items: center; /* Center children vertically */
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: center;
  overflow: hidden;
  width: 100%; /* Full width */
  height: 100vh; /* Full viewport height */
  margin: 0;
  min-height: 100vh;
  min-width: 100vw;
  background-color: #f8f9fa; /* or any color you prefer */
`;
export const ForgotPasswordContainer = styled.div`
  display: flex;
  justify-content: flex-start; // This will align it to the left
  width: 100%; // Full width to ensure it aligns to the left of the parent container
  margin-top: 10px; // Or adjust as needed for spacing
`;

export const SignUpAsUserContainer = styled.div`
 position: absolute;
 top: 0;
 height: 100%;
 transition: all 0.6s ease-in-out;
 left: 0;
 width: 50%;
 opacity: 0;
 z-index: 1;
 ${props => props.signinIn !== true ? `
   transform: translateX(100%);
   opacity: 1;
   z-index: 5;
 ` 
 : null}
`;
export const SignUpAsResContainer = styled.div`
 position: absolute;
 top: 0;
 height: 100%;
 transition: all 0.6s ease-in-out;
 left: 0;
 width: 50%;
 opacity: 0;
 z-index: 1;
 ${props => props.signinIn !== true ? `
   transform: translateX(100%);
   opacity: 1;
   z-index: 5;
 ` 
 : null}
`;



export const SignInContainer = styled.div`
position: absolute;
top: 0;
height: 100%;
transition: all 0.6s ease-in-out;
left: 0;
width: 50%;
z-index: 2;
${props => (props.signinIn !== true ? `transform: translateX(100%);` : null)}
`;

export const Form = styled.form`
background-color: #ffffff;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 0 50px;
height: 100%;
text-align: center;
`;

export const Title = styled.h1`
font-weight: bold;
margin: 0;
`;

export const Input = styled.input`
background-color: #eee;
border: none;
padding: 12px 15px;
margin: 8px 0;
width: 100%;
`;


export const Button = styled.button`
   border-radius: 20px;
   border: 1px solid #608dfd;
   background-color: #608dfd;
   
   color: #ffffff;
   font-size: 12px;
   font-weight: bold;
   padding: 12px 45px;
   letter-spacing: 1px;
   text-transform: uppercase;
   transition: transform 80ms ease-in;
   &:active{
       transform: scale(0.95);
   }
   &:focus {
       outline: none;
   }
`;
export const GhostButton = styled(Button)`
background-color: transparent;
border-color: #ffffff;
`;

export const Anchor = styled.a`
color: #333;
font-size: 14px;
text-decoration: none;
margin: 15px 0;
`;
export const OverlayContainer = styled.div`
position: absolute;
top: 0;
left: 50%;
width: 50%;
height: 100%;
overflow: hidden;
transition: transform 0.6s ease-in-out;
z-index: 100;
${props =>
 props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
background: #ff416c;
background: -webkit-linear-gradient(to right);
background: linear-gradient(to right, #608dfd, #ff416c);
background-repeat: no-repeat;
background-size: cover;
background-position: 0 0;
color: #ffffff;
position: relative;
left: -100%;
height: 100%;
width: 200%;
transform: translateX(0);
transition: transform 0.6s ease-in-out;
${props => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;

export const OverlayPanel = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${props => props.signinIn !== true ? `transform: translateX(0);` : null}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
    right: 0;
    transform: translateX(0);
    ${props => props.signinIn !== true ? `transform: translateX(20%);` : null}
`;

export const Paragraph = styled.p`
font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px
`;

export const StyledRadio = styled.input.attrs({ type: 'radio' })`
  margin-right: 20px; // Space between the radio button and its label
  cursor: pointer; // Makes it more user-friendly

  // Customize the appearance of the radio button
  &:before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 8px;
    position: relative;
    border-radius: 50%;
    background-color: #eee;
    border: 1px solid #333;
    vertical-align: middle;
  }

  // Style for when the radio button is checked
  &:checked:before {
    background-color: #608dfd;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  line-height: 20px; // Adjusts vertical spacing
`;

export const StyledSelect = styled.select`
  background-color: #eee;
  border: 1px solid #ddd;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  border-radius: 5px;
  color: #333;
  font-size: 14px;

  // Customizing the dropdown arrow
  appearance: none;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpolygon%20fill%3D%22%23608dfd%22%20points%3D%220%2C0%2012%2C0%206%2C12%22/%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 12px 12px;

  &:focus {
    outline: none;
    border-color: #608dfd;
  }
`;

export const FormFieldSet = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const FileInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 8px 0;
`;

export const StyledFileLabel = styled.label`
  background-color: #608dfd;
  color: #ffffff;
  padding: 12px 45px;
  font-size: 14px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #506ac7;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const StyledFileInput = styled.input.attrs({ type: 'file' })`
  opacity: 0;
  position: absolute;
  width: 100%;
  cursor: pointer;
  height: 100%;
  left: 0;
  z-index: 2; // Ensure it's above the label for clicking
`;

export const FileNameDisplay = styled.span`
  margin-left: 20px;
  font-size: 14px;
  color: #333;
`;

export const FlexRow = styled.div`
  display: flex;
  justify-content: space-between; // Spreads out the child elements evenly
  align-items: right; // Vertically aligns child elements
  margin: 8px 0; // Adds some space around each row
  width: 100%;

  & > * {
    flex: 3; // Allows children to grow and take up equal space
    margin: 0 20px; // Adds space between the children
  }
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); // Semi-transparent backdrop
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  width: 400px; // Or width of your preference
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: none;
  padding: 10px;
  cursor: pointer;
`;

// Reuse the Input and Button components from your current design
