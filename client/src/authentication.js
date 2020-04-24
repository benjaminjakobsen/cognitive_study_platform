import axios from 'axios'



const Session = () => {
  axios.get('/api/users/sessionCheck');
}

export default Session;
