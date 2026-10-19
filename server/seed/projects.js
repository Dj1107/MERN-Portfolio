// Project data seeded into MongoDB (`npm run seed`).
// Repo links are taken from the resume. Projects without a public repo have an empty githubUrl.
const GITHUB = "https://github.com/Dj1107";

module.exports = [
  {
    title: "Movie Review Sentiment Analysis",
    period: "May – Jul 2026",
    summary:
      "End-to-end NLP pipeline that classifies movie reviews as positive or negative using TF-IDF (unigrams and bigrams) with a Logistic Regression classifier.",
    highlights: [
      "Text-preprocessing module (HTML/URL/punctuation cleanup); evaluated on accuracy, precision and recall.",
      "Flask REST API with single, batch and health-check endpoints, plus a CLI and a simple web UI.",
      "Covered by a pytest test suite.",
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "Flask", "pytest", "joblib"],
    githubUrl: `${GITHUB}/Movie-review-sentiment`,
    liveUrl: "",
    order: 1,
  },
  {
    title: "WeatherML – Weather Forecasting Dashboard",
    period: "May – Jul 2026",
    summary:
      "Full-stack forecasting system using OLS linear regression with seasonal decomposition, 95% prediction-interval bands and Z-score anomaly detection across five Indian cities.",
    highlights: [
      "Model evaluation with MAE, RMSE, R² and ±3°C accuracy.",
      "Interactive multi-tab dashboard with 7-day and hourly forecast views.",
      "Browser app (JavaScript, Chart.js) and a Python CLI with Matplotlib plots, using synthetic climate data.",
    ],
    tech: ["Python", "NumPy", "Pandas", "Matplotlib", "JavaScript", "HTML/CSS", "Chart.js"],
    githubUrl: `${GITHUB}/weather-forecasting`,
    liveUrl: "",
    order: 2,
  },
  {
    title: "Speech-to-Text Transcription Tool",
    period: "May – Jul 2026",
    summary:
      "Flask web app that transcribes uploaded audio (WAV, MP3, M4A, OGG, FLAC) and microphone input, with downloadable transcripts.",
    highlights: [
      "Three recognition engines (Google Web Speech, OpenAI Whisper, CMU Sphinx) with English and Hindi support.",
      "REST endpoints for file/mic transcription, transcript download and health check.",
      "Upload size limits and automatic cleanup of uploaded files.",
    ],
    tech: ["Python", "Flask", "Whisper", "SpeechRecognition", "PyAudio", "pydub", "JavaScript"],
    githubUrl: `${GITHUB}/speechtotext`,
    liveUrl: "",
    order: 3,
  },
  {
    title: "DBMS-Based Notebook Application",
    period: "2024",
    summary:
      "Relational database schema and SQL backend for managing notebook entries, users and metadata, applying normalization for a functional end-to-end app.",
    highlights: [
      "Designed and implemented the full relational schema for entries, users and metadata.",
      "SQL backend logic for retrieval, insertion and optimization, applying normalization and system integration.",
    ],
    tech: ["Python", "SQL", "Firebase Console", "VS Code"],
    githubUrl: "",
    liveUrl: "",
    order: 4,
  },
  {
    title: "Machine Learning Model Development (Academic)",
    period: "2024 – Present",
    summary:
      "Built and evaluated supervised and unsupervised learning models, including regression and classification algorithms.",
    highlights: [
      "Data preprocessing, feature engineering and hyperparameter tuning in Python notebooks.",
      "Worked with NumPy, Pandas, Matplotlib and Scikit-learn.",
    ],
    tech: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
    githubUrl: "",
    liveUrl: "",
    order: 5,
  },
];
