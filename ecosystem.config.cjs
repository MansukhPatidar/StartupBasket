module.exports = {
  apps: [
    {
      name: "idea-generator",
      script: "./scripts/generate-idea.sh",
      cwd: "/Users/mpatidar/GitHub/StartupBasket",
      cron_restart: "0 */3 * * *",
      autorestart: false,
      watch: false,
      max_memory_restart: "512M",
      env: {
        PATH: "/Users/mpatidar/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin",
      },
    },
  ],
};
