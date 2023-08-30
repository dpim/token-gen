# API Token Generator
Token generator for minting personal user Webflow OAuth tokens

## Instructions
1. Create a new Vercel project
2. Import this repo
  ![image](https://github.com/dpim/token-gen/assets/3460953/58b580e1-6d1f-4e8d-97e0-373acf366ea4)

3. Keep all settings as default
![image](https://github.com/dpim/token-gen/assets/3460953/73ad1e53-6b09-428b-abb4-55b8ab67bc74)
4. Add three environment variables
    - `WEBFLOW_CLIENT_ID` - your v1 App's client id
    - `WEBFLOW_SECRET` - your v1 App's client secret
    - `TOKEN_ENDPOINT_URL` - set this to `https://api.webflow.com/oauth/token`
5. Hit deploy
6. In your Webflow Workspace Settings, update your v1 App's redirect URI to `abc.vercel.app/api/token`
    - replace `abc` with your Vercel project URI
8. Share the following link with users to get a token: `https://webflow.com/oauth/authorize?client_id=xyz&response_type=code`
    - replace `xyz` with your Webflow App client id

  ## Notes
- If you make code changes, please re-run `npm install` and `npm run build` inside of `/api`
