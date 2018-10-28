const express = require('express')
const item=require('./db').item
const app=express();
const cart=require('./db2').cart
let total=0;

app.set('view engine','hbs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',async(req,res)=>{
	const items=await item.findAll({
		order:[
		['price','DESC']
		]
	})
	res.render('index',{items})
})



app.get('/page2',async(req,res)=>{
	const items=await item.findAll({
		order:[
		['price','DESC']
		]
	})
	res.render('page2',{items})
})

app.get('/page3',async(req,res)=>{
	const carts=await cart.findAll({
		order:[
		['price','DESC']
		]
	})
	res.render('page3',{carts})
})

app.post('/page2',async(req,res)=>{
	try{
	await cart.create({
		product:req.body.product,
		price:req.body.price || undefined,
		pID:req.body.pID
	})
	}catch(e){
		console.error(e);
	}
	res.redirect('/page2')
})

app.post('/',async(req,res)=>{
	await item.create({
		product:req.body.product,
		price:req.body.price || undefined,
		quantity:req.body.quantity,
		pID:req.body.pID,
		purl:req.body.purl
	})
	res.redirect('/')
})

app.listen(7000,()=>{
	console.log('server started')
})