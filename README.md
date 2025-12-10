# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Docker

The repository ships with a production Dockerfile that builds and serves the compiled React app.

### Dockerfile overview

1. Base image: `node:20-alpine` for a small runtime footprint.
2. Installs dependencies using `npm ci` (honors `package-lock.json`).
3. Copies the source, runs `npm run build`, and produces the static bundle in `dist/`.
4. Starts the Express server defined in `server.cjs`, which simply serves the files in `dist/`.

This approach keeps the runtime image clean—no dev dependencies, no source code, just the compiled assets plus the Node runtime needed to serve them.

### Build the image

```bash
docker build -t admin-starter-app .
```

### Run the container

```bash
docker run --rm -p 3001:3001 -e PORT=3001 admin-starter-app
```

Key details:

- The container listens on `PORT` (defaults to `3001`). Override by passing `-e PORT=<port>` at runtime.
- Because the build happens inside the image, there is no need to mount your source directory. Rebuild the image whenever you change code.
- `server.cjs` simply serves pre-built static assets—there is no SSR layer to configure.

### Environment variables

The React build is influenced by variables prefixed with `VITE_` (defined in `.env` before `npm run build`). At runtime, only `PORT` is consumed by `server.cjs`. If you need other runtime values, add them to the Express server and pass them through via `docker run -e KEY=value`.

### Stopping / cleaning up

Stop a running container with `Ctrl+C` (if in the foreground) or `docker stop <id>`. Remove dangling images with `docker image prune` when you no longer need them.

## Docker Compose

Compose offers a convenient way to run the container with environment variables and shared networks already wired up.

1. Create an `.env` file in the project root (or copy `.env.example` if present) with at least:

   ```bash
   PORT=3001
   ```

   Add other environment variables consumed by your app.
2. Bring the stack up:

   ```bash
   docker compose up --build
   ```

   Use `docker compose up -d --build` to run in detached mode.
3. Tear it down:

   ```bash
   docker compose down        # add --volumes to drop the node_modules volume
   ```

What Compose does for you:

- Mounts `/app/node_modules` as an anonymous volume so host systems do not interfere with the container’s dependency tree.
- Exposes the container’s `PORT` value on the same port of the host.
- Connects the container to the `sessions-network` network (automatically created if it does not exist), making service-to-service communication easy when pairing with other apps.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
