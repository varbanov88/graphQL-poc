const { DataSource } = require("apollo-datasource");

class ContactAPI extends DataSource {
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

  async update(id, contact) {
    // [rows affected]
    const result = await this.store.contacts.update(contact, {
      where: { id },
    });
    return result[0] === 1;
  }

  async getAll() {
    const contacts = await this.store.contacts.findAll();
    return contacts ? contacts : [];
  }

  async delete(id) {
    const result = await this.store.contacts.destroy({
      where: { id },
    });

    return id === result;
  }
}

module.exports = ContactAPI;
