import axios from "axios";
import type { LoginPayload, RegisterPayload, User } from "~/@types";

// variable stockant le user connecté
const user = ref<User | null>(null);

export const useAuth = () => {
  /*
  Fonction qui récupère l'utilisateur dans la base de donnée
  */
  async function getUser(): Promise<User | null> {
    if (user.value) return user.value;
    try {
      const res = await axios.get("/user");
      const user = res.data as User;
      return user;
    } catch (e: unknown) {
      return null;
    }
  }

  /*
  
  */
  async function initUser() {
    user.value = await getUser();
  }

  //login
  async function login(payload: LoginPayload) {
    await axios.post("/login", payload);
    useRouter().push("/me");
  }

  //logout
  async function logout() {
    await axios.post("/logout");
    user.value = null;
    useRouter().replace("/login");
  }

  //register
  async function register(payload: RegisterPayload) {
    await axios.post("/register", payload);
    await axios.post("/login", {
      email: payload.email,
      password: payload.password,
    });
    useRouter().push("/me");
  }

  return {
    register,
    login,
    logout,
    initUser,
    user,
  };
};
