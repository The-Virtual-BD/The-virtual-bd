import React from 'react';
import WhatsAppWidget from "react-whatsapp-chat-widget";
import logo from '../Images/The-virtual-BD.png'

const WhatsApp = () => {
    return (
        <WhatsAppWidget
        phoneNo="8801985308586"
        position="right"
        widgetWidth="300px"
        widgetWidthMobile="260px"

        // autoOpen={true}
        // autoOpenTimer={5000}
        messageBox={true}
        messageBoxTxt="Hi Team, is there any related service available ?"

        iconSize="50"
        iconColor="white"
        iconBgColor="#25D366"
        
        headerIcon={logo}
        headerIconColor="pink"
        headerTxtColor="white"
        headerBgColor="#3498db"
        headerTitle="The Virtual BD"
        headerCaption="Online"

        bodyBgColor="#bbb"
        chatPersonName="Support Team"
        chatMessage={<>Hi there 👋 <br /><br /> How can I help you?</>}
        footerBgColor="#ECF0F1"
        placeholder="Type a message.."
        btnBgColor="#3498db"
        btnTxt="Start Chat"
        btnTxtColor="white"
    />
    );
};

export default WhatsApp;