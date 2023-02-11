import React, { useCallback, useState } from "react";
import "./LoginSocial.css";
import { ExternalLink } from "react-external-link";
import { Icon } from "@iconify/react";
import googleContainedFill from "@iconify/icons-akar-icons/google-contained-fill";
import facebookFill from "@iconify/icons-akar-icons/facebook-fill";
import linkedinWithCircle from "@iconify/icons-entypo-social/linkedin-with-circle";




function LoginSocial() {

 
  
  return (
    <>
    <div>

         {/*  <FacebookLogin
        appId="638896764706960"
        onSuccess={(response) => {
          console.log('Login Success!', response);
        }}
        onFail={(error) => {
          console.log('Login Failed!', error);
        }}
        onProfileSuccess={(response) => {
          console.log('Get Profile Success!', response);
        }}
      /> */}

   {/*  <GoogleOAuthProvider clientId="790674821353-69uc89j596fo1oocti2jr5j67qiurtcr.apps.googleusercontent.com">
    <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
      
      </GoogleOAuthProvider> */}



    </div>




      <section className="login_ocial">
        <ul>
          <li className="google">
            <ExternalLink href="https://www.google.com/">
              <Icon icon={googleContainedFill} />
            </ExternalLink>
          </li>
          <li className="facebook">
            <ExternalLink href="">
              <Icon icon={facebookFill} />
            </ExternalLink>
          </li>
          <li className="linkdin">
            <ExternalLink href="">
              <Icon icon={linkedinWithCircle} />
            </ExternalLink>
          </li>
        </ul>
      </section>



    </>
  );
}

export default LoginSocial;
