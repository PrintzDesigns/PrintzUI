import store from './store';


const isAuthenticated = () => {
  if(store.user) {
    const token = store.user.token;
    return token && token.length > 10;
  }
}

const signOut = () => {
  store.user.token = null;
  console.log(store.user.token);
}

module.exports = {
  isAuthenticated,
  signOut,
};
