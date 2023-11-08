export default ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_44JjtV6UcOduEkZrgFQLOAmWwZ1R/EeXqMCYfN5",
      apiToken: "prj_44JjtV6UcOduEkZrgFQLOAmWwZ1R",
      appFilter: "strapi-reunion-v3",
      teamFilter: "team_bx2N7cK2xLvsfiAtzvmyAw9W",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
