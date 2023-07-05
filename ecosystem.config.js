module.exports = {
  apps: [
    {
      name: 'favoland',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3000', //Running on port 3000
      //Cwd: './apps/nextapp',
      instances: 1,
      watch: false,
    },
  ],
};