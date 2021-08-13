# To-Do-List React-Redux App

## Demo
https://pawlo1994.github.io/todo-list-redux

## Description

Simple to-do-list App in React-Redux.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Used Technologies
1. HTML
2. CSS
3. Styled Components
4. React.js
5. React-Redux
6. Create-react-app
7. React Router
8. Redux-saga

## How to use
1. Type your task content in field which is in "Dodaj nowe zadanie" section.
![type new task gif](images/typeNewTask.gif)
2. Then click on "Dodaj zadanie" button to add your task.
![add new task gif](images/addNewTask.gif)
3. If your task is done, you can click on green button which is next to your task text.
![done task gif](images/doneTask.gif)
4. If you want to delete your task, click on red button with trash.
![delete task gif](images/deleteTask.gif)
5. If you want to done all tasks, click on "ukończ wszystkie" button.
![done all tasks gif](images/doneAllTasks.gif)
6. If you want to hide done tasks, click on "ukryj ukończone". If you want to show them again, click on "pokaż ukończone".
![toggle done tasks gif](images/toggleDoneTasks.gif)
Now your to-do list saves automaticaly after every update.

## Additional Features
Now this app contains navigation at the top.
1. "Zadania" shows three sections:
    - "Dodaj nowe zadanie" where you can add new task
    - "Wyszukiwarka" where you can search specified task
    - "Lista zadań" which shows your to-do list
![zadania gif](images/zadania.gif)
2. "O autorze" shows informations about author of this app.
![o autorze gif](images/oAutorze.gif)

You can get example tasks from server. If you want to do this, just click on "Pobierz przykładowe zadania" button.
![get example tasks gif](images/getExampleTasks.gif)

You can search specified task in "Wyszukiwarka" section as I wrote higher.
![search task gif](images/searchTask.gif)

You can also read task details. Just click on its content to show them.
![show task info gif](images/showTaskInfo.gif)
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
