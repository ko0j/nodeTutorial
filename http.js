const http = require('http');

                            //request, response
const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.end("Welcome to our home page")
    }
    if (req.url === '/about'){
        res.end("Welcome to our about page")
    }
    //res.write("Welcome to the about page")

    res.end(`
    <h1>Oups!</h1>
    <p>We cant seek to find the page you are looking for</p>
    <a href="/">Back home</a>
    `)

})

server.listen(5000)