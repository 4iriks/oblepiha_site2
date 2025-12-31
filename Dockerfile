FROM nginx:alpine

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built site
COPY dist /usr/share/nginx/html

# Copy images folder (for JS that uses ./images/ paths)
COPY images /usr/share/nginx/html/images

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
