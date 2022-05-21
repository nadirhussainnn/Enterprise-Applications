const Todo=require('../models/todoModel')
const path=require('path')

const displayHomePage=async(req, res)=>{
    res.render('index', {name:'Kinza'})
}

const displayAddTodoPage=async(req, res)=>{
    res.render('addTodoPage');
}

const addTodoItem=async(req, res)=>{

    const {image}=req.files
    image.mv(path.resolve(__dirname,'../public/images',image.name),(error)=>{
        if(!error){

            Todo.create({...req.body,image:image.name},(error, item)=>{
                if(!error){
                    res.redirect('/api/viewAllTodos')
                }
                else{
                    res.redirect('/api/displayAddTodoPage')
                }
            })
        }
        else{
            console.log(error)
        }
    })
    

    //
}

const viewAllTodos=async(req, res)=>{
    
    const data=await Todo.find()
    res.render('displayTodos', {data})
}

const deleteItem=async(req, res)=>{

    const {id}=req.query

    const deletedItem=await Todo.findByIdAndRemove(id)
    const data=await Todo.find()
    res.render('displayTodos', {data})
}

const updateItemPage=async(req, res)=>{

    const {id}=req.query

    const data=await Todo.findById(id)
    res.render('updateItem', {data})
}

const updateItemById=async(req, res)=>{

    const {description}=req.body
    const {image}=req.files
    const {id}=req.query
    
    image.mv(path.resolve(__dirname,'../public/images', image.name),(error)=>{
        if(!error){

            Todo.findByIdAndUpdate(id,{description:description,image:image.name},(error, doc)=>{
                
                if(!error){
                    res.redirect('/api/viewAllTodos')
                }
                else{
                    res.redirect('/api/updateItem')
                }
            })

        }
        else{
            res.redirect('/api/updateItem')
        }
    })
}
module.exports={
    displayHomePage,
    displayAddTodoPage,
    addTodoItem,
    viewAllTodos,
    deleteItem,
    updateItemPage,
    updateItemById
}
