* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --primary: #667eea;
    --secondary: #764ba2;
    --dark: #2d3748;
    --light: #f7fafc;
    --danger: #e53e3e;
    --success: #48bb78;
    --shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    --shadow-hover: 0 20px 60px rgba(0, 0, 0, 0.15);
}

body {
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    color: var(--dark);
}

/* Navigation */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    box-shadow: var(--shadow);
    transition: all 0.3s ease;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
    background: var(--primary-gradient);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.logo i {
    color: var(--primary);
    margin-right: 0.5rem;
}

.nav-links {
    display: flex;
    gap: 2rem;
    align-items: center;
}

.nav-links a {
    text-decoration: none;
    color: var(--dark);
    font-weight: 500;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: var(--primary);
}

.btn-login, .btn-signup {
    padding: 0.5rem 1.5rem;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    border: none;
}

.btn-login {
    background: transparent;
    color: var(--primary);
    border: 2px solid var(--primary);
}

.btn-login:hover {
    background: var(--primary);
    color: white;
}

.btn-signup {
    background: var(--primary-gradient);
    color: white;
}

.btn-signup:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow);
}

.hamburger {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6rem 2rem 4rem;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
}

.hero-content {
    flex: 1;
    animation: slideInLeft 0.8s ease;
}

.hero-content h1 {
    font-size: 3.5rem;
    line-height: 1.2;
    margin-bottom: 1.5rem;
}

.highlight {
    background: var(--primary-gradient);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.hero-content p {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 2rem;
    line-height: 1.6;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
}

.btn-primary, .btn-secondary {
    padding: 1rem 2rem;
    border-radius: 50px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    border: none;
    font-size: 1rem;
}

.btn-primary {
    background: var(--primary-gradient);
    color: white;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow);
}

.btn-secondary {
    background: white;
    color: var(--primary);
    border: 2px solid var(--primary);
}

.btn-secondary:hover {
    background: var(--primary);
    color: white;
}

.hero-image {
    flex: 1;
    position: relative;
    height: 400px;
}

.floating-card {
    position: absolute;
    background: white;
    padding: 1rem 1.5rem;
    border-radius: 15px;
    box-shadow: var(--shadow);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    animation: float 3s ease-in-out infinite;
}

.floating-card i {
    font-size: 1.5rem;
    color: var(--primary);
}

.card-1 {
    top: 20%;
    left: 10%;
    animation-delay: 0s;
}

.card-2 {
    top: 60%;
    right: 10%;
    animation-delay: 1s;
}

.card-3 {
    bottom: 20%;
    left: 30%;
    animation-delay: 2s;
}

/* Features Section */
.features {
    padding: 5rem 2rem;
    background: var(--light);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.section-subtitle {
    text-align: center;
    color: #666;
    margin-bottom: 3rem;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.feature-card {
    background: white;
    padding: 2rem;
    border-radius: 20px;
    text-align: center;
    transition: all 0.3s;
    cursor: pointer;
}

.feature-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-hover);
}

.feature-icon {
    width: 80px;
    height: 80px;
    background: var(--primary-gradient);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
}

.feature-icon i {
    font-size: 2rem;
    color: white;
}

.feature-card h3 {
    margin-bottom: 1rem;
}

/* Memories Showcase */
.memories-showcase {
    padding: 5rem 2rem;
}

.memories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.memory-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: all 0.3s;
    cursor: pointer;
}

.memory-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
}

.memory-card img {
    width: 100%;
    height: 250px;
    object-fit: cover;
}

.memory-card .memory-content {
    padding: 1.5rem;
}

.memory-card h3 {
    margin-bottom: 0.5rem;
    color: var(--primary);
}

.memory-card p {
    color: #666;
    margin-bottom: 1rem;
    line-height: 1.5;
}

.memory-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    border-top: 1px solid #e2e8f0;
}

.memory-footer i {
    color: var(--danger);
}

/* Modal */
.modal {
    display: none;
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    animation: fadeIn 0.3s;
}

.modal-content {
    background: white;
    margin: 5% auto;
    padding: 2rem;
    border-radius: 20px;
    width: 90%;
    max-width: 500px;
    position: relative;
    animation: slideDown 0.3s;
}

.modal-content.large {
    max-width: 800px;
    max-height: 80vh;
    overflow-y: auto;
}

.close, .close-dashboard {
    position: absolute;
    right: 1.5rem;
    top: 1rem;
    font-size: 2rem;
    cursor: pointer;
    transition: color 0.3s;
}

.close:hover, .close-dashboard:hover {
    color: var(--danger);
}

.auth-tabs {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    border-bottom: 2px solid #e2e8f0;
}

.tab-btn {
    padding: 0.75rem 1.5rem;
    background: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    color: #666;
    transition: all 0.3s;
}

.tab-btn.active {
    color: var(--primary);
    border-bottom: 2px solid var(--primary);
    margin-bottom: -2px;
}

.auth-form {
    display: none;
}

.auth-form.active {
    display: block;
    animation: fadeIn 0.3s;
}

.auth-form h2 {
    text-align: center;
    margin-bottom: 1.5rem;
}

.form-note {
    text-align: center;
    color: var(--primary);
    margin-bottom: 1.5rem;
}

.form-group {
    margin-bottom: 1rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
}

.form-group input,
.form-group textarea,
.form-group select {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #e2e8f0;
    border-radius: 10px;
    font-family: inherit;
    transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
    outline: none;
    border-color: var(--primary);
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

/* Dashboard */
.dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #e2e8f0;
}

.btn-logout {
    background: var(--danger);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    cursor: pointer;
}

.dashboard-tabs {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
}

.dashboard-tab {
    padding: 0.75rem 1.5rem;
    background: #f7fafc;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s;
}

.dashboard-tab.active {
    background: var(--primary-gradient);
    color: white;
}

.dashboard-tab-content {
    display: none;
}

.dashboard-tab-content.active {
    display: block;
    animation: fadeIn 0.3s;
}

.user-memories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;
}

.user-memory-card {
    background: #f7fafc;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
}

.user-memory-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.user-memory-card .memory-info {
    padding: 1rem;
}

.user-memory-card h4 {
    margin-bottom: 0.5rem;
}

.delete-memory {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: rgba(229, 62, 62, 0.9);
    color: white;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: all 0.3s;
}

.delete-memory:hover {
    transform: scale(1.1);
}

.image-preview {
    margin-top: 0.5rem;
    max-width: 200px;
}

.image-preview img {
    width: 100%;
    border-radius: 10px;
}

/* Contact Section */
.contact {
    padding: 5rem 2rem;
    background: var(--primary-gradient);
    color: white;
}

.cta-box {
    text-align: center;
}

.btn-large {
    padding: 1.2rem 2.5rem;
    font-size: 1.1rem;
}

/* Footer */
.footer {
    background: var(--dark);
    color: white;
    padding: 3rem 2rem 1rem;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer-section h4 {
    margin-bottom: 1rem;
}

.footer-section a {
    color: #cbd5e0;
    text-decoration: none;
    display: block;
    margin-bottom: 0.5rem;
    transition: color 0.3s;
}

.footer-section a:hover {
    color: white;
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-links a {
    font-size: 1.5rem;
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid #4a5568;
}

/* Animations */
@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes float {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
}

.animate-text {
    animation: slideInLeft 0.8s ease;
}

.animate-text-delay {
    animation: slideInLeft 0.8s ease 0.3s both;
}

/* Responsive */
@media (max-width: 768px) {
    .nav-links {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        flex-direction: column;
        padding: 1rem;
        box-shadow: var(--shadow);
    }
    
    .nav-links.active {
        display: flex;
    }
    
    .hamburger {
        display: block;
    }
    
    .hero {
        flex-direction: column;
        text-align: center;
        padding-top: 8rem;
    }
    
    .hero-content h1 {
        font-size: 2rem;
    }
    
    .hero-buttons {
        justify-content: center;
    }
    
    .hero-image {
        margin-top: 3rem;
        height: 300px;
    }
    
    .floating-card {
        transform: scale(0.8);
    }
    
    .form-row {
        grid-template-columns: 1fr;
    }
    
    .modal-content {
        margin: 10% auto;
        padding: 1.5rem;
    }
    
    .user-memories-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .hero-buttons {
        flex-direction: column;
    }
    
    .features-grid {
        grid-template-columns: 1fr;
    }
    
    .memories-grid {
        grid-template-columns: 1fr;
    }
}
