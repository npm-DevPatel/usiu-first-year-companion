# Use the official Nginx image
FROM nginx:alpine

# Copy the HTML/CSS/JS into Nginx's default public folder
COPY public /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]
