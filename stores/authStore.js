export const useAuthStore = defineStore("authStore", {
  state: () => ({
    authUser: [],
    isLoggedIn: false,
    loading: false,
    success: false,
    error: false,
    userAccounts: [
      {
        id: 1,
        username: "munns",
        firstName: "Munna",
        lastName: "Ahmed",
        email: "msdmunna77@gmail.com",
        phone: "+8801400091582",
        password: "munns",
        addr: {
          addr1: "Khoksa-7020",
          addr2: "Kushtia, Khulna",
          zip: "7020",
        },
        created_at: "",
        lastLogin_at: "",
      },
    ],
  }),
  actions: {
    async checkAuthentication() {
      const userData = await fetchUserDataFromLocalStorage();
      this.isLoggedIn = !!userData;
      this.authUser = userData;
    },
    addUserAccount(info) {
      const existUser = this.userAccounts.find((u) => info.username === u.username);
      if (!existUser) {
        this.userAccounts.push(info);
        localStorage.setItem("user", JSON.stringify(info));
        localStorage.setItem("isLoggedIn", true);
      }
    },
    loginAccount(info) {
      console.log(info.lastLogin_at);
      const user = this.userAccounts.find((u) => (u.email === info.email || u.username === info.email) && u.password === info.password);
      if (user) {
        this.authUser = user;
        this.authUser.lastLogin_at = info.lastLogin_at;
        this.isLoggedIn = true;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isLoggedIn", true);
        this.error = false;
        this.success = true;
      } else {
        this.success = false;
        this.error = true;
      }
      new Promise((resolve) => setTimeout(resolve, 300));
    },
    logout() {
      this.isLoggedIn = false;
      this.authUser = [];
      localStorage.removeItem("user");
      localStorage.removeItem("isLoggedIn");
      console.log("apple");
    },
  },
  getters: {},
});

async function fetchUserDataFromLocalStorage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const storedUserData = JSON.parse(localStorage.getItem("user"));
      resolve(storedUserData);
    }, 0);
  });
}
