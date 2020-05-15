module.exports = {
  Query: {
    findContact: async (_, { input }, context) => {
      const contact = await context.dataSources.contactAPI.find(input);
      return contact;
    },
    allContacts: async (_, __, context) => {
      const contacts = await context.dataSources.contactAPI.getAll();
      return contacts;
    },
    allCompanies: async (_, __, context) => {
      const companies = await context.dataSources.companyAPI.getAll();
      return companies;
    },
    findCompany: async (_, { id }, context) => {
      const company = await context.dataSources.companyAPI.find({
        id,
      });
      return company;
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
  Contact: {
    company: async (contact, __, context) => {
      if (!contact || !contact.company_id) {
        return null;
      }

      const company = await context.dataSources.companyAPI.find({
        id: contact.company_id,
      });
      return company;
    },
  },
};
