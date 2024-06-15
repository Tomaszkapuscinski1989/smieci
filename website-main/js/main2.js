if (!(localStorage.getItem('log') === 'true')) {
  location.replace('./logIn.html');
}
if (localStorage.getItem('log') === 'true') {
  const a = document.getElementById('loginBtn');

  a.innerText = 'Log out';
  a.setAttribute('href', 'logOut.html');
}
