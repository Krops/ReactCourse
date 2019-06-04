server {
  listen 8080 default_server;
  listen [::]:8080 default_server;
  root /home/ubuntu/Projects/reactcourse;
  index templates/base.html;
  server_name kropiva.org.ua www.kropiva.org.ua;
  location / {
    try_files $uri $uri/ =404;
  }
}