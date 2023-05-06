const express = require('express');
const mongoose = require('mongoose');
const Farmer = require('../models/user');
const Produce = require('../models/produce')

const{ 
  GraphQLObjectType, 
  GraphQLID, 
  GraphQLString, 
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLFloat
}= require ('graphql');

//farmer 
const FarmerSCHEMA = new GraphQLObjectType({
  name:'Farmer',
  fields:() => ({
    id:{type: GraphQLID},
    name:{type: GraphQLString},
    username:{type: GraphQLString},
    password:{type: GraphQLString},
    produce:{
      type: ProduceSCHEMA,
      resolve (parent,args){
        return Produce.findById(parent.ProduceId)
      }
    }
  })
});

//Produce
const ProduceSCHEMA = new GraphQLObjectType({
    name:'Produce',
    fields:() => ({
      id:{type: GraphQLID},
      name:{type: GraphQLString},
      price:{type: GraphQLFloat},
      photo:{type: GraphQLString},
      farmer:{
        type: FarmerSCHEMA,
        resolve (parent,args){
          return Farmer.findById(parent.FarmerId)
        }
  
      }
    })
  });

const RootQuery = new GraphQLObjectType({
  //farmer queries
    name:'RootQueryType',
    fields:{
      farmers:{
        type: new GraphQLList(FarmerSCHEMA),
        resolve(parent,args){
          return Farmer.find();
        },
      },
      farmer: {
        type: FarmerSCHEMA,
        args:{ id:{type: GraphQLID}},
        resolve (parent, args){
          return Farmer.findByID(args.id);
        },
      },
    },

      //Produce queries
        produces:{
          type: new GraphQLList(ProduceSCHEMA),
          resolve(parent,args){
            return Produce.Find();
          },
        },
        produce: {
          type:ProduceSCHEMA,
          args:{ id:{type: GraphQLID}},
          resolve (parent, args){
            return Produce.FindById(args,id)
          },
        },
      
  });
  
  const mutation = new GraphQLObjectType({
    name: 'Mutation',
    //farmer mutations
    fields:{
      addfarmer:{
        type: FarmerSCHEMA,
        args: {
          name: {type: GraphQLNonNull(GraphQLString)},
          username:{type: GraphQLNonNull(GraphQLString)},
          password:{type: GraphQLNonNull(GraphQLString)},
          produce:{type: (GraphQLString)},
        },
        resolve(parent,args) { 
          const farmer = new Farmer({
            name: args.name,
            username: args.username,
            password: args.password,
            produce: args.produce,
          });
          return farmer.save();
        },
  
      }
    }
  });
  
  
 
 
  

  

  
  module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
  });