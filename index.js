const { PublicClientApplication } = require('@azure/msal-node');

function processDeviceCodeCallback(response) {
  console.log(response);
}

const deviceCodeRequest = {
  deviceCodeCallback: processDeviceCodeCallback,
  scopes: [`https://graph.microsoft.com/.default`]
}

const app = new PublicClientApplication({
  auth: {
    clientId: '31359c7f-bd7e-475c-86db-fdb8c937548e',
    authority: `https://login.microsoftonline.com/common`
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        console.log(message);
      },
      logLevel: 0
    }
  }
});
app.acquireTokenByDeviceCode(deviceCodeRequest).then(function (result) {
  console.log(result);
});