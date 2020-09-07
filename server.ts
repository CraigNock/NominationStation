export {}
import express from 'express';
import * as path from 'path';

const app: express.Application = express();
const PORT: string | number = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, '/client/build')));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(PORT, ()=>{console.log(`Listening on Porto ${PORT}`);});