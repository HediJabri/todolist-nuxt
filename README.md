# TodoList | Nuxt.js

By [Hedi Jabri](https://github.com/HediJabri)

## Demo
<p align="center">
  <img src="https://res.cloudinary.com/dravwgiq1/image/upload/v1550767328/vds0toi4zkxowbq9mfkz.gif" width="700px">
  <br>
</p>

## Instructions

1. Clone locally using `git clone git@github.com:HediJabri/todolist-nuxt.git`
2. Install dependencies using `npm install`
3. Start your server using `npm run dev`
4. Navigate to app in [browser](http://localhost:3000)


## Technologies

This app is made with Vue.js & Nuxt.js, built with the create-nuxt-app cli (Vuetify, Axios, Vuex modules)
I also used [JSONPlaceholder](https://jsonplaceholder.typicode.com/) as a fake REST API.

## Features

This project is a simple Todo List App with basic CRUD actions. Here is the full features list:

Required
- Create a new Todo (press enter on input or click on the + icon)
- Mark a todo as done a (click on the check icon)
- Edit a todo (Double-click on the todo text => press enter to validate / esc to cancel)
- Delete a todo (click on the cross icon)

Bonus
- Circular loaders for each todo item (to cover server response time)
- Filtering todos by status (done / todo)
