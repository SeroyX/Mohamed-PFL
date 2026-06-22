export const projectsData = [
  {
    id: 'Multilabel Crop Disease Detection using CNNs and Vision Transformers',
    title: 'Multilabel Crop Disease Detection using CNNs and Vision Transformers',
    category: 'Deep Learning & Computer Vision',
    tags: ['PyTorch', 'Computer Vision', 'Transfer Learning', 'Fine-Tuning', 'EfficientNet-Lite0', 'MobileNetV3', 'ResNet50', 'Vision Transformer (ViT)', 'Plant Pathology 2021 Dataset'],
    description: 'An AI-powered crop disease detection system that leverages both CNN-based and Transformer-based architectures for multilabel classification of plant diseases. The project evaluates multiple state-of-the-art deep learning models and integrates them into a real-time disease detection pipeline.',
    overview: 'This project explores the use of deep learning for automatic crop disease diagnosis using the Plant Pathology 2021 dataset. Multiple architectures were fine-tuned and compared, including CNN-based models (EfficientNet-Lite0, MobileNetV3, ResNet50) and a Transformer-based model (Vision Transformer). The trained models were integrated into a real-time inference system capable of detecting multiple diseases from a single leaf image.',
    KeyFeatures: [
      'Fine-tuning of four state-of-the-art deep learning architectures',
      'Multilabel crop disease classification from leaf images',
      'Comparative analysis between CNN and Transformer approaches',
      'Real-time disease detection pipeline',
      'Performance evaluation across accuracy, precision, recall, and F1-score',
      'Support for multiple simultaneous disease predictions',
      'Integration with smart agriculture applications',
    ],
    technicalImplementation: 'The project follows a transfer learning approach where pre-trained EfficientNet-Lite0, MobileNetV3, ResNet50, and Vision Transformer models were fine-tuned on the Plant Pathology 2021 dataset. CNN architectures were used to capture local visual patterns while the Vision Transformer leveraged self-attention mechanisms to model global image relationships. A unified inference pipeline was developed to evaluate and deploy all models under real-world conditions, enabling comparative analysis of prediction quality, computational efficiency, and deployment suitability for intelligent farming systems.',
    image: `${import.meta.env.BASE_URL}Projects Pics/efnt1.png`,
    hasDemo: false,
    hasPic: true,
    priority: 1
  },
  
  {
    id: 'Explainable AI for Crop Disease Diagnosis using Grad-CAM',
    title: 'Explainable AI for Crop Disease Diagnosis using Grad-CAM',
    category: 'Explainable AI',
    tags: ['PyTorch', 'Grad-CAM', 'Computer Vision', 'Model Interpretability', 'Image Segmentation'],
    description: 'An XAI framework that interprets deep learning models for crop disease detection using advanced Grad-CAM visualization techniques.',
    overview: 'This project enhances model transparency by providing visual explanations of predictions made by deep learning models for crop disease classification.',
    keyFeatures: [
      'Class-specific Grad-CAM heatmaps for disease localization',
      'Multi-class heatmap fusion for improved interpretability',
      'Leaf segmentation to isolate relevant plant regions',
      'Final heatmap generation combining attention and segmentation masks'
    ],
    technicalImplementation: 'The pipeline generates class-wise activation maps using Grad-CAM, merges multi-class attention regions, and applies segmentation to isolate the main leaf area. A final explainability map is produced to highlight disease-affected regions clearly.',
    image: `${import.meta.env.BASE_URL}Projects Pics/xai.png`,
    hasDemo: false,
    hasPic: true,
    priority: 1
  },
{
    id: 'DigTwin - Explainable AI-Based Digital Twin for Smart Agricultur',
    title: 'DigTwin - Explainable AI-Based Digital Twin for Smart Agricultur',
    category: 'Full-Stack AI System',
    tags: ['Next.js', 'Three.js', 'MongoDb', 'TailwindCss', 'Flask', 'PyTorch', 'Computer Vision', 'IoT Simulation', 'WebSockets'],
    description: 'A real-time digital twin platform for crop monitoring, integrating AI-based disease detection with environmental data visualization.',
    overview: 'This system acts as a digital twin of a smart farm, providing real-time monitoring, disease detection, and AI-driven decision support.',
    keyFeatures: [
      "Real-time plant disease detection from uploaded or streamed images",
    "AI-powered crop health monitoring dashboard",
    "Integration of environmental data visualization",
    "Explainable AI insights for model predictions",
    "Simulation of smart farming environment (digital twin concept)"
    ],
    technicalImplementation: 'The system connects a deep learning backend (PyTorch + Flask API) with a modern web dashboard. It processes incoming images in real-time and updates farm state visualization using AI predictions and explainability outputs.',
    image: `${import.meta.env.BASE_URL}Projects Pics/digtwin.png`,
    hasDemo: false,
    hasPic: true,
    priority: 1
  },
  {
    id: 'LeafScan – AI-Powered Plant Disease Detection App',
    title: 'LeafScan – AI-Powered Plant Disease Detection App',
    category: 'Mobile Application',
    tags: ['Flutter', 'Dart', 'TensorFlow Lite', 'Computer Vision'],
    description: 'A mobile application for real-time crop disease detection using deep learning models integrated into a user-friendly interface.',
    overview: 'LeafScan enables farmers to capture plant images and receive instant AI-based disease diagnosis directly on mobile devices.',
    keyFeatures: [
      "Real-time plant disease detection from camera input",
    "Optimized lightweight AI model for mobile inference",
    "User-friendly mobile interface for farmers",
    "Instant diagnostic results with confidence scores"
    ],
    technicalImplementation: 'The application integrates a lightweight deep learning model optimized for mobile deployment using TensorFlow Lite. Images captured via camera are processed locally or via backend API for prediction.',
    image: `${import.meta.env.BASE_URL}Projects Pics/leafscan.png`,
    hasDemo: false,
    hasPic: true,
    priority: 1
  },


  {
    id: 'Multi-role E-commerce Platform (Ouedkniss Clone)',
    title: 'Multi-role E-commerce Platform (Ouedkniss Clone)',
    category: 'Full-Stack Web Development',
    tags: ['Java', 'Spring Modulith', 'Spring Data JPA', 'Hibernate ORM', 'Thymeleaf', 'MySQL', 'Maven'],
    description: 'A full-stack e-commerce platform inspired by Ouedkniss, designed to support buyers, sellers, and administrators through a role-based architecture. The platform enables product management, user administration, and transaction monitoring within a centralized system.',
    overview: 'This project is a multi-role online marketplace that allows sellers to manage product listings, buyers to browse and purchase products, and administrators to oversee platform activities through a dedicated management interface.',
    keyFeatures: [
      'Role-based access control (Admin, Seller, Buyer)',
      'Product catalog and inventory management',
      'User account and profile management',
      'Administrative dashboard for platform supervision',
      'Secure authentication and authorization',
      'Transaction and order management',
      'Dynamic web interface using server-side rendering',
    ],
    technicalImplementation: 'The application was developed using Spring Modulith to ensure a modular and maintainable backend architecture. Data persistence is handled through Spring Data JPA and Hibernate ORM, providing efficient interaction with a MySQL database. The frontend was built using Thymeleaf, enabling dynamic server-side rendering and seamless integration with the Spring ecosystem. The modular architecture facilitates scalability, maintainability, and separation of business domains.',
    image: `${import.meta.env.BASE_URL}Projects Pics/Ouedkniss.png`,
    hasDemo: false,
    hasPic: true,
    priority: 1
  },


  {
    id: 'Ouedkniss Mobile – Online Shopping Application',
    title: 'Ouedkniss Mobile – Online Shopping Application',
    category: 'Mobile Development',
    tags: ['Flutter', 'Dart', 'REST APIs'],
    description: 'A cross-platform mobile shopping application enabling users to browse, search, and purchase products.',
    overview: 'A mobile extension of the Ouedkniss platform providing a smooth shopping experience on mobile devices.',
    keyFeatures: [
      "Product browsing and search functionality",
    "User authentication and profile management",
    "Shopping cart system",
    "Responsive and intuitive UI design"
    ],
    technicalImplementation: 'Developed using Flutter with REST API integration to the backend system, ensuring synchronization between web and mobile platforms.',
    image: `${import.meta.env.BASE_URL}Projects Pics/Ouedkniss.png`,
    hasDemo: false,
    hasPic: true,
    priority: 1
  },


  {
    id: 'Nexus – E-commerce Platform for Tech Components',
    title: 'Nexus – E-commerce Platform for Tech Components',
    category: 'Full-Stack Web Development',
    tags: ['React', 'TypeScript', 'Supabase'],
    description: 'A specialized e-commerce platform for selling computer hardware and tech components.',
    overview: 'Nexus is a modern e-commerce platform focused on PC components such as GPUs, CPUs, monitors, and accessories.',
    keyFeatures: [
      "Product catalog for tech hardware components",
    "User-friendly shopping experience",
    "Secure authentication and database management",
    "Responsive UI optimized for tech-savvy users"
    ],
    technicalImplementation: 'Built using React and TypeScript with Supabase as backend-as-a-service, enabling real-time database operations and authentication.',
    image: `${import.meta.env.BASE_URL}Projects Pics/nexus1.png`,
    hasDemo: false,
    hasPic: true,
    priority: 1
  },


  {
    id: 'Tawjihi – University Orientation Recommendation Platform',
    title: 'Tawjihi – University Orientation Recommendation Platform',
    category: 'AI Recommendation System',
    tags: ['React.js','TailwindCss', 'Web Development', 'Data Processing', 'Recommendation Systems'],
    description: 'A web-based recommendation system that helps students choose university paths based on academic performance and preferences.',
    overview: 'This platform assists students in making informed academic decisions based on their baccalaureate results, interests, and goals.',
    keyFeatures: [
      "Personalized university program recommendations",
    "Input-based filtering system (grades, preferences)",
    "Student goal-based suggestions",
    "Interactive web interface for guidance"
    ],
    technicalImplementation: 'The system processes student academic data and applies rule-based or data-driven logic to generate tailored university orientation recommendations.',
    image: `${import.meta.env.BASE_URL}Projects Pics/tawjihi1.png`,
    hasDemo: false,
    hasPic: true,
    priority: 1
  },


  {
    id: 'Sante-Pro – Medical Appointment Management App',
    title: 'Sante-Pro – Medical Appointment Management App',
    category: 'Mobile Application',
    tags: ['Flutter', 'Dart', 'REST APIs', 'Location Services'],
    description: 'A healthcare mobile application for booking medical appointments and managing patient-doctor interactions.',
    overview: 'Sante-Pro enables patients to book appointments, choose doctors by specialty and location, and communicate with healthcare providers',
    keyFeatures: [
      "Doctor search and filtering by specialty and location",
    "Appointment scheduling (clinic or home visit)",
    "Patient-doctor messaging system",
    "Appointment management (date, time, status)"
    ],
    technicalImplementation: 'Built using Flutter with backend API integration to manage authentication, scheduling, messaging, and geolocation-based filtering.',
    image: `${import.meta.env.BASE_URL}Projects Pics/sante.png`,
    hasDemo: false,
    hasPic: true,
    priority: 1
  },
]

// Filter and sort projects by priority
export const getOrganizedProjects = () => {
  return projectsData.sort((a, b) => a.priority - b.priority)
}

// Get projects by category
export const getProjectsByCategory = (category) => {
  return projectsData.filter(project => project.category === category)
}

// Get project by ID
export const getProjectById = (id) => {
  return projectsData.find(project => project.id === id)
}
