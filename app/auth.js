// Autenticación simple basada en sessionStorage

const VALID_USER = { email: 'test@example.com', password: '1234', name: 'Usuario QA' };

const Auth = {
  login(email, password) {
    if (email === VALID_USER.email && password === VALID_USER.password) {
      sessionStorage.setItem('user', JSON.stringify({ email, name: VALID_USER.name }));
      return true;
    }
    return false;
  },
  logout() {
    sessionStorage.removeItem('user');
  },
  current() {
    return JSON.parse(sessionStorage.getItem('user') || 'null');
  },
  requireAuth() {
    if (!this.current()) {
      window.location.href = 'login.html';
      return false;
    }
    return true;
  },
};

// Manejo del formulario de login
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    // Si ya está logueado, redirigir
    if (Auth.current()) {
      window.location.href = 'index.html';
      return;
    }

    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;
      const errorEl = document.getElementById('login-error');

      if (Auth.login(email, password)) {
        window.location.href = 'index.html';
      } else {
        errorEl.hidden = false;
      }
    });
  }

  // Botón de logout (en home y cart)
  const logoutBtn = document.getElementById('logout');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      Auth.logout();
      window.location.href = 'login.html';
    });
  }

  // Mostrar nombre de usuario en home
  const userNameEl = document.getElementById('user-name');
  if (userNameEl) {
    const user = Auth.current();
    if (user) userNameEl.textContent = `Hola, ${user.name}`;
  }
});
