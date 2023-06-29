import express, { Request, Response } from 'express';
import axios from 'axios';

require('dotenv').config();

const app = express();
const { WEBFLOW_CLIENT_ID, WEBFLOW_SECRET, PORT, TOKEN_ENDPOINT_URL } = process.env;

app.use(express.json());

app.get('/api', async (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=0, stale-while-revalidate');
  res.send("Use the /token path!");
});

app.get('/api/token', async (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age-0, stale-while-revalidate');
  try {
    const { code } = req.query as { code?: string };
    const token = await getToken(code);
    res.send(token);
  } catch (error) {
    res.status(400).send();
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const getToken = async (code: string) => {
  try {
    const response = await axios.post(TOKEN_ENDPOINT_URL, {
      client_id: WEBFLOW_CLIENT_ID,
      client_secret: WEBFLOW_SECRET,
      code: code,
      grant_type: 'authorization_code',
    });
    const accessToken = response.data.access_token;
    return accessToken;
  } catch (error) {
    throw error;
  }
}

module.exports = app;