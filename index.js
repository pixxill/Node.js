const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/firstname', (req, res) => {
    res.send('Rigie'.toUpperCase()); 
});

app.get('/lastname', (req, res) => {
    res.send('Rosal'.toUpperCase()); 
});

app.get('/age', (req, res) => {
    res.send('23'); 
});

app.get('/schoolemail', (req, res) => {
    res.send('rigm.rosal.swu@phinmaed.com'); 
});

app.get('/mydata', (req, res) => {
    const myData = {
        first_name: 'Rigie'.toUpperCase(),  
        last_name: 'Rosal'.toUpperCase(),    
        age: 23,                                
        school_email: 'rigm.rosal.swu@phinmaed.com'         
    };
    res.json(myData);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});