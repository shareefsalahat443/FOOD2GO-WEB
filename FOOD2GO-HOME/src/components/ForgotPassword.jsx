
import React from 'react';
import * as styleloginsign from './styleloginsign';
import styled from 'styled-components'; // make sure you are importing styled from styled-components


export const ForgotPasswordContainer = styled.div`
  display: flex;
  justify-content: flex-start; // This will align it to the left
  width: 100%; // Full width to ensure it aligns to the left of the parent container
  margin-top: 10px; // Or adjust as needed for spacing
`;
function ForgotPassword() {
  return (
      <ForgotPasswordContainer>
      <styleloginsign.Container>

        <styleloginsign.Form>
          <styleloginsign.Title>Reset Password</styleloginsign.Title>
          <styleloginsign.Input type="email" placeholder="Enter your email" />
          <styleloginsign.Button>Send Reset Link</styleloginsign.Button>
        </styleloginsign.Form>
        </styleloginsign.Container>

      </ForgotPasswordContainer>
);
}

export default ForgotPassword;
