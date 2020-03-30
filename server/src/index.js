import path from 'path';
import express from 'express';
import cors from 'cors';
import fetchProperties from './external/realtor/fetchProperties';

const app = express();

app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/api/properties', cors(), async (req, res) => {
  const body = await fetchProperties(req.query);

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(body.data));
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(process.env.NODE_ENV === 'production' ? 80 : 5000, () => console.log('Listening on port x'));
