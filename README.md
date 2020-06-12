# Assistant OAuth Boilerplate

A boilerplate code for linking your account to Google Assistant via **OAuth Implicit SignIn Flow**. Use this boilerplate if you want to allow users to login via one of Firebase's OAuth Flow or need extra scopes for Assistant Apps.

## Steps to Setup

1. Create a firebase project and enable [required sign in method](https://console.firebase.google.com/project/_/authentication/providers).
2. Clone this project on your local pc.
3. Change [index.html](./public/index.html) to configure how you want the user to login. You might consider adding Facebook/GitHub providers or changing Google scope. It uses [firebase-ui](https://firebase.google.com/docs/auth/web/firebaseui) for quick implementation.
4. Deploy via `firebase deploy`. Note down your hosting & functions URL.
5. Link firebase project to [actions.google.com](https://console.actions.google.com)
6. Scroll down to the More options section and click on the Conversational card.
7. Go to [Account Linking](https://console.actions.google.com/project/_/accountlinking/) under Develop tab.
8. Select **No, I only want to allow account creation on my website** in Account Creation. 
9. Set Linking type to OAuth Implicit.
10. Set Client ID to `google` & previous noted hosting URL as authorization URL.
11. Go to Actions & Create a custom action with Dialogflow.
12. Enable Fulfillment with previously noted functions URL as webhook URL.
13. Create a new `Get SignIn` intent, set its Event as 'actions_intent_SIGN_IN'. Also Enable webhook call for this intent under Fulfillment. Leave other field empty.
14. Enable webhook call for welcome intent. (You might later need to change this).
15. Test how it works on Google Assistant ;)


## Next Steps

This is a bare bones setup, avoiding all the complexities of understanding OAuth for simple apps. You would probably next need to change how your auth webpage look. Along with it you can edit index.js in functions to add functionalities to your dialogflow app.

A common use case is saving current user's data is firebase realtime database on signup.

You can do that simply by accessing `firebase.database()`.