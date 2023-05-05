
const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const mongoose = require('mongoose');
const Farmer = require('../../models/user');
const Produce = require('../../models/produce');

// Set up the GraphQL schema
const typeDefs = gql`
  type Farmer {
    id: ID!
    name: String!
    username: String!
    password: String!
    produce: [Produce!]!
  }

  input FarmerInput {
    name: String!
    username: String!
    password: String!
  }

  type Query {
    farmer(id: ID!): Farmer
    allFarmers: [Farmer!]!
  }

  type Mutation {
    createFarmer(input: FarmerInput!): Farmer
    updateFarmer(id: ID!, input: FarmerInput!): Farmer
    deleteFarmer(id: ID!): Farmer
    addFruitToFarmer(farmerId: ID!, produceId: ID!): Farmer
  }
`;

// Set up the GraphQL resolvers
const resolvers = {
  Query: {
    farmer: async (parent, { id }) => await Farmer.findById(id).populate('produce'),
    allFarmers: async () => await Farmer.find().populate('produce')
  },
  Mutation: {
    createFarmer: async (parent, { input }) => await Farmer.create(input),
    updateFarmer: async (parent, { id, input }) => {
      await Farmer.findByIdAndUpdate(id, input);
      return await Farmer.findById(id);
    },
    deleteFarmer: async (parent, { id }) => await Farmer.findByIdAndDelete(id),
    addFruitToFarmer: async (parent, { farmerId, produceId }) => {
      const farmer = await Farmer.findById(farmerId);
      farmer.produce.push(produceId);
      await farmer.save();
      return await farmer.populate('produce');
    }
  }
};

module.exports = {
    typeDefs,
    resolvers,
    context: async ({ req, res }) => ({ req, res })
  };