const express = require('express');
const mongoose = require('mongoose');
const Produce = require('../../models/produce');

const typeDefs = gql`
  type Produce {
    id: ID!
    name: String!
    price: Float!
    photo: String
    farmer: ID!
  }

  input ProduceInput {
    name: String!
    price: Float!
    photo: Upload
    farmer: ID!
  }

  type Query {
    produce(id: ID!): Produce
    allProduce: [Produce!]!
  }

  type Mutation {
    createProduce(input: ProduceInput!): Produce
    updateProduce(id: ID!, input: ProduceInput!): Produce
    deleteProduce(id: ID!): Produce
  }
`;

const resolvers = {
  Query: {
    produce: async (parent, { id }) => await Produce.findById(id),
    allProduce: async () => await Produce.find()
  },
  Mutation: {
    createProduce: async (parent, { input }) => await Produce.create(input),
    updateProduce: async (parent, { id, input }) => {
      await Produce.findByIdAndUpdate(id, input);
      return await Produce.findById(id);
    },
    deleteProduce: async (parent, { id }) => await Produce.findByIdAndDelete(id)
  }
};

module.exports = {
  typeDefs,
  resolvers,
  context: async ({ req, res }) => ({ req, res })
};

