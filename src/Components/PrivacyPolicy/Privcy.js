import React from "react";
import "./Privcy.css";
import { Container } from "react-bootstrap";

function Privcy() {
  return (
    <>
      <section className="privcy">
        <div className="privicy_banner">
          <div className="baner_text">
            <h1>Privacy Policy</h1>
            <p>Last Updated: Feb 14, 2023</p>
          </div>
        </div>
        <Container>
          <div className="privicy_info">
            <p>
            The Virtual BD is an IT company that prioritizes the privacy of its visitors. Our Privacy Policy outlines the types of information we collect and how we use it. If you have any questions or need further information, you can contact us at contact@thevirtualbd.com.
            </p>
            <h3>General information</h3>
            <p>
            Our Privacy Policy applies only to our online activities and covers information collected through our website. It does not apply to information collected offline or through other channels. By using our website, you agree to our Privacy Policy and its Terms and Conditions.
            </p>

           {/*  <p>
              If you have additional questions or require more information about
              our Privacy Policy, do not hesitate to contact us through email at
              Incubator. An example of a privacy policy can be found at
              buyproxies.io.
            </p> */}

            <h3>Log files</h3>
            <p>
            We use log files to standardly record visitor information when they visit our website. The information collected includes IP addresses, browser type, ISP, date and time stamp, and referring/exit pages. Third-party ad servers or ad networks may use technologies like cookies, JavaScript, or Web Beacons to measure the effectiveness of their advertising campaigns or personalize the content you see on websites. The Virtual BD has no control over these cookies.
            </p>

           {/*  <ul>
              <li>Internet protocol (IP) addresses </li>
              <li>Browser type, Internet Service Provider (ISP) </li>
              <li>Date and time stamp, referring/ exit pages </li>
              <li>Possibly the number of clicks </li>
            </ul> */}

            <h3>Privacy policies</h3>
            <p>
             We advise you to consult the Privacy Policies of third-party advertisers for more detailed information, including instructions on how to opt-out of certain options. You can disable cookies through your individual browser options.
            </p>

           {/*  <p>
              Third-party ad servers or ad networks uses technologies like
              cookies, JavaScript, or Web Beacons that are used in their
              respective advertisements and links that appear on Incubator,
              which are sent directly to users’ browser. They automatically
              receive your IP address when this occurs. These technologies are
              used to measure the effectiveness of their advertising campaigns
              and/or to personalize the advertising content that you see on
              websites that you visit.
            </p>
            <p>
              Note that KeyDesign has no access to or control over these cookies
              that are used by third-party advertisers.
            </p> */}
           {/*  <h3>Third party policies</h3>
            <p>
              Incubator’s Privacy Policy does not apply to other advertisers or
              websites. Thus, we are advising you to consult the respective
              Privacy Policies of these third-party ad servers for more detailed
              information. It may include their practices and instructions about
              how to opt-out of certain options. You may find a complete list of
              these Privacy Policies and their links here: Privacy Policy Links.
            </p>
            <p>
              You can choose to disable cookies through your individual browser
              options. To know more detailed information about cookie management
              with specific web browsers, it can be found at the browsers’
              respective websites. What Are Cookies?
            </p> */}
            <h3>Children Information</h3>
            <p>
            At The Virtual BD, we also prioritize the protection of children while they use the internet. We encourage parents and guardians to monitor their children's online activity. We do not knowingly collect any Personal Identifiable Information from children under the age of 13. If you believe your child has provided this information, we encourage you to contact us immediately so we can remove it from our records.
            </p>
           {/*  <p>
              Incubator does not knowingly collect any Personal Identifiable
              Information from children under the age of 13. If you think that
              your child provided this kind of information on our website, we
              h3ly encourage you to contact us immediately and we will do our
              best efforts to promptly remove such information from our records.
            </p> */}
           {/*  <h3>Online privacy</h3>
            <p>
              This privacy policy applies only to our online activities and is
              valid for visitors to our website with regards to the information
              that they shared and/or collect in KeyDesign. This policy is not
              applicable to any information collected offline or via channels
              other than this website.
            </p>
            <p>
              By using our website, you hereby consent to our Privacy Policy and
              agree to its Terms and Conditions.
            </p> */}

            {/* <h3>Update</h3> */}
            <p>
            Our Privacy Policy was last updated on December, 2020. Any updates, amendments, or changes will be posted on this page.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Privcy;
