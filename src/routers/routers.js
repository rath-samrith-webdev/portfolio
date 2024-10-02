const routes = [
  {
    name: "Home",
    label: "Home",
    path: "/",
    icon: "pi pi-home",
    component: () => import("../views/homes/Homepage.vue"),
  },
  {
    name: "About me",
    label: "About me",
    path: "/about",
    icon: "pi pi-user",
    component: () => import("../views/about/AboutPage.vue"),
  },
  {
    name: "Projects",
    label: "Projects",
    path: "/projects",
    icon: "pi pi-receipt",
    component: () => import("../views/projects/ProjectPage.vue"),
  },
  {
    name: "ProjectDetails",
    path: "/projects/:id",
    props: true,
    component: () => import("../views/projects/ProjectDetails.vue"),
  },
];
export default routes;
