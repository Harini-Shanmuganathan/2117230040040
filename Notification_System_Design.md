STAGE 1 - Notification System Design

-> Objective
The goal of this system is to fetch campus notifications from the given API and display the top 10 important unread notifications based on priority and timestamp.

-> Priority Order
The notifications are prioritised in the following order:
    1.Placement
    2.Result
    3.Event
Placement notifications are treated as highest priority because they are more important for students.

-> Working Process
Fetch notifications from the API using Axios.
Assign priority values for each notification type.
Sort notifications based on:
Higher priority
Latest timestamp
Select the top 10 notifications after sorting.
Display the notifications in the terminal.

-> Sorting Method
Each notification type is assigned a numeric value:
Placement = 3
Result = 2
Event = 1
Notifications with higher values are displayed first.
If two notifications have the same priority, the newer notification is displayed first using timestamp comparison.

-> Maintaining Top 10 Efficiently
As notifications continue to arrive, sorting the entire list repeatedly can reduce performance.
To avoid this, a priority queue or heap can be used to maintain only the top 10 notifications. Whenever a new notification arrives, it is compared with the lowest priority notification currently stored. If it has higher importance, it replaces the lowest notification.
This approach improves efficiency and scalability.

-> Technologies Used
1.JavaScript
2.Node.js
3.Axios

-> Output

The final output displays:
Notification Type
Message
Timestamp
for the top 10 priority notifications in the terminal.

# Campus Notification System - Stage 2 Design Document

## Project Overview

The Campus Notification System is a responsive React-based web application designed to display campus notifications in a clean and user-friendly dashboard.

The application allows students to:

- View all notifications
- Filter notifications by category
- View important updates
- Access notifications across desktop and mobile devices

---

## Technology Stack

### Frontend
- React.js
- CSS3
- JavaScript

### API Communication
- Fetch API / Axios

### Development Environment
- Node.js
- Vite

---

## System Architecture

Frontend Application
↓
Notification API
↓
Notification Data Processing
↓
UI Rendering

---

## Notification Categories

The system supports three notification types:

### Placement
Placement drives and recruitment announcements

### Result
Semester and examination result notifications

### Event
Workshops, symposiums and campus event updates

---

## Features Implemented

## 1. All Notifications View

Displays all available notifications in a card-based dashboard layout.

Each card contains:

- Notification Type
- Notification Message
- Timestamp

---

## 2. Filtering

Users can filter notifications using dropdown selection.

Supported filters:

- All
- Placement
- Result
- Event

---

## 3. Priority Sorting Logic

Notifications are sorted based on importance.

Priority Order:

1. Placement
2. Result
3. Event

If two notifications have same priority, latest timestamp is displayed first.

---

## 4. Responsive Design

Application supports:

### Desktop View
Optimized card grid layout

### Mobile View
Single column responsive layout

---

## 5. Professional UI

The application uses:

- Dashboard layout
- Modern notification cards
- Responsive spacing
- Interactive hover effects
- Clean typography

---

## API Endpoint Used

http://20.207.122.201/evaluation-service/notifications

Supported Query Parameters:

- limit
- page
- notification_type

---

## Error Handling

Implemented handling for:

- Authorization failures
- Empty notification responses
- Network/API request failures

---

## Folder Structure

ROLL_NUMBER/

logging_middleware/

notification_app_be/

notification_app_fe/

src/

App.jsx

App.css

Notification_System_Design.md

.gitignore

---

## Conclusion

The Stage 2 implementation successfully delivers a responsive frontend for the Campus Notification System with professional UI design, notification filtering, sorting logic and mobile compatibility.