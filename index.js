const app_PDF = require('html-pdf');
const ejs = require('ejs')


const name = "Lourenço Cardoso"
const descri = " Programador web, trabalho com Nextjs, Nodejs, Taiwind, Reactjs, JS, C#, HTML e CSS, Design UI."

ejs.renderFile("./index.ejs", {nome: name, descripition: descri}, (err, html) => {
    err == true ? console.log(err) :
        app_PDF.create(html, {}).toFile('./files/mayFiles.pdf', (err, res) => {
            err == true ? console.log(err) : console.log(res)
        })
})
