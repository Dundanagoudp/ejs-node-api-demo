
const http = require("http");

const server =http.createServer( (req, res)=>{
      if(req.url === "/"){
            res.write("hello world 2");
            res.end();
      }
      if(req.url === "/source"){
            res.write("fcgvhbjnkmnfcgvhbjnjkvghcfgvbnm");
            res.end();
      }
});




const PORT =3000;
server.listen( PORT, ()=>{
      console.log(`server is running on port ${PORT}`);
})