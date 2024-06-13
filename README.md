# Feedback Management System

## Tech-Stack

- React + TypeScript (vite)
  
- ExpressJS + TypeScript
  
- TailwindCSS
  

## Frontend

### Features

- Single page containing form to submit feedback and list of all feedbacks
  
- API call using web worker
  

### Directory Structure

- Saved in client/feedbackManagement
  
- src contains App.tsx and worker.ts
  
- src/components contain components like AllFeedbacks.tsx, FeedbackCard.tsx, Form.tsx and Popup.tsx
  

## Backend

### Features

- Array to store feedback entries.
  
- RESTAPI with ability to retrieve all feedbacks and add feedback
  
- Rate limit based on ip address such that a user can only submit 1 feedback in 10s.
  

### Directory Structure

- index.ts is the main file
  
- dist/ folder contains the compiled js file
  

## How to run

- To run server, go to server/ folder and run 'npm run serve'
  
- To run client, go to client/feedbackManagement/ folder and run 'npm run dev'
