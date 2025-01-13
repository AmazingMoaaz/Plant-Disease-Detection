# 🌿 Plant Disease Detection (PDD) System

<div align="center">
  <img src="frontend/src/logo.PNG" alt="PDD Logo" width="200"/>
  
  <h2>AI-Powered Plant Disease Detection System</h2>

  [![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)](https://www.tensorflow.org/)
  [![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
  [![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)](https://material-ui.com/)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

  <p align="center">
    <a href="#-key-features">Key Features</a> •
    <a href="#-system-architecture">Architecture</a> •
    <a href="#-quick-start">Quick Start</a> •
    <a href="#-supported-plants">Plants</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-api-reference">API</a>
  </p>
</div>

## 🌟 Key Features

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="https://img.icons8.com/fluency/48/000000/artificial-intelligence.png"/><br/>
        <b>AI-Powered Analysis</b><br/>
        <sub>Advanced ML models</sub>
      </td>
      <td align="center">
        <img src="https://img.icons8.com/fluency/48/000000/camera.png"/><br/>
        <b>Real-time Detection</b><br/>
        <sub>Instant results</sub>
      </td>
      <td align="center">
        <img src="https://img.icons8.com/fluency/48/000000/multiple-devices.png"/><br/>
        <b>Cross-platform</b><br/>
        <sub>Works everywhere</sub>
      </td>
      <td align="center">
        <img src="https://img.icons8.com/fluency/48/000000/cloud-sync.png"/><br/>
        <b>Fast Processing</b><br/>
        <sub>Optimized backend</sub>
      </td>
    </tr>
    <tr>
      <td align="center">
        <img src="https://img.icons8.com/fluency/48/000000/upload-to-cloud.png"/><br/>
        <b>Easy Upload</b><br/>
        <sub>Drag & drop support</sub>
      </td>
      <td align="center">
        <img src="https://img.icons8.com/fluency/48/000000/plant-under-sun.png"/><br/>
        <b>Multi-plant Support</b><br/>
        <sub>4 plant types</sub>
      </td>
      <td align="center">
        <img src="https://img.icons8.com/fluency/48/000000/database.png"/><br/>
        <b>Efficient Storage</b><br/>
        <sub>Optimized data handling</sub>
      </td>
      <td align="center">
        <img src="https://img.icons8.com/fluency/48/000000/security-checked.png"/><br/>
        <b>Secure System</b><br/>
        <sub>Protected endpoints</sub>
      </td>
    </tr>
  </table>
</div>

## 🏗 System Architecture

### High-Level Overview
```mermaid
graph TB
    subgraph Frontend
        A[React App] --> B[Model Selection]
        B --> C[Image Upload]
        C --> D[Results Display]
    end
    
    subgraph Backend
        E[FastAPI Server] --> F[TensorFlow Models]
        F --> G[Image Processing]
        G --> H[Disease Classification]
    end
    
    C -->|HTTP Request| E
    H -->|JSON Response| D
```

## 🚀 Quick Start

### Prerequisites
<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="https://img.icons8.com/color/48/000000/python.png"/><br/>
        Python ≥ 3.8
      </td>
      <td align="center">
        <img src="https://img.icons8.com/color/48/000000/nodejs.png"/><br/>
        Node.js ≥ 14
      </td>
      <td align="center">
        <img src="https://img.icons8.com/color/48/000000/npm.png"/><br/>
        npm ≥ 6
      </td>
    </tr>
  </table>
</div>

### Backend Setup
```bash
# Clone repository
git clone https://github.com/AmazingMoaaz/plant-disease-detection.git
cd plant-disease-detection

# Setup Python environment
python -m venv venv
source venv/bin/activate  # Windows: .\venv\Scripts\activate

# Install dependencies
cd backend
pip install -r requirements.txt

# Configure environment
cp .env.example .env
# Edit .env with your model paths

# Start server
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Frontend Setup
```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

## 🌿 Supported Plants

<div align="center">
  <table>
    <tr>
      <td align="center" width="200">
        <img src="frontend/src/plantIcons/PlantIcon1.png" width="100"/><br/>
        <h3>🍅 Tomato</h3>
        <details>
          <summary>View Conditions</summary>
          • Bacterial spot<br/>
          • Early blight<br/>
          • Late blight<br/>
          • Leaf Mold<br/>
          • Septoria leaf spot<br/>
          • Spider mites<br/>
          • Yellow Leaf Curl Virus<br/>
          • Target Spot<br/>
          • Mosaic virus<br/>
          • Healthy
        </details>
      </td>
      <td align="center" width="200">
        <img src="frontend/src/plantIcons/PlantIcon2.png" width="100"/><br/>
        <h3>🥔 Potato</h3>
        <details>
          <summary>View Conditions</summary>
          • Early blight<br/>
          • Late blight<br/>
          • Healthy
        </details>
      </td>
      <td align="center" width="200">
        <img src="frontend/src/plantIcons/PlantIcon3.png" width="100"/><br/>
        <h3>🍇 Grape</h3>
        <details>
          <summary>View Conditions</summary>
          • Black rot<br/>
          • Esca (Black Measles)<br/>
          • Leaf blight<br/>
          • Healthy
        </details>
      </td>
      <td align="center" width="200">
        <img src="frontend/src/plantIcons/PlantIcon4.png" width="100"/><br/>
        <h3>🌽 Corn</h3>
        <details>
          <summary>View Conditions</summary>
          • Cercospora leaf spot<br/>
          • Common rust<br/>
          • Northern Leaf Blight<br/>
          • Healthy
        </details>
      </td>
    </tr>
  </table>
</div>

## 💻 Tech Stack

### Frontend Technologies
<div align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white"/>
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
</div>

### Backend Technologies
<div align="center">
  <img src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi"/>
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"/>
  <img src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white"/>
  <img src="https://img.shields.io/badge/Uvicorn-2F2F2F?style=for-the-badge&logo=gunicorn&logoColor=white"/>
  <img src="https://img.shields.io/badge/PIL-11557C?style=for-the-badge&logo=python&logoColor=white"/>
</div>

## 📡 API Reference

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/ping` | Health check |
| POST | `/predict/{model_id}` | Disease prediction |

### Request Format
```json
{
  "file": "binary_image_data"
}
```

### Response Format
```json
{
  "class": "disease_name",
  "confidence": 0.95
}
```

## 🔧 Configuration

### Backend Environment Variables
```env
MODEL_PATH_PLANT_CLASSIFIER=path/to/classifier/model
TOMATO_MODEL=path/to/tomato/model
POTATO_MODEL=path/to/potato/model
GRAPE_MODEL=path/to/grape/model
CORN_MODEL=path/to/corn/model
```

### Frontend Environment Variables
```env
REACT_APP_API_URL=http://localhost:8000/predict
```
## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

<div align="center">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge" alt="PRs Welcome"/>
</div>

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <img src="https://img.shields.io/badge/Made%20with-🌿%20and%20❤️-blue?style=for-the-badge"/>
  <br/>
  <sub>© 2024 Plant Disease Detection Team. All rights reserved.</sub>
</div>
