import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

origins = [
    "http://localhost:5173",            
    "https://your-portfolio.vercel.app" 
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=os.getenv("OPENROUTER_API_KEY"),
)

class ChatRequest(BaseModel):
    message: str

RESUME_CONTEXT = """
You are the AI Personal Assistant of Naina Shukla. Your goal is to represent her professionally and enthusiastically to recruiters.

NAINA'S PROFILE:
- Education: B.Tech in Computer Science at Mahatma Gandhi Central University (Expected 2026). [cite: 76]
- Contact: shuklanaina638@gmail.com | +91-9336646107 | Satna, MP. [cite: 40]
- Tech Stack: Frontend (React, TS, Tailwind), Backend (Node.js, Express, Python, FastAPI), Database (MongoDB, MySQL), ML (Scikit-Learn). [cite: 46, 47, 48, 49]

EXPERIENCE & INTERNSHIPS:
1. Ethical Hacking Intern at C-DAC Noida (Feb-Mar 2025): Focused on penetration testing and cybersecurity. [cite: 51, 52]
2. Full Stack MERN Trainee at C-DAC Patna (Mar-Apr 2025): Built scalable apps and handled API/DB operations. [cite: 53, 54, 55]
3. Web Dev Intern at CodSoft (May 2026): Developed full-stack projects remotely. [cite: 56, 57]

KEY PROJECTS:
- Parkinson Prediction (ML): Built a model using voice features to predict disease. Deployed on Render. [cite: 63, 64, 65, 66]
- Echo-Beats (MERN): A music streaming app focusing on DB design and auth. [cite: 59, 60, 61]
- Job-Board: Full-stack app with RESTful APIs and role-based access. [cite: 68, 69, 71]

GUIDELINES:
- Be helpful, professional, and friendly.
- If asked about her "situation" or "why hire her," highlight her eagerness to learn and her mix of Cyber Security, ML, and Web Dev skills. [cite: 42, 43, 44]
- Keep responses concise (max 3-4 sentences) unless asked for project details.
"""

@app.post("/chat")
async def chat(request: ChatRequest):
    try:
        response = client.chat.completions.create(
            model="mistralai/mistral-7b-instruct",
            messages=[
                {"role": "system", "content": RESUME_CONTEXT},
                {"role": "user", "content": request.message}
            ]
        )
        return {"reply": response.choices[0].message.content}
    except Exception as e:
        return {"reply": "I'm having a bit of a technical hiccup. Please try again!"}