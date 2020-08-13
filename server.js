const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/noticeboard',(req,res)=>{
    res.send(
        [
            {
                'id': 1,
                'title': "상찡아",
                'content': "보고싶구나",
                'time': "2020-08-13",
                'author': "ASDFSDF"
            },
            {
                'id': 2,
                'title': "세찡아",
                'content': "만지고싶구나",
                'time': "2020-08-13",
                'author': "팡키"
            },
            {
                'id': 3,
                'title': "지혐아",
                'content': "뜯고싶구나",
                'time': "2020-08-13",
                'author': "팡키"
            }
        ]
    )
})

app.listen(port,()=>console.log(`Listening on port ${port}`))