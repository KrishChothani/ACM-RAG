# 🏥 HealthAI Assistant - AI-Powered Healthcare Analysis Platform

<div align="center">

![HealthAI Assistant Logo](https://img.shields.io/badge/HealthAI-Healthcare%20Assistant-blue?style=for-the-badge&logo=robot)

[![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=flat-square&logo=node.js)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18+-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![Python](https://img.shields.io/badge/Python-3.9+-yellow?style=flat-square&logo=python)](https://python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-Latest-teal?style=flat-square&logo=fastapi)](https://fastapi.tiangolo.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Latest-green?style=flat-square&logo=mongodb)](https://mongodb.com/)
[![AWS](https://img.shields.io/badge/AWS-S3%20%7C%20Lambda-orange?style=flat-square&logo=amazon-aws)](https://aws.amazon.com/)

*Your intelligent companion for medical document analysis, health insights, and data-driven healthcare decision making*

</div>

## 🌟 Overview

HealthAI Assistant is a sophisticated AI-powered healthcare analysis platform that combines the power of Large Language Models (LLMs) with advanced document processing capabilities. Built with a modern microservices architecture, it provides intelligent medical insights, document analysis, and conversational AI features tailored for healthcare professionals, patients, and medical enthusiasts.

### ✨ Key Features

- 🧠 **Multi-Modal AI Chat** - Text and image support with Google Gemini integration
- 📄 **Advanced Document Analysis** - PDF, Excel, and medical report processing
- 📊 **Analytical Insights** - Health metrics calculations and trend analysis
- 🔍 **Multi-Document Search** - Cross-document comparison and analysis
- 💬 **Conversational Interface** - Natural language medical Q&A
- ☁️ **Large File Support** - S3 presigned URLs for files >10MB
- 🎨 **Modern UI/UX** - Google AI Studio inspired interface
- 🔐 **Secure Authentication** - JWT-based user management
- 📱 **Responsive Design** - Works seamlessly across all devices

## Multimodal RAG Pipeline
We implemented a multimodal RAG pipeline to handle both text and images in healthcare documents.  
Text is chunked and embedded directly, while images and charts bypass OCR and are first interpreted using Gemini Vision to generate semantic descriptions.  
These descriptions are then chunked, embedded, and stored in Pinecone for accurate retrieval and context-aware response generation.

## 🏗️ Architecture

```mermaid
graph TB
    A[React Frontend] --> B[Node.js Backend]
    B --> C[Python AI Service]
    B --> D[MongoDB Database]
    B --> E[AWS S3 Storage]
    C --> F[Pinecone Vector DB]
    C --> G[Google Gemini API]
    C --> H[LangChain Framework]
```

### 🔧 Tech Stack

#### Frontend
- **React 19** - Modern UI framework
- **Tailwind CSS 4** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons
- **Axios** - HTTP client
- **Vite** - Fast build tool

#### Backend (Node.js)
- **Express.js** - Web framework
- **MongoDB** - Document database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Multer + AWS S3** - File uploads
- **Serverless Framework** - Deployment

#### AI Service (Python)
- **FastAPI** - High-performance API framework
- **LangChain** - LLM orchestration
- **Google Gemini** - Advanced AI model
- **Pinecone** - Vector database
- **PyPDF** - Document processing
- **Sentence Transformers** - Text embeddings

#### Cloud & Infrastructure
- **AWS S3** - File storage
- **AWS Lambda** - Serverless functions
- **MongoDB Atlas** - Cloud database
- **Pinecone** - Vector search
- **Vercel** - Frontend deployment


#### Project Structure

```text
Python-Backend/
│
├── app/
│   ├── api/
│   │   └── endpoints.py
│   │
│   ├── core/
│   │   └── config.py
│   │
│   ├── schemas/
│   │   └── models.py
│   │
│   └── services/
│       ├── document_processor.py
│       ├── llm_service.py
│       ├── multi_modal_processor.py
│       ├── pinecone_service.py
│       ├── s3_service.py
│       ├── main.py
│       └── prompts.py
│
├── src/
│   └── Function/
│       └── index.js
│
├── .gitignore
├── handler.py
├── package-lock.json
├── package.json
├── requirements.txt
├── serverless.yml
└── README.md



Node-Backend/
│
├── .esbuild/
│   └── .build/
│
├── src/
│   ├── Controllers/
│   ├── Middlewares/
│   ├── Models/
│   ├── Routes/
│   ├── Utils/
│   └── db/
│
├── Constants.js
├── app.js
├── index.js
├── lambda.js
├── .gitignore
├── package-lock.json
├── package.json
└── serverless.yml


Frontend/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── Config/
│   ├── JSX/
│   ├── assets/
│   ├── services/
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .env
├── .gitignore
├── README.md
├── eslint.config.js
├── package-lock.json
└── package.json
```


## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Python 3.11.9 and pip
- MongoDB instance
- AWS account (for S3)
- Google AI API key
- Pinecone account

### 1. Clone the Repository

```bash
git clone https://github.com/KrishChothani/HealthAI-Assistant.git
cd HealthAI-Assistant
```

### 2. Environment Setup

Create `.env` files in each service directory:

#### Frontend (.env)
```env
VITE_API_URL=http://localhost:2590/api/v1
```

#### Node Backend (.env)
```env
PORT=2590
MONGODB_URI=mongodb://localhost:27017/healthai
CORS_ORIGIN=http://localhost:5173

# JWT Secrets
ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRY=10d

# AWS Configuration
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=us-east-1
AWS_S3_BUCKET_NAME=your-s3-bucket

# Python Service
PYTHON_SERVICE_URL=http://127.0.0.1:8000/api/v1

# Email (Optional)
EMAIL_ID_FOR_VERIFICATION=your_email@gmail.com
EMAIL_PASSWORD_FOR_VERIFICATION=your_app_password
```

#### Python Backend (.env)
```env
# Google AI
GOOGLE_API_KEY=your_google_ai_api_key

# Pinecone
PINECONE_API_KEY=your_pinecone_api_key
PINECONE_ENVIRONMENT=your_pinecone_environment

# AWS (for document access)
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=us-east-1

# Database
MONGODB_URI=mongodb://localhost:27017/healthai
```

### 3. Installation & Setup

#### Install Frontend Dependencies
```bash
cd Frontend
npm install
```

#### Install Node Backend Dependencies
```bash
cd ../Node-Backend
npm install
```

#### Install Python Backend Dependencies
```bash
cd ../Python-Backend
pip install -r requirements.txt
```

### 4. Database Setup

1. Install MongoDB locally or use MongoDB Atlas
2. Create a database named `healthai`
3. The application will automatically create required collections

### 5. Start the Services

#### Terminal 1: Python AI Service
```bash
cd Python-Backend
uvicorn app.main:app --reload --port 8000
```

#### Terminal 2: Node.js Backend
```bash
cd Node-Backend
npm run dev
```

#### Terminal 3: React Frontend
```bash
cd Frontend
npm run dev
```

### 6. Access the Application

Open your browser and navigate to `http://localhost:5173`

## 📖 Usage Guide

### 🎯 Feature Modes

HealthAI Assistant offers 5 distinct modes for different use cases:

#### 1. 🤖 Smart Chat
- **Purpose**: Intelligent conversations with text and image support
- **Use Cases**: General health questions, medical image analysis, multi-modal queries
- **Example**: "Analyze this X-ray and explain the potential findings"

#### 2. 📄 Document Analysis
- **Purpose**: Deep analysis of medical documents and health reports
- **Use Cases**: Medical report analysis, lab result review, health record summarization
- **Example**: "Summarize the key findings from this medical report"

#### 3. 📈 Analytical Insights
- **Purpose**: Advanced health data analysis and trend tracking
- **Use Cases**: Health metrics analysis, vital signs tracking, trend analysis
- **Example**: "Analyze the blood pressure trends over the last 3 months"

#### 4. 💬 General Conversation
- **Purpose**: Casual health discussions and educational Q&A
- **Use Cases**: Learning medical concepts, basic health questions, definitions
- **Example**: "What's the difference between Type 1 and Type 2 diabetes?"

#### 5. 🔍 Multi-Document Search
- **Purpose**: Search and compare across multiple uploaded health documents
- **Use Cases**: Cross-document medical record analysis, comparative studies, health research
- **Example**: "Compare lab results across all uploaded test reports"

### 📁 File Upload Features

#### Supported File Types
- **PDF**: Medical reports, lab results, health records
- **Excel/CSV**: Health data, medical datasets, vital sign logs
- **Images**: X-rays, scans, medical charts, health diagrams

#### Upload Methods
1. **Drag & Drop**: Simply drag files into the chat interface
2. **Click to Browse**: Use the paperclip icon to select files
3. **Large File Support**: Files >10MB automatically use S3 direct upload

#### File Processing
- Automatic text extraction and indexing
- Vector embeddings for semantic search
- Real-time processing status updates
- Secure cloud storage with public access URLs

### 💬 Chat Interface

#### Welcome Screen
- Feature mode selection with visual cards
- Example prompts for quick start
- Quick action buttons for common tasks
- Professional Google AI Studio inspired design

#### Chat Features
- **Real-time messaging** with typing indicators
- **File attachment** with preview and removal
- **Message history** with conversation persistence
- **Export/Share** functionality for conversations
- **Responsive design** for mobile and desktop

## 🔧 API Documentation

### Authentication Endpoints

```http
POST /api/v1/users/register
POST /api/v1/users/login
POST /api/v1/users/logout
GET  /api/v1/users/current-user
POST /api/v1/users/refresh-token
```

### Conversation Management

```http
GET    /api/v1/conversations
POST   /api/v1/conversations
GET    /api/v1/conversations/:id
DELETE /api/v1/conversations/:id
PATCH  /api/v1/conversations/:id/feature
PATCH  /api/v1/conversations/:id/title
```

### Messaging

```http
POST /api/v1/conversations/:id/messages
```

### Document Upload

```http
POST /api/v1/documents/upload          # Regular upload (<10MB)
POST /api/v1/documents/upload-s3       # S3 direct upload (>10MB)
POST /api/v1/s3/generate-presigned-url # Generate S3 upload URL
```

### AI Processing (Python Service)

```http
POST /api/v1/query              # Process chat queries
POST /api/v1/process-document   # Process uploaded documents
POST /api/v1/delete-documents   # Cleanup documents
```

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)

1. Build the frontend:
```bash
cd Frontend
npm run build
```

2. Deploy to Vercel:
```bash
vercel --prod
```

### Backend Deployment (AWS Lambda)

1. Configure AWS credentials
2. Deploy Node.js backend:
```bash
cd Node-Backend
serverless deploy
```

3. Deploy Python backend:
```bash
cd Python-Backend
serverless deploy
```

### Environment Variables for Production

Update your production environment variables with:
- Production database URLs
- Production API endpoints
- Production AWS credentials
- Production API keys

## 🔒 Security Features

- **JWT Authentication** with access and refresh tokens
- **CORS Protection** with configurable origins
- **Input Validation** using express-validator
- **File Upload Security** with type and size restrictions
- **Environment Variable Protection** for sensitive data
- **AWS IAM Roles** for secure cloud resource access

## 🧪 Testing

### Run Frontend Tests
```bash
cd Frontend
npm run dev
```

### Run Backend Tests
```bash
cd Node-Backend
npm run dev
```

### Run Python Tests
```bash
cd Python-Backend
uvicorn app.main:app --reload
```

## 📊 Monitoring & Analytics

- **Error Tracking**: Comprehensive error handling and logging
- **Performance Monitoring**: Response time tracking
- **Usage Analytics**: User interaction metrics
- **Document Processing Stats**: Upload and processing statistics

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow ESLint configuration for JavaScript/React
- Use Black formatter for Python code
- Write comprehensive tests for new features
- Update documentation for API changes
- Follow conventional commit messages

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

**Team CKsDev**
- Full-stack development
- AI/ML integration
- Cloud architecture
- UI/UX design

By 
- 23BCE151 - KRISH CHOTHANI
- 23BEI048 - PARAM SHANKAR
<img width="1856" height="1042" alt="image" src="https://github.com/user-attachments/assets/3bffb756-d0f9-4b12-a176-cb0af5c50cb8" />
<img width="772" height="710" alt="image" src="https://github.com/user-attachments/assets/4301f539-1060-4097-b855-b0ce303520a3" />
<img width="1913" height="978" alt="image" src="https://github.com/user-attachments/assets/3d4e2001-2648-4640-b867-72a08c911092" />
<img width="1369" height="923" alt="image" src="https://github.com/user-attachments/assets/866ed49d-2ce9-4e5a-80a0-ca0b4abe7ca0" />





