
const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { DateTimeResolver } = require('graphql-scalars');


const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id })
            .select('-__v -password')
            .populate('experiences');
  
          return userData;
        }
  
        throw new AuthenticationError('Not logged in');
      },
      //all Users
      users: async () => {
        return User.find()
          .select('-__v -password')
          .populate('experiences')
          //.populate('friends')
      },
      //User by username
      user: async (parent, { _id }) => {
        return User.findOne({ _id })
          .select('-__v -password')
          .populate('experiences')
          //.populate('friends')
      },
      profile: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id })
            .select('-__v -password')
            .populate('experiences');
  
          return userData;
        }
  
        // throw new AuthenticationError('Not logged in');
      },
    },

    Mutation: {
        addUser: async (parent, args) => {
          const user = await User.create(args);
          const token = signToken(user);
    
          return { token, user };
        },
    
          // ===============================================================================================
    
        login: async (parent, { email, password }) => {
          const user = await User.findOne({ email });
    
          if (!user) {
            throw new AuthenticationError('Incorrect credentials');
          }
    
          const correctPw = await user.isCorrectPassword(password);
    
          if (!correctPw) {
            throw new AuthenticationError('Incorrect credentials');
          }
    
          const token = signToken(user);
          return { token, user };
        },
    
          // ===============================================================================================
    
        userUpdate: async (parent, args, context) => {
          if (context.user) {
            console.log(args)
            //return await User.findByIdAndUpdate(context.user._id, args.input, { new: true });
            const updatedUser = await User.findByIdAndUpdate(context.user._id, args.input, { new: true }).exec();
            return updatedUser
          }
    
          throw new AuthenticationError('Not logged in');
        },
   
    
        // ===============================================================================================
    
    
 
      },  
    };
    
    module.exports = resolvers;
    