const conn = require('../db/conn')

module.exports = class ProductController{
    static getAllProduct(req, res){
       return res.render("product/home")
       try {
        const sql = `SELECT * FROM tb_lista`;
        conn.query(sql, (err, data)=>{
            if (err) {
                console.log(err);
            }

            const products = data
            console.log(product);
            return res.render("product/home")
        })
       } catch (error) {
        console.error(error)
        res.status(500).json("error no servidor", { products })
       }
    }

    static createProduct(req, res){
        try {
            if (!req.body.name || !req.body.quantidade) {
                return res.status().json({
                    message: "Por Favor, preencha todos os campos"
                })
            }

            const {nome, quantidade} = req.body 

            const sql = `INSERT INTO tb_lista(nome, quantidade) VALUES("${nome}", "${quantidade}")`;

            conn.query(slq, (err)=>{
                if (err) {
                    console.log(err);
                } 
                return res.redirect('/product')
            })
        } catch (error) {
            console.error(error)
            res.status(500).json("error no servidor")
        }
    
    }

    static getProduct(req, res){
        try {
            const {id} = `SELECT * FROM tb_lista WHERE id=${id}`;

            conn.query(sql, (err, data)=>{
                if(err){
                    console.log(err);
                }
                const product = data [0]
                console.log(product);
                return res.render('product/update', {product})
            })

        } catch (error) {}
    }

    static updateProduct(req, res){}

    static removeProduct(req, res){
        try {
            const {id} = req.body
            const sql = `DELETE FROM tb_lista WHERE id = ${id}`

            conn.query(sql,(err)=>{
             if (err) {
                console.log(err);
             }

             return res.redirect('/product')
            })
        } catch (err) {
            console.log(error);
            res.status(500).json("error no servidor")
        }
    }
}
