import axios from 'axios'

class Api {

  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:7500"
    }) 

    this.api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token')
        if (token) {
          config.headers = {
            'Authorization': `Bearer ${token}`
          }
        }
        return config
      },
      (error) => {
        console.log(error)
      }
    )

    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          localStorage.removeItem('token')
          localStorage.removeItem('username')
        }
        throw error
      }
    )

  }

  signin = async (user) => {
    try {
      const { data } = await this.api.post("/signin", user)
      localStorage.setItem('token', data.token)
      localStorage.setItem('username', data.username)
      return data
    } catch (error) {
      throw error.response
    }
  }

  verifyToken = async () => {
    try {
      const { data } = await this.api.get("/verify-token")
      return data.message
    } catch (error) {
      throw error.response
    }
  }

  verifyFollower = async () => {
    try {
      const { data } = await this.api.get(`/user/following/check`)
      return data
    } catch (error) {
      throw error.response
    }
  }

  getUserInfoFromDB = async (username) => {
    try {
      const { data } = await this.api.get(`/user/${username}`)
      return data
    } catch (error) {
      throw error.response
    }
  }

  getAllByTypeFromDB = async (type) => {
    try {
      const { data } = await this.api.get(`/${type}/search/all`)
      return data
    } catch (error) {
      throw error.response
    }
  }

  getAllByTypeAndTextFromDB = async (type,text) => {
    try {
      const { data } = await this.api.get(`/${type}/search/${text}`)
      return data
    } catch (error) {
      throw error.response
    }
  }

  getUserFollowersInfoFromDB = async () => {
    try {
      const { data } = await this.api.get(`/user/following/activity`)
      return data
    } catch (error) {
      throw error.response
    }
  }

  followUser = async (username) => {
    try {
      const { data } = await this.api.post(`/user/follow/${username}`)
      return data
    } catch (error) {
      throw error.response
    }
  }

  unfollowUser = async (username) => {
    try {
      const { data } = await this.api.post(`/user/unfollow/${username}`)
      return data
    } catch (error) {
      throw error.response
    }
  }

  createNewListOnDB = async (list) => {
    try {
      const { data } = await this.api.post(`/list`, list)
      return data
    } catch (error) {
      throw error.response
    }
  }

  createNewItemOnDB = async (listID,item) => {
    try {
      const { data } = await this.api.post(`/item/${listID}`, item)
      return data
    } catch (error) {
      throw error.response
    }
  }

  createNewCommentInItem = async (listID,itemID,comment) => {
    try {
      const { data } = await this.api.post(`/comment/${listID}/${itemID}`, comment)
      return data
    } catch (error) {
      throw error.response
    }
  }

  deleteComment = async (commentID) => {
    try {
      const { data } = await this.api.delete(`/comment/${commentID}`)
      return data
    } catch (error) {
      throw error.response
    }
  }


}

export default new Api()