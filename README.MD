Intallation guide:
Install node:
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
Install dependencies:
npm i -s express better-sqlite3 express-handlebars body-parser sqlite3
Init db:
node models/init_db.js
Intall pm2:
sudo npm install -g pm2
Add project to pm2:
pm2 start /home/ubuntu/Projects/reactcourse/server.js
pm2 startup systemd
sudo env PATH=$PATH:/usr/bin /usr/local/bin/pm2 startup systemd -u server --hp /home/ubuntu/Projects/reactcourse
pm2 start server

Api documentation:
GET /api/posts get list of posts
GET /api/posts/1 get post by id
PUT /api/posts/1 json theme, description body to change existing post
POST /api/addPost json theme, descroption body to add new post
DELETE /api/posts/1 remove post by id

