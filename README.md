# Build by @VijayPrakash 
# Web Developer

# 🤖 AI ChatBot

An intelligent, real-time AI chatbot application with a modern UI and powerful OpenAI integration. Built with React for the frontend and Node.js/Express for the backend.

## 📋 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)

## ✨ Features

### Core Functionality
- **Real-time Chat Interface** - Seamless messaging experience with instant responses
- **OpenAI Integration** - Powered by GPT-4o-mini for intelligent conversations
- **Beautiful UI Design** - Modern, clean interface with rounded corners and shadows
- **Markdown Support** - Formatted responses with:
  - Headings (`### Title`)
  - Bold text (`**bold**`)
  - Horizontal lines (`---`)

### Smart Features
- **Pre-defined Action Buttons** - 10 quick-action suggestions including:
  - Create a plan for beginners
  - Help me get started
  - Explain this in simple terms
  - Give me step-by-step guidance
  - Summarize my content
  - Generate ideas for my project
  - Fix my code issue
  - Improve my writing
  - Translate my text
  - Answer my question quickly

- **Show More/Show Less** - By default shows 5 buttons, expand to see all 10 suggestions
- **Loading Indicator** - Visual "Typing..." feedback with AI bot avatar
- **Message Avatars** - Distinct visual identity for user (👤) and AI (🤖) messages
- **Enter Key Support** - Send messages with Enter key or click send button

## 🛠 Tech Stack

### Frontend
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 3** - Styling framework
- **Vite** - Fast build tool
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express 5** - Web framework
- **Axios** - API requests to OpenAI
- **CORS** - Cross-origin resource sharing

### External APIs
- **OpenAI API** - GPT-4o-mini model for AI responses

## 📁 Project Structure

```
ai-chatbot/
├── client/                          # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   └── ChatBot.tsx         # Main chat component
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.ts
│
├── server/                          # Node.js backend
│   ├── server.js                   # Express server & OpenAI integration
│   └── package.json
│
└── README.md
```

## 🚀 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- OpenAI API key

### Setup Instructions

1. **Clone the repository**
```bash
git clone <repository-url>
cd ai-chatbot
```

2. **Backend Setup**
```bash
cd server
npm install
```

3. **Frontend Setup**
```bash
cd ../client
npm install
```

## 📝 Configuration

### OpenAI API Key
Update the API key in `server/server.js`:
```javascript
const apiKey = "your-openai-api-key-here";
```

## ▶️ Running the Application

### Start Backend Server
```bash
cd server
npm start
# Server runs on http://localhost:5000
```

### Start Frontend (new terminal)
```bash
cd client
npm run dev
# Frontend runs on http://localhost:5173
```

## 🎯 How It Works

1. User types a message or clicks an action button
2. Message is sent to the backend via HTTP POST request
3. Backend forwards it to OpenAI API with system prompt
4. OpenAI returns an AI-generated response
5. Response is parsed for markdown formatting (headings, bold, lines)
6. Response displays in chat with proper styling

## 📊 API Endpoints

### POST `/chat`
Sends user message to OpenAI and returns AI response

**Request:**
```json
{
  "message": "Your question here"
}
```

**Response:**
```json
{
  "reply": "AI generated response"
}
```

## 🎨 UI Components

### Chat Interface
- **Header** - Bot title with avatar icon
- **Message Area** - Scrollable conversation history
- **Action Buttons** - Quick suggestions with Show More toggle
- **Input Field** - Rounded text input with Enter key support
- **Send Button** - Arrow icon button to submit messages

### Visual Design
- Clean white background with subtle shadows
- Blue accent color for AI bot branding
- Dark messages for user, light for assistant
- Responsive layout with max-width constraint
- Custom scrollbar styling

## 🔄 Future Enhancements
- Message history persistence
- User authentication
- Conversation export/download
- Multiple chat rooms
- Custom AI system prompts
- Message editing and deletion
- Typing indicators with animations
- Dark mode support
- Multi-language support

## 📄 License
This project is open source.
