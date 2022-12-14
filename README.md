# WorkDayScheduler
Createing a simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.


# Deployed URL
https://kabirfaisal1.github.io/WorkDayScheduler/
### Open Deployed URL from terminal
 open -a 'google chrome' https://kabirfaisal1.github.io/WorkDayScheduler/


# Application criteria

# Folder structure 
1. root will have 'index.html' file which will be the main application
2. cssStyle will have 'style.css' file which will controll style and layout web pages
3. jsScript will have 'script.js' file which will controll user interaction and validate the workflow of the application

# How to Open the app-

 ### local

 Open terminal

 #### clone
 ```
 git clone https://github.com/kabirfaisal1/JavaScriptQuiz.git
 ```
 #### Open index.html
 ```
 open -a 'google chrome' <filepath>/JavaScriptQuiz/index.html
 ```
# User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

# Acceptance Criteria
```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

# Test Case
```
1. verify you see the current date
2. input vaule dont save and refresh the page
3. input vaule and save then refresh the page 
4. verify each time block is color-coded to indicate whether it is in the past, present, or future
```

## App Screenshots

## App Screenshots

![Image at start.](./assests/images/screenshots/AttheStart.png)

![Image at timeBox.](./assests/images/screenshots/timeBox.png)

