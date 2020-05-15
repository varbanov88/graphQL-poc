const { DataSource } = require("apollo-datasource");

class CompanyAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async create(input = {}) {
    const dbContact = await this.find(input);
    if (dbContact) {
      return dbContact;
    }

    const contact = await this.store.contacts.create(input);
    return contact;
  }

  async find(input) {
    const contact = await this.store.contacts.findOne({
      where: input,
    });
    return contact;
  }

  async getAll() {
    const companies = await this.store.companies.findAll();
    return companies ? companies : [];
  }

  async delete(id) {
    const result = await this.store.contacts.destroy({
      where: { id },
    });

    return result === 1;
  }
}

module.exports = CompanyAPI;
