This project was my first project in React, it has a lot of bad practices, and I don't have much time to fix them, but I will try to provide support for it in the coming years.

# Time manager

Effortlessly manage your daily tasks and goals with our time-management app. Stay on track with a timer for each task, daily goal-setting, and other handy features.
With our app, you can say goodbye to stress and hello to productivity. Take control of your day with ease, whether you're a busy professional or a student trying to balance schoolwork and hobbies. Start maximizing your time!

## Shortcuts

There are two types of keyboard shortcuts in this application: static and dynamic.

### Static keyboard shortcuts

Static keyboard shortcuts are those that do not change their function. In this application, the available static keyboard shortcuts are:

- r: to reset the timer.
- k: to start or stop the timer.

### Dynamic keyboard shortcuts

Dynamic keyboard shortcuts are those that can change their function depending on the assigned value. In this application, dynamic keyboard shortcuts are used to set a specific time on the timer.

To assign a time value to a dynamic keyboard shortcut, follow these steps:

1. Set a time value on the timer.
2. Press Control and the corresponding numeric key of the dynamic keyboard shortcut you want to assign. For example, if you want to assign a dynamic keyboard shortcut for the key 3, press Control + 3. This will assign a dynamic keyboard shortcut for the key 3.
3. Repeat steps 1 and 2 to assign dynamic keyboard shortcuts to other time values.

To access the dynamic keyboard shortcuts, simply press the corresponding numeric key of the time value you want to set. For example, if you have assigned a time value of 2 minutes and 30 seconds to the key 3, press 3 to set that time on the timer.

## Installation steps

1. Clone the repository

```bash
git clone https://github.com/Jes015/Time-Manager.git
```

2. CD into the working directory

```bash
cd Time-Manager
```

3. Install dependencies

```bash
npm install
```

4. Run the app

```bash
npm run dev
```

## Built with

- React
- Css modules
