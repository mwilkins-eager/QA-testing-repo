// Lógica de la página de cuenta: editar nombre y cambiar contraseña

// Contraseña actual valida (la del usuario por defecto). Se actualiza en localStorage al cambiarla.
const PASSWORD_KEY = 'account_password';
if (!localStorage.getItem(PASSWORD_KEY)) {
  localStorage.setItem(PASSWORD_KEY, VALID_USER.password);
}

// Extender Auth para validar y cambiar contraseña
Auth.verifyPassword = function (password) {
  const current = localStorage.getItem(PASSWORD_KEY);
  return password === current;
};
Auth.changePassword = function (newPassword) {
  localStorage.setItem(PASSWORD_KEY, newPassword);
  return true;
};

if (!Auth.requireAuth()) {
  // requireAuth redirige a login si no hay sesión
} else {
  document.addEventListener('DOMContentLoaded', () => {
    const user = Auth.current();

    // Pre-llenar datos de la cuenta
    document.getElementById('name').value = user.name;
    document.getElementById('email').value = user.email;

    // Guardar cambios del nombre
    const accountForm = document.getElementById('account-form');
    const accountSuccess = document.getElementById('account-success');

    accountForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      Auth.updateProfile({ name });

      // Actualizar nombre mostrado en otras páginas (si vuelve al home)
      accountSuccess.hidden = false;
      setTimeout(() => { accountSuccess.hidden = true; }, 3000);
    });

    // Cambiar contraseña
    const passwordForm = document.getElementById('password-form');
    const passwordError = document.getElementById('password-error');
    const passwordSuccess = document.getElementById('password-success');

    passwordForm.addEventListener('submit', (e) => {
      e.preventDefault();
      passwordError.hidden = true;
      passwordSuccess.hidden = true;

      const current = document.getElementById('current-password').value;
      const next = document.getElementById('new-password').value;
      const confirm = document.getElementById('confirm-password').value;

      if (!Auth.verifyPassword(current)) {
        passwordError.textContent = 'La contraseña actual es incorrecta.';
        passwordError.hidden = false;
        return;
      }

      if (next.length < 4) {
        passwordError.textContent = 'La nueva contraseña debe tener al menos 4 caracteres.';
        passwordError.hidden = false;
        return;
      }

      if (next !== confirm) {
        passwordError.textContent = 'Las contraseñas no coinciden.';
        passwordError.hidden = false;
        return;
      }

      Auth.changePassword(next);
      passwordSuccess.hidden = false;
      passwordForm.reset();
      setTimeout(() => { passwordSuccess.hidden = true; }, 3000);
    });
  });
}
