# Braden's Robotics Trial Project

My first React Project with TailwindCSS, React Router, Vite, and TypeScript.

<img width="1491" height="830" alt="Robotics Control Panel Image" src="https://github.com/user-attachments/assets/a8fcd8b4-f8a3-4c41-99c8-64df9914e2c8" />
Come view the demo[here.](https://robodemo.bwagner.dev).

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```


### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```


