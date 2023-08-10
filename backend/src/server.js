import express from 'express';
import connectionDatabase from './database/db.js';
import routes from './routes.js'

const app = express();

const port = 3000;

app.use(express.json());
app.use(routes);

connectionDatabase()
.then(()=>{
    app.listen(port, () => { console.log(`App rodando na porta ${port}`);
    })
})
.catch(error =>{ console.log('Erro:', error);
});
