import { AbstractControl } from '@angular/forms';

// control -> Todo validator recebe esse controlador
export function lowerCaseValidator(control: AbstractControl) {
  if (control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value))
    return { lowerCase: true }; // validator tem esse tipo de retorno p/ que seja possível acessá-los no template
  return null;
}
