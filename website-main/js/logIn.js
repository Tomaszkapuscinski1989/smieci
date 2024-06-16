const log = document.getElementById('logowanie');
const pas = document.getElementById('pas');
const form = document.getElementById('form');
const czek = document.getElementById('login-check');
const cat = localStorage.getItem('login');
const cat2 = localStorage.getItem('haslo');

log.value = cat;
pas.value = cat2;

users = [
  { log: 'log', pas: 'pas' },
  { log: 'l', pas: 'has' },
];
form.addEventListener('submit', (event) => {
  for (const i of users) {
    console.log(log);
    console.log(log.value);
    console.log(pas.value);
    if (log.value == i.log && pas.value == i.pas) {
      if (czek.checked === true) {
        localStorage.setItem('login', i.log);
        localStorage.setItem('haslo', i.pas);
      } else {
        localStorage.clear();
      }
      localStorage.setItem('log', true);
      location.replace('./blog.html');
    }
  }
  log.value = '';
  pas.value = '';

  const mainTag = document.getElementById('log');
  if (mainTag.childElementCount === 1) {
    let msg = document.createElement('h3');
    console.log(mainTag);
    mainTag.prepend(msg);

    msg.innerText = 'Błedne dane logowania';
    msg.classList.add('error');
    msg.classList.add('card');
  }

  event.preventDefault();
});
