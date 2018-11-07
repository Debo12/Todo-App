var bodyParser = require('body-parser');
var urlencodedparser = bodyParser.urlencoded({extended:false});
var mongoose = require('mongoose');
//var todoItem = [{item:'hi'},{item:'bye'},{item:'ciao'}];

mongoose.connect('mongodb://debo12:debo1234@ds018538.mlab.com:18538/practice-db');
var todoSchema = new mongoose.Schema({
    item : String
});

var todomodel = mongoose.model('debolists',todoSchema);


module.exports = (app)=>{
    app.get('/todo', (req, res) => {
        todomodel.find({},(err,data)=>{
            if(err){
                throw err;
            }
            res.render('todoView',{todoItem: data});
        });
    });

    app.post('/todo', urlencodedparser, (req, res) => {
        var todoitem = todomodel(req.body).save((err,data)=>{
            if(err){
                throw err;
            }
            res.json(todoItem);      
        });
        // todoItem.push(); 
    });

    app.delete('/todo/:item', (req, res) => {
        todomodel.find({item:req.params.item.replace(/\-/g, " ")}).remove((err,data)=>{
            if(err){
                throw err;
            }
            res.json(data);
        });
    });
};