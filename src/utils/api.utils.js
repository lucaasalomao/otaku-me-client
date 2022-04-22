/* import axios from 'axios'

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: "https://lab-todos.herokuapp.com"
    })

    this.api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token');
        if (token) {
          config.headers = {
            'Authorization': `Bearer ${token}`
          }
        }
        return config;
      },
      (error) => {
        console.log(error)
      }
    )

    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
        }
        throw error;
      }
    )
  }

  addTodo = async (title) => {
    try {
      const { data } = await this.api.post('/todos', { title });
      return data;
    } catch (error) {
      throw error.response;
    }

  }

  getTodos = async () => {
    try {
      const { data } = await this.api.get('/todos')
      return data;
    } catch (error) {
      throw error.response;
    }
  }

  updateTodo = async (id, todo) => {
    try {
      await this.api.put(`/todos/${id}`, todo);
    } catch (error) {
      throw error.response;
    }
  }

  deleteTodo = async (id) => {
    try {
      await this.api.delete(`/todos/${id}`)
    } catch (error) {
      throw error.response;
    }
  }

  login = async (user) => {
    try {
      const { data } = await this.api.post('/auth/login', user);
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
      return data;
    } catch (error) {
      throw error.response;
    }
  }

  getProfile = async () => {
    try {
      const {data} = await this.api.get('/user');
      return data
    } catch (error) {
      throw error.response;
    }
  }

  updateImage = async (file) => {
    try {
      const imgData = new FormData();
      imgData.append('image', file);

      const {data} = await this.api.put('/user/image', imgData);
      return data;
    } catch (error) {
      throw error.response;
    }
  }

}

export default new Api() */