// const express = require('express');
// const cors = require('cors');

// const app = express();

// app.use(cors())

// let data = [
//     {
//         id : 1,
//         msg : "1"
//     },
//     {
//         id : 2,
//         msg : "1"
//     },
//     {
//         id : 3,
//         msg : "1"
//     },
//     {
//         id : 4,
//         msg : "1"
//     },
//     {
//         id : 5,
//         msg : "1"
//     },
// ]

// app.get('/data',(req,res)=>{
//     res.status(200).json({data : data})
// })

// app.listen(5000, ()=>{
//     console.log("Port connecteddd")
// })
const express = require('express');
const cors = require('cors');

const app = express();

// Smell: Long method
app.use(cors());

// Smell: Duplicate code
const data = [
    { id: 1, msg: "1" },
    { id: 2, msg: "1" },
    { id: 3, msg: "1" },
    { id: 4, msg: "1" },
    { id: 5, msg: "1" }
];

// Smell: Complexity
app.get('/data', (req, res) => {
    if (req.query && req.query.filter) {
        const filteredData = data.filter(item => item.msg === req.query.filter);
        res.status(200).json({ data: filteredData });
    } else {
        res.status(200).json({ data: data });
    }
});

// Smell: Code style violation (Improper indentation)
app.listen(5000, () => {
    console.log("Port connecteddd")
})

