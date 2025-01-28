let fs = require('fs');

let args = process.argv.slice(2);

let fileName = args[0];

fs.readFile(fileName,'UTF-8',(error, data)=>{
    
    if(error){console.log("Error Personalizado");}

    fs.writeFile("Arquivo Criado por mim",data.toUpperCase(),(error)=>{
        if(error)throw error;

        console.log("Arquivo Criado com Sucesso");
    })
})