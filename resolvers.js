module.exports = {
  Query: {
    findContact: async (_, { input }, context) => {
      const contact = await context.dataSources.contactAPI.find(input);
      return contact;
    },
    getAllContacts: async (_, __, context) => {
      const contacts = await context.dataSources.contactAPI.getAll();
      return contacts;
    },
  },
  Mutation: {
    createContact: async (_, { input }, context) => {
      const contact = await context.dataSources.contactAPI.create(input);
      return contact;
    },
    deleteContact: async (_, { id }, context) => {
      const result = await context.dataSources.contactAPI.delete(id);
      return result;
    },
    updateContact: async (_, { id, input }, context) => {
      const result = await context.dataSources.contactAPI.update(id, input);
      return result;
    },
  },
};
