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
    email:{type: GraphQLString},
    password:{type: GraphQLString},
    produce:{
      type: ProduceSCHEMA,
      resolve (parent,args){
        return Produce.find(Farmer.produce)
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
          return Farmer.findById(parent.farmer)
        }
  
      }
    })
  });

const RootQuery = new GraphQLObjectType({
  
    name:'RootQueryType',
    fields:{

      //farmer queries
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
          return Farmer.findById(args.id);
        },
      },
    

      //Produce queries
      produces:{
        type: new GraphQLList(ProduceSCHEMA),
        resolve(parent,args){
          return Produce.find();
        },
      },
      produce: {
        type:ProduceSCHEMA,
        args:{ id:{type: GraphQLID}},
        resolve (parent, args){
          return Produce.findById(args.id)
        },
      },      
    },


      
  });
  
  const mutation = new GraphQLObjectType({
    name: 'Mutation',
    //farmer mutations
    fields:{
      //add farmer
      addfarmer:{
        type: FarmerSCHEMA,
        args: {
          name: {type: GraphQLNonNull(GraphQLString)},
          username:{type: GraphQLNonNull(GraphQLString)},
          password:{type: GraphQLNonNull(GraphQLString)},
          email:{type: GraphQLNonNull(GraphQLString)},
          produce:{type: GraphQLList(GraphQLID)},
        },
        resolve(parent,args) { 
          const farmer = new Farmer({
            name: args.name,
            username: args.username,
            password: args.password,
            email: args.email,
            produce: args.produce,
          });
          return farmer.save();
        },
      },

      // delete farmer
        deletefarmer:{
          type: FarmerSCHEMA,
          args:{
            id:{ type: GraphQLNonNull(GraphQLID)},
          },
          resolve(parent,args) {
            return Farmer.findByIdAndRemove(args.id);
        },
      },
         //add produce
         addproduce:{
          type:ProduceSCHEMA,
          args:{
            name:{type: GraphQLNonNull(GraphQLString)},
             price:{type: GraphQLNonNull(GraphQLString)},
            photo:{type: (GraphQLString)},
            farmer:{type: GraphQLNonNull(GraphQLID)},
          },
          resolve(parent,args){
            const produce = new Produce({
              name: args.name,
              price: args.price,
              photo: args.photo,
              farmer: args.farmer
            });
            return produce.save();
         },
      },
      //delete produce
      deleteproduce:{
        type: ProduceSCHEMA,
        args:{
          id:{ type: GraphQLNonNull(GraphQLID)},
        },
        resolve(parent,args) {
          return Produce.findByIdAndRemove(args.id);
      },
    },
    // update produce
    updateproduce:{
      type: ProduceSCHEMA,
      args: {
        id:{ type: GraphQLNonNull(GraphQLID)},
        name: {type:GraphQLString},
        price:{type:GraphQLString},
        photo:{type:GraphQLString},
      },
      resolve(parent,args){
        return Produce.findByIdAndUpdate(
          args.id,
          {
            $set:{
              name:args.name,
              price: args.price,
              photo: args.photo,
            },
          },
          {new:true}
        );
      }
    },


    } ,
  });
  
  
 
 
  

  

  
  module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
  });

  