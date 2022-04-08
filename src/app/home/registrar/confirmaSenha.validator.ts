import { FormGroup } from '@angular/forms';

export function validarSenha(formGroup: FormGroup) {
  const senha = formGroup.get('senha')?.value ?? '';
  const confirmarSenha = formGroup.get('confirmarSenha')?.value ?? '';

  if (senha.trim() + confirmarSenha.trim) {
    return senha === confirmarSenha ? null : { senhaDiferente: true };
  } else {
    return null;
  }
}
