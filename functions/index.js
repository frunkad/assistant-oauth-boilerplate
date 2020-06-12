const functions = require('firebase-functions');
const {
    dialogflow,
    SignIn
} = require('actions-on-google');

const app = dialogflow({ debug: true });

app.intent('Default Welcome Intent', (conv) => {
    if (conv.user.verification !== 'VERIFIED') {
        return conv.close(`Hi! You'll need to be a verified user to use this sample`);
    }
    if (!conv.data.count) {
        conv.data.count = 0;
    }
    conv.data.count += 1;
    conv.ask(new SignIn());
});

app.intent('Get Signin', (conv, params, signIn) => {
    if (signIn && signIn.status === 'OK') {
        const access = conv.user.access.token // possibly do something with access token
        console.log(access);
        conv.ask('Thanks for signing in! Mind repeating what you last said?')
    } else {
        conv.ask(`I won't be able to save your data, and thus tell your time table. Anything else I could help you with?`)
    }
})

exports.googleAction = functions.https.onRequest(app);
