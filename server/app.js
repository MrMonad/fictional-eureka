const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()
app.use(cors())
const port = 4000

app.get('/', (req, res) => {
    axios.get('http://app.linkedin-reach.io/words?&minLength=5&maxLength=10')
        .then((response) => {
            return res.send(response.data.split('\n'))
        })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))