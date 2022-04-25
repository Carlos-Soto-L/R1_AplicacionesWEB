const {Router} = require("express");
const res = require("express/lib/response");
const bookcontroller = require("../controller/bookControllers");
const Libro = require("../models/libro");


const router = Router();

router.get("/",(req, res)=>{
    res.render("index");
});

router.get("/crearlibro",(req, res)=>{
    res.render("formBook");
});

router.get("/libros",bookcontroller.libros);


router.get("/actualizarlibros/:id",bookcontroller.FormLibro)


router.post("/actualizarlibro/:id",bookcontroller.actualizarlibro);


router.post("/eliminarlibro/:id",bookcontroller.eliminarlibro);

router.post("/buscarlibro",bookcontroller.buscarlibro);


router.post("/crearlibro",bookcontroller.crearlibro);







module.exports =  router;