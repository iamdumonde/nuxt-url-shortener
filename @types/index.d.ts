export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: Date;
    created_at: Date;
    updated_at: Date;
    two_factor_secret?: string;
    two_factor_recovery_codes?: string;
    two_factor_confirmed_at?: Date;
  }


  export interface LoginPayload {
    email: string;
    password: string;
  }

  export interface RegisterPayload {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  }