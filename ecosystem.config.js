module.exports = {
  apps: [{
    name: 'wedding',
    script: 'server.js',
    instances: 1,
    autorestart: true,
    watch: false,
    env: {
      PORT: 3000,
      TELEGRAM_BOT_TOKEN: '8592554071:AAHr9eA_RBeqKuctNudbvYn3_VUpGK7m7BY',
      TELEGRAM_CHAT_ID: '654643546'
    }
  }]
};


