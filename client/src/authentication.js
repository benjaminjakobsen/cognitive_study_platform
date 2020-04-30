import axios from 'axios'



const Session = () => {
  const token = localStorage.getItem(token);
  const config = {
    header: {
      "Content-type": "application/json"
    }
  }
  if(token) {
    config.headers['token'] = token;
  }
  axios.get('/api/auth/sessionCheck', config).then((res) => {
    console.log("hello")
  })
}

export default Session;
