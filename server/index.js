import express from 'express';
import fetchProperties from '../src/server/realtor/fetchProperties';

const app = express();

app.get('/api/properties', async (req, res) => {
  const body = await fetchProperties();
  console.log(body);

  res.send(body);
});

app.listen(5000, () => console.log(`Listening on port ${port}`));
