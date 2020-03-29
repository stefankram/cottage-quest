import express from 'express';
import fetchProperties from './external/realtor/fetchProperties';

const app = express();

app.get('/api/properties', async (req, res) => {
  const body = await fetchProperties();

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(body.data));
});

app.listen(5000, () => console.log('Listening on port 5000'));
