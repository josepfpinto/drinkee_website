import React, { Component } from 'react';
import '../styles/style.scss';
import back_arrow from '../images/icons/back.svg';
import { Link } from "react-router-dom";
import Footer from './footer';


export default class Privacy extends Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return <main>
            <section className="hero">
                <div className="container">
                    <div className="hero-inner">
                        <div className="hero-copy">
                            <div className="align-items">
                                <Link className="cookies-back-button" to="/">< img src={back_arrow} alt="back to home" /></Link>
                                <h1 className="hero-title mt-0 align-text-item">Privacy Notice</h1>
                            </div>
                            <p className="hero-paragraph">
                                Last updated August 26, 2022
                                <br />
                                <br />
                                <br />
                                <br />
                                This privacy notice for Drinkee ("we," "us," or "our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:
                                <br />
                                • Visit our website at https://appdrinkee.com, or any website of ours that links to this privacy notice
                                <br />
                                • Download and use our mobile application (Drinkee), or any other application of ours that links to this privacy notice
                                <br />
                                • Engage with us in other related ways, including any sales, marketing, or eventsQuestions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at appdrinkee@gmail.com.
                                <br />
                                <br />
                            </p>
                            <h3 className="hero-paragraph">
                                SUMMARY OF KEY POINTS
                            </h3>
                            <p className="hero-paragraph">
                                This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for. You can also click here to go directly to our table of contents.What personal information do we process? When you visit, use, or navigate our Services, we may process personal information depending on how you interact with Drinkee and the Services, the choices you make, and the products and features you use. Click here to learn more.Do we process any sensitive personal information? We do not process sensitive personal information.Do we receive any information from third parties? We do not receive any information from third parties.How do we process your information? We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Click here to learn more.In what situations and with which types of parties do we share personal information? We may share information in specific situations and with specific categories of third parties. Click here to learn more.How do we keep your information safe? We have organisational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Click here to learn more.What are your rights? Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Click here to learn more.How do you exercise your rights? The easiest way to exercise your rights is by contacting us via email appdrinkee@gmail.com. We will consider and act upon any request in accordance with applicable data protection laws.Want to learn more about what Drinkee does with any information we collect? Click here to review the notice in full.
                                <br />
                                <br />
                            </p>
                            <h3 className="hero-paragraph">
                                TABLE OF CONTENTS
                            </h3>
                            <p className="hero-paragraph">
                                1. WHAT INFORMATION DO WE COLLECT?
                                <br />
                                2. HOW DO WE PROCESS YOUR INFORMATION?
                                <br />
                                3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?
                                <br />
                                4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                                <br />
                                5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                                <br />
                                6. HOW LONG DO WE KEEP YOUR INFORMATION?
                                <br />
                                7. HOW DO WE KEEP YOUR INFORMATION SAFE?
                                <br />
                                8. DO WE COLLECT INFORMATION FROM MINORS?
                                <br />
                                9. WHAT ARE YOUR PRIVACY RIGHTS?
                                <br />
                                10. CONTROLS FOR DO-NOT-TRACK FEATURES
                                <br />
                                11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                                <br />
                                12. DO WE MAKE UPDATES TO THIS NOTICE?
                                <br />
                                13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                                <br />
                                14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
                                <br />
                                <br />
                            </p>
                            <h3 className="hero-paragraph">
                                1. WHAT INFORMATION DO WE COLLECT?
                            </h3>
                            <p className="hero-paragraph">
                                Personal information you disclose to us.
                                <br />
                                In Short: We collect personal information that you provide to us.We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.Personal Information Provided by You. The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
                                • names
                                <br />
                                • phone numbers
                                <br />
                                • usernames
                                <br />
                                • contact or authentication data
                                <br />
                                • postal code
                                <br />
                                Sensitive Information. We do not process sensitive information. Application Data. If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:
                                <br />
                                • Geolocation Information. We may request access or permission to track location-based information from your mobile device, either continuously or while you are using our mobile application(s), to provide certain location-based services. If you wish to change our access or permissions, you may do so in your device's settings.
                                <br />
                                • Mobile Device Access. We may request access or permission to certain features from your mobile device, including your mobile device's camera, and other features. If you wish to change our access or permissions, you may do so in your device's settings.
                                <br />
                                • Mobile Device Data. We automatically collect device information (such as your mobile device ID, model, and manufacturer), operating system, version information and system configuration information, device and application identification numbers, browser type and version, hardware model Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server). If you are using our application(s), we may also collect information about the phone network associated with your mobile device, your mobile device’s operating system or platform, the type of mobile device you use, your mobile device’s unique device ID, and information about the features of our application(s) you accessed.
                                <br />
                                • Push Notifications. We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings.This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.Information automatically collectedIn Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.Like many businesses, we also collect information through cookies and similar technologies. The information we collect includes:
                                <br />
                                • Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).
                                <br />
                                • Device Data. We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.
                                <br />
                                • Location Data. We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.
                                <br />
                                <br />
                            </p>
                            <h3 className="hero-paragraph">
                                2. HOW DO WE PROCESS YOUR INFORMATION?
                            </h3>
                            <p className="hero-paragraph">
                                In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
                                <br />
                                • To facilitate account creation and authentication and otherwise manage user accounts. We may process your information so you can create and log in to your account, as well as keep your account in working order.
                                <br />
                                • To deliver and facilitate delivery of services to the user. We may process your information to provide you with the requested service.
                                <br />
                                • To enable user-to-user communications. We may process your information if you choose to use any of our offerings that allow for communication with another user.
                                <br />
                                • To request feedback. We may process your information when necessary to request feedback and to contact you about your use of our Services.
                                <br />
                                • To protect our Services. We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.
                                <br />
                                • To identify usage trends. We may process information about how you use our Services to better understand how they are being used so we can improve them.
                                <br />
                                • To save or protect an individual's vital interest. We may process your information when necessary to save or protect an individual’s vital interest, such as to prevent harm.
                                <br />
                                <br />
                            </p>
                            <h3 className="hero-paragraph">
                                3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
                            </h3>
                            <p className="hero-paragraph">
                                In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.If you are located in the EU or UK, this section applies to you.The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:
                                <br />
                                • Consent. We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Click here to learn more.
                                <br />
                                • Performance of a Contract. We may process your personal information when we believe it is necessary to fulfill our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.
                                <br />
                                • Legitimate Interests. We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms. For example, we may process your personal information for some of the purposes described in order to:
                                <br />
                                • Analyse how our services are used so we can improve them to engage and retain users
                                <br />
                                • Diagnose problems and/or prevent fraudulent activities
                                <br />
                                • Understand how our users use our products and services so we can improve user experience
                                <br />
                                • Legal Obligations. We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.
                                <br />
                                • Vital Interests. We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.If you are located in Canada, this section applies to you.We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time. Click here to learn more.In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:
                                <br />
                                • If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way
                                <br />
                                • For investigations and fraud detection and prevention
                                <br />
                                • For business transactions provided certain conditions are met
                                <br />
                                • If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim
                                <br />
                                • For identifying injured, ill, or deceased persons and communicating with next of kin
                                <br />
                                • If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse
                                <br />
                                • If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province
                                <br />
                                • If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records
                                <br />
                                • If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced
                                <br />
                                • If the collection is solely for journalistic, artistic, or literary purposes
                                <br />
                                • If the information is publicly available and is specified by the regulations
                                <br />
                                <br />
                            </p>
                            <h3 className="hero-paragraph">
                                4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                            </h3>
                            <p className="hero-paragraph">
                                In Short: We may share information in specific situations described in this section and/or with the following categories of third parties.Vendors, Consultants, and Other Third-Party Service Providers. We may share your data with third-party vendors, service providers, contractors, or agents ("third parties") who perform services for us or on our behalf and require access to such information to do that work. We have contracts in place with our third parties, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any organisation apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct. The categories of third parties we may share personal information with are as follows:
                                <br />
                                • Cloud Computing Services
                                <br />
                                • Communication & Collaboration Tools
                                <br />
                                • Data Analytics Services
                                <br />
                                • Data Storage Service Providers
                                <br />
                                • Performance Monitoring Tools
                                <br />
                                • User Account Registration & Authentication Services
                                <br />
                                We also may need to share your personal information in the following situations:
                                <br />
                                • Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                                <br />
                                • Other Users. When you share personal information (for example, by posting comments, contributions, or other content to the Services) or otherwise interact with public areas of the Services, such personal information may be viewed by all users and may be publicly made available outside the Services in perpetuity. Similarly, other users will be able to view descriptions of your activity, communicate with you within our Services, and view your profile.
                                <br />
                                <br />
                            </p>
                            <h3 className="hero-paragraph">
                                5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                            </h3>
                            <p className="hero-paragraph">
                                In Short: We may use cookies and other tracking technologies to collect and store your information.We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
                                <br />
                                <br />
                            </p>
                            <h3 className="hero-paragraph">
                                6. HOW LONG DO WE KEEP YOUR INFORMATION?
                            </h3>
                            <p className="hero-paragraph">
                                In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                                <br />
                                <br />
                            </p>
                            <h3 className="hero-paragraph">
                                7. HOW DO WE KEEP YOUR INFORMATION SAFE?
                            </h3>
                            <p className="hero-paragraph">
                                In Short: We aim to protect your personal information through a system of organisational and technical security measures.We have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
                                <br />
                                <br />
                            </p>
                            <h3 className="hero-paragraph">
                                8. DO WE COLLECT INFORMATION FROM MINORS?
                            </h3>
                            <p className="hero-paragraph">
                                In Short: We do not knowingly collect data from or market to children under 18 years of age.We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at appdrinkee@gmail.com.
                                <br />
                                <br />
                            </p>
                            <h3 className="hero-paragraph">
                                9. WHAT ARE YOUR PRIVACY RIGHTS?
                            </h3>
                            <p className="hero-paragraph">
                                In Short: In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.We will consider and act upon any request in accordance with applicable data protection laws. If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.If you are located in Switzerland, the contact details for the data protection authorities are available here: https://www.edoeb.admin.ch/edoeb/en/home.html.Withdrawing your consent: If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.Account InformationIf you would at any time like to review or change the information in your account or terminate your account, you can:
                                <br />
                                • You can delete your account at any time in the app settings, automatically eliminating your personal information.Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.Cookies and similar technologies: Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. To opt out of interest-based advertising by advertisers on our Services visit http://www.aboutads.info/choices/. If you have questions or comments about your privacy rights, you may email us at appdrinkee@gmail.com.
                                <br />
                                <br />
                            </p>
                            <h3 className="hero-paragraph">
                                10. CONTROLS FOR DO-NOT-TRACK FEATURES
                            </h3>
                            <p className="hero-paragraph">
                                Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalised. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.
                                <br />
                                <br />
                            </p>
                            <h3 className="hero-paragraph">
                                11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                            </h3>
                            <p className="hero-paragraph">
                                In Short: Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).
                                <br />
                                <br />
                            </p>
                            <h3 className="hero-paragraph">
                                12. DO WE MAKE UPDATES TO THIS NOTICE?
                            </h3>
                            <p className="hero-paragraph">
                                In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
                                <br />
                                <br />
                            </p>
                            <h3 className="hero-paragraph">
                                13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                            </h3>
                            <p className="hero-paragraph">
                                If you have questions or comments about this notice, you may email us at appdrinkee@gmail.com.
                                <br />
                                <br />
                            </p>
                            <h3 className="hero-paragraph">
                                14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
                            </h3>
                            <p className="hero-paragraph">
                                Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. You can review, update, or delete your personal information within the app, or by requesting us via email appdrinkee@gmail.com.
                                <br />
                                <br />
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <script src="dist/js/main.min.js"></script>

            <footer className="site-footer">
                {Footer()}
            </footer>
        </main>
    }
}


