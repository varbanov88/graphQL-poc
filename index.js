const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const { createStore } = require("./utils");

const ContactAPI = require("./datasources/contact");
const CompanyAPI = require("./datasources/company");

const store = createStore();

const dataSources = () => ({
  contactAPI: new ContactAPI({ store }),
  companyAPI: new CompanyAPI({ store }),
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
