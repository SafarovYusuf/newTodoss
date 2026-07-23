import client, { baseDomain } from "./client";

class TodoService {
  // ------------- AllTodos ---------------------------
  async getAlltodos() {
    const todos = await client
      .get(baseDomain)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });

    return todos;
  }

  // ------------- CreateTodos ---------------------------

  async createTodo(text) {
    const createData = client
      .post(baseDomain, { text })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });

    return createData;
  }

  // -------------  ---------------------------
  async getById(id) {
    const endpoint = `/${id}`;
    const Data = client
      .get(`${baseDomain}/${id}`)
      .then((res) => res.data)
      .catch((err) => err);
    return Data;
  }

  // O'chirish — DELETE
  async deleteTodo(id) {
    return client
      .delete(`${baseDomain}/${id}`)
      .then((res) => res.data)
      .catch((err) => err);
  }

  // Yangilash — PUT
  async updateTodo(id, text) {
    return client
      .put(`${baseDomain}/${id}`, { text })
      .then((res) => res.data)
      .catch((err) => err);
  }
}

export default new TodoService();
