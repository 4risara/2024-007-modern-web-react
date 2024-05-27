export interface RegisterData {
  username: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
  firstname: FormDataEntryValue | null;
  lastname: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
}

export interface LoginData {
  username: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}