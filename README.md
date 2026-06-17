NBAKC Church Registration System
  A web-based internal church portal built for New Beginning Apostolic Church (NBAKC) to manage event registrations and administrative tasks using Google Workspace authentication and Google Sheets.

Features
  Google Workspace authentication (OAuth 2.0)
  Internal-only login for church staff
  Event registration system
  Google Sheets integration (used a lightweight database)
  Personalized admin dashboard (user greeting)
  Protected admin routes
  Persistent session using local storage
  Responsive UI for mobile and desktop
  Deployed on GitHub Pages

Tech Stack
  React (Vite)
  React Router
  Google OAuth (@react-oauth/google)
  JWT Decode
  Google Sheets API
  GitHub Pages (deployment)
  HTML/CSS/JavaScript

Authentication
This project uses Google OAuh (Google Identity Services) 
  Only users in the nbakc.org Google Workspace domain are allowed access
  User identity is verified using decoded JWT credentials
  Unauthorized users are blocked from admin routes

Data Storage
Instead of using a traditional backend database, this project uses:
  Google Sheets as a lightweight database
  Form submissions are written directly to a shared spreadsheet

License 
This project is for internal church use. 

Author 
Stacey Tadrus 
