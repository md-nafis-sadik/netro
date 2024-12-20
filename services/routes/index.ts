import { IRootPaths } from "../types";

export const rootPaths: IRootPaths = {
  home: {
    name: "Home",
    path: "/",
  },
  login: {
    name: "Login",
    path: "/login",
  },
};

export const adminPaths: IRootPaths = {
  admin: {
    name: "Admin",
    path: "/admin",
  },
  users: {
    name: "Users",
    path: "/admin/users",
  },
  posts: {
    name: "Posts",
    path: "/admin/posts",
  },
};
