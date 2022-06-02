FROM timbru31/java-node

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in package.json
RUN npm install

EXPOSE 4000
# This allows Heroku bind its PORT the Apps port 
# since Heroku needs to use its own PORT before the App can be made accessible to the World
EXPOSE $PORT

# Run app when the container launches
CMD ["npm", "start"]