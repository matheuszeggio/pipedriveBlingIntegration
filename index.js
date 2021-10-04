require('dotenv').config();
const configExpress = require('./src/config/express');
const app = configExpress();

const PORT = 3000;
try {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
    
} catch(error){
    console.log(error)
}
