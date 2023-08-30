# API Token Generator
Token generator for testing

Instructions
- Create a new Vercel project
- Import this repo
- Keep all settings as default
- Add three environment variables
    - `WEBFLOW_CLIENT_ID` - your v1 App's client id
    - `WEBFLOW_SECRET` - your v1 App's client secret
    - `TOKEN_ENDPOINT_URL` - set this to `https://api.webflow.com/oauth/token`
- Hit deploy
- In your Workspace Settings, update your v1 App's redirect URI to `<your project name>.vercel.app/api/token`
- Share the following link with users to get a token: `https://webflow.com/oauth/authorize?client_id=xyz&response_type=code` (replace xyz with your client id)