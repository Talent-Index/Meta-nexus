// public/js/auth.js

const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const res = await fetch('/login', {   // changed
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const result = await res.json();

    if (result.success) {
      localStorage.setItem('user', JSON.stringify(result.user));
      window.location.href = 'dashboard.html';
    } else {
      alert(result.message);
    }
  });
}

if (signupForm) {
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    const res = await fetch('/signup', {   // changed
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullName, email, password })
    });

    const result = await res.json();

    if (result.success) {
      localStorage.setItem('user', JSON.stringify(result.user));
      window.location.href = 'dashboard.html';
    } else {
      alert(result.message);
    }
  });
}
