import React from "react";
import * as styleloginsign from './styleloginsign';
import { useState } from "react";
import { Link } from 'react-router-dom';


export function Login() {
    const [showSignIn, setShowSignIn] = useState(true); // Controls visibility of the sign-in form
    const [showUserSignUp, setShowUserSignUp] = useState(false); // Controls visibility of the user sign-up form
    const [showResSignUp, setShowResSignUp] = useState(false); // Controls visibility of the restaurant sign-up form
    const [imageFileName, setImageFileName] = useState(''); // State for the image file name
    const [coverFileName, setCoverFileName] = useState(''); // State for the cover file name

    // Handle clicks for User Sign Up
    const handleUserSignUp = () => {
        setShowUserSignUp(true);
        setShowResSignUp(false);
        setShowSignIn(false);
    };

    // Handle clicks for Restaurant Sign Up
    const handleResSignUp = () => {
        setShowResSignUp(true);
        setShowUserSignUp(false);
        setShowSignIn(false);
    };

    // Handle clicks to go back to sign in
    const handleSignIn = () => {
        setShowSignIn(true);
        setShowUserSignUp(false);
        setShowResSignUp(false);
    };


    const handleFileChange = (event, type) => {
        const file = event.target.files[0];
        if (file) {
            if (type === 'image') {
                setImageFileName(file.name);  // Set the image file name
            } else if (type === 'cover') {
                setCoverFileName(file.name);  // Set the cover file name
            }
        }
    };
    return (
        <styleloginsign.Container>
            {showUserSignUp && (
                <styleloginsign.SignUpAsUserContainer signinIn={showSignIn}>
                    <styleloginsign.Form>
                        <styleloginsign.Title>User SignUp</styleloginsign.Title>
                        <styleloginsign.FlexRow>

                            <styleloginsign.Input type='text' placeholder='First Name' />
                            <styleloginsign.Input type='text' placeholder='Last Name' />
                        </styleloginsign.FlexRow>

                        <styleloginsign.FlexRow>
                            <styleloginsign.Input type='email' placeholder='Email' />
                            <styleloginsign.Input type='password' placeholder='Password(6 digits AT LEAST) *' />
                        </styleloginsign.FlexRow>

                        <styleloginsign.FlexRow>
                            <styleloginsign.Input type='text' placeholder='Adress' />
                            <styleloginsign.Input type="number" placeholder='Phone Number' />
                        </styleloginsign.FlexRow>

                        <styleloginsign.FlexRow>

                            <styleloginsign.FormFieldSet>
                                <styleloginsign.StyledSelect>
                                    <option value="select">Select Gender...</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </styleloginsign.StyledSelect>
                                <styleloginsign.StyledSelect>
                                    <option value="select">Select City...</option>
                                    <option value="Nablus">Nablus</option>
                                    <option value="Ramallah">Hebron</option>
                                    <option value="Ramallah">Jenin</option>
                                    <option value="Ramallah">Tulkarem</option>
                                    <option value="Ramallah">Betlehim</option>
                                    <option value="Ramallah">Tubas</option>

                                </styleloginsign.StyledSelect>
                            </styleloginsign.FormFieldSet>
                            <styleloginsign.FileInputContainer>
                                <styleloginsign.StyledFileLabel htmlFor="image-upload">Choose Image</styleloginsign.StyledFileLabel>
                                <styleloginsign.StyledFileInput
                                    id="image-upload"
                                    type="file"
                                    onChange={(e) => handleFileChange(e, 'image')}
                                />
                                {imageFileName && <styleloginsign.FileNameDisplay>{imageFileName}</styleloginsign.FileNameDisplay>}
                            </styleloginsign.FileInputContainer>

                        </styleloginsign.FlexRow>


                        <styleloginsign.Button>Sign Up </styleloginsign.Button>

                    </styleloginsign.Form>
                </styleloginsign.SignUpAsUserContainer>
            )}

            {showResSignUp && (
                <styleloginsign.SignUpAsResContainer signinIn={showSignIn}>
                    <styleloginsign.Form>
                        <styleloginsign.Title>Restaurant SignUp</styleloginsign.Title>
                        <styleloginsign.FlexRow>

                            <styleloginsign.Input type='text' placeholder='First Name' />
                            <styleloginsign.Input type='text' placeholder='Last Name' />
                        </styleloginsign.FlexRow>

                        <styleloginsign.FlexRow>
                            <styleloginsign.Input type='email' placeholder='Email' />
                            <styleloginsign.Input type='password' placeholder='Password(6 digits AT LEAST) *' />
                        </styleloginsign.FlexRow>

                        <styleloginsign.FlexRow>
                            <styleloginsign.Input type='text' placeholder='Adress' />
                            <styleloginsign.Input type="number" placeholder='Phone Number' />
                        </styleloginsign.FlexRow>

                            <styleloginsign.FlexRow>

                            
                            <styleloginsign.FormFieldSet>
                                <styleloginsign.StyledSelect>
                                    <option value="select">Select Gender...</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </styleloginsign.StyledSelect>
                                </styleloginsign.FormFieldSet>
                                <styleloginsign.FileInputContainer>
                                <styleloginsign.StyledFileLabel htmlFor="image-upload">Choose Image</styleloginsign.StyledFileLabel>
                                <styleloginsign.StyledFileInput
                                    id="image-upload"
                                    type="file"
                                    onChange={(e) => handleFileChange(e, 'image')}
                                />
                                {imageFileName && <styleloginsign.FileNameDisplay>{imageFileName}</styleloginsign.FileNameDisplay>}
                            </styleloginsign.FileInputContainer>

                                </styleloginsign.FlexRow>


                                <styleloginsign.FlexRow>

                                <styleloginsign.FormFieldSet>

                                <styleloginsign.StyledSelect>
                                    <option value="select">Select City...</option>
                                    <option value="Nablus">Nablus</option>
                                    <option value="Ramallah">Hebron</option>
                                    <option value="Ramallah">Jenin</option>
                                    <option value="Ramallah">Tulkarem</option>
                                    <option value="Ramallah">Betlehim</option>
                                    <option value="Ramallah">Tubas</option>

                                </styleloginsign.StyledSelect>
                            </styleloginsign.FormFieldSet>

                            <styleloginsign.FileInputContainer>
                                <styleloginsign.StyledFileLabel htmlFor="cover-upload">Choose Cover</styleloginsign.StyledFileLabel>
                                <styleloginsign.StyledFileInput
                                    id="cover-upload"
                                    type="file"
                                    onChange={(e) => handleFileChange(e, 'cover')}
                                />
                                {coverFileName && <styleloginsign.FileNameDisplay>{coverFileName}</styleloginsign.FileNameDisplay>}
                            </styleloginsign.FileInputContainer>
                            </styleloginsign.FlexRow>
                            <styleloginsign.Input type='text' placeholder='Facebook Link' />

                     

                        <styleloginsign.Button>Sign Up </styleloginsign.Button>

                    </styleloginsign.Form>
                </styleloginsign.SignUpAsResContainer>
            )}

            {showSignIn && (
                <styleloginsign.SignInContainer signinIn={showSignIn}>
                    <styleloginsign.Form>
                        <styleloginsign.Title>Sign in</styleloginsign.Title>
                        <styleloginsign.Input type='email' placeholder='Email' />
                        <styleloginsign.Input type='password' placeholder='Password' />
                        <Link to="/forgot-password">Forgot your password?</Link>
                        <styleloginsign.Button onClick={handleSignIn}>Sign In</styleloginsign.Button>
                    </styleloginsign.Form>
                </styleloginsign.SignInContainer>
            )}


            <styleloginsign.OverlayContainer signinIn={showSignIn}>
                <styleloginsign.Overlay signinIn={showSignIn}>
                    <styleloginsign.LeftOverlayPanel signinIn={showSignIn}>
                        <styleloginsign.Title>Welcome Back!</styleloginsign.Title>
                        <styleloginsign.Paragraph>
                            To keep connected with us please login with your personal info
                        </styleloginsign.Paragraph>
                        <styleloginsign.GhostButton onClick={handleSignIn}>Sign In</styleloginsign.GhostButton>
                    </styleloginsign.LeftOverlayPanel>

                    <styleloginsign.RightOverlayPanel signinIn={showSignIn}>
                        <styleloginsign.Title>Hello, Friend!</styleloginsign.Title>
                        <styleloginsign.Paragraph>
                            Enter your personal details and start your journey with us
                        </styleloginsign.Paragraph>
                        <styleloginsign.GhostButton onClick={handleUserSignUp}>Sign Up As User</styleloginsign.GhostButton>
                        <styleloginsign.GhostButton onClick={handleResSignUp}>Sign Up As Restaurant</styleloginsign.GhostButton>
                    </styleloginsign.RightOverlayPanel>
                </styleloginsign.Overlay>
            </styleloginsign.OverlayContainer>
        </styleloginsign.Container>
    );
}
