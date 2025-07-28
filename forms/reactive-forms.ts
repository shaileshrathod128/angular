import { FormGroup, FormControl, Validators } from "@angular/forms";

export const profileForm = new FormGroup({
  firstName: new FormControl("", Validators.required),
  age: new FormControl("", [Validators.required, Validators.min(0)]),
});
