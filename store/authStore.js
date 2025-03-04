import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  token: null,

  login: (user, token) => {
    console.log("Login Called:", user, token);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    set({ user, token });
  },

  logout: () => {
    console.log("Logout Called");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    set({ user: null, token: null });
  },

  loadUser: () => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    console.log("Loading User:", token, user);
    if (token && user) {
      set({ user: JSON.parse(user), token });
    }
  },
}));

export default useAuthStore;
