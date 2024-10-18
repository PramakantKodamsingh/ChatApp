<h1 align="center">💬 CatchUp...</h1>
<p align="center">A real-time chat application built with the MERN (MongoDB, Express, React, Node.js) stack.</p>

<p align="center">
 
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/node-%3E%3D14.0.0-green.svg" alt="Node.js"></a>
  <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/react-%3E%3D17.0.0-blue.svg" alt="React"></a>


</p>

<h2>📜 Table of Contents</h2>

<ul>
  <li><a href="#features">Features</a></li>
  <li><a href="#tech-stack">Tech Stack</a></li>
  <li><a href="#installation">Installation</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#license">License</a></li>
</ul>

<h2 id="features">✨ Features</h2>

<ul>
  <li>💬 Real-time messaging</li>
  <li>👥 User authentication (Sign up & Log in)</li>
  <li>🛡️ Secure password storage with <strong>bcrypt</strong></li>
  <li>📑 Chat history stored in <strong>MongoDB</strong></li>
  <li>🔔 Instant notifications for new messages</li>
</ul>

<h2 id="tech-stack">🛠 Tech Stack</h2>

<ul>
  <li><strong>Front-end</strong>: React, Socket.io-client</li>
  <li><strong>Back-end</strong>: Node.js, Express, Socket.io</li>
  <li><strong>Database</strong>: MongoDB</li>
  <li><strong>Authentication</strong>: JWT (JSON Web Token), bcrypt</li>
  <li><strong>Styling</strong>: CSS, Bootstrap</li>
</ul>

<h2 id="installation">🚀 Installation</h2>

<ol>
  <li>Clone the repository:</li>

  <pre><code>git clone https://github.com/Pramakant/chat-app.git</code></pre>

  <li>Navigate to the project directory:</li>

  <pre><code>cd chat-app</code></pre>

  <li>Install dependencies for both the client and server:</li>

  <pre><code>npm install</code></pre>

  <li>Create a <code>.env</code> file in the root directory and add your environment variables:</li>

  <pre><code>
  PORT=5000
  MONGO_URL=your_mongodb_url
  JWT_SECRET=your_secret_key
  </code></pre>

  <li>Run the development server:</li>

  <pre><code>npm start</code></pre>
</ol>

<h2 id="usage">📚 Usage</h2>

<ul>
  <li>Open the app in your browser at <code>http://localhost:5000</code></li>
  <li>Create an account or log in with existing credentials</li>
  <li>Start chatting with users in real-time!</li>
</ul>

<h2 id="contributing">🤝 Contributing</h2>

<p>Contributions, issues, and feature requests are welcome!</p>
<ul>
  <li>Fork the repository</li>
  <li>Create a new branch (<code>git checkout -b feature-branch</code>)</li>
  <li>Make your changes and commit them (<code>git commit -m 'Add some feature'</code>)</li>
  <li>Push to the branch (<code>git push origin feature-branch</code>)</li>
  <li>Open a pull request</li>
</ul>

<h2 id="license">📄 License</h2>

<p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>

<p align="center">Made with ❤️ by Pramakant Kodamsingh</p>
