'use strict';

var mongoose=require('mongoose');

var bookModel=function(){
	var bookSchema=mongoose.Schema({
		title:String,
		category:String,
		description:String,
		author:String,
		publisher:String,
		price:Number,
		cover:String
	});

	//shorten text
	bookSchema.methods.truncText=function(Length){
		return this.description.substring(0,Length);
	};

	return mongoose.model('Book',bookSchema);
};

module.exports=new bookModel();