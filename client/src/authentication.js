import axios from 'axios'


function Session(res) {
  /*
    let getToken = new Promise(function(resolve, reject) {
        setTimeout(() => resolve(localStorage.getItem('token')), 200)

        await getToken.then((toke) => {
            token = toke;
        })
    }); */
    let token = localStorage.getItem('token');
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    }
    if(token) {
      config.headers['token'] = token;
    }
    return axios.get('/api/auth/sessionCheck', config).then((res) => {
      return true;
    })
    .catch((err) => {
      return false;
    })
}

export default Session;
