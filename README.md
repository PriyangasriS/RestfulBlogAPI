The issue with the "Author" link in your Table of Contents not working is likely due to a formatting error in the Markdown file. Specifically, the link might not work because Markdown requires anchor links to match the exact text (including capitalization) of the section headers.

To fix the link in the Table of Contents, update the "Author" section header to match the link in the Table of Contents exactly. Here's the corrected section:

```md
## Table of Contents
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Setup Environment Variables](#setup-environment-variables)
- [See The Project In Action](#see-the-project-in-action)
- [Author](#author)

## Technologies Used
- MongoDB
- Express.js
- React
- Node.js

## Getting Started
1. First of all, you need to clone the app repository from GitHub:
    ```bash
    git clone https://github.com/otonebierdizde/MERN-blog-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd MERN-blog-app
    ```
3. Install the dependencies for both the backend and frontend:
    ```bash
    cd frontend && npm install
    cd ../backend && npm install
    ```

## Setup Environment Variables
1. Create a `.env` file in the `backend` directory.
2. Open the `.env` file and define the following environment variables:
    ```plaintext
    MONGO_URI=your_mongodb_connection_uri
    PORT=your_port
    ```

## See The Project In Action
```bash
cd frontend && npm run dev
cd ../backend && npm run dev
```

## Author
LinkedIn - [Priyanga Sri S](https://www.linkedin.com/in/priyanga-sri-s-9a828926a/)
```
