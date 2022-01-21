import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
    window.gapi.load('client:auth2', () => { //Load OAuth Client from Google APIs
        window.gapi.client.init({ //Initialize Google API Library with OAuth 'clientId'
            clientId: '126153606708-7ntu60t8857upt6nlof5m2qqsognkrj4.apps.googleusercontent.com',
            scope: 'email'  //Specify client information we want to receive in scope
            });
        });
    }

    render() {
        return <div>Google Auth</div>;
    }
}


export default GoogleAuth;

//126153606708-7ntu60t8857upt6nlof5m2qqsognkrj4.apps.googleusercontent.com