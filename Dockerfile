ARG NODE_VERSION
ARG DEBIAN_VERSION

FROM node:${NODE_VERSION}-${DEBIAN_VERSION}-slim

ARG MFE_NAME

# Install curl and ca-certificates
RUN apt-get update && apt-get install -y --no-install-recommends curl ca-certificates && rm -rf /var/lib/apt/lists/*

ENV APP_DIR /opt/rea/apps/${MFE_NAME}

# Set up a non-root user to run install + prepare and postinstall scripts
RUN useradd --create-home ${MFE_NAME}

WORKDIR $APP_DIR
RUN chown ${MFE_NAME}:${MFE_NAME} $APP_DIR

USER ${MFE_NAME}

COPY --chown=${MFE_NAME}:${MFE_NAME} package.json package-lock.json .npmrc argonaut.config.json $APP_DIR/
RUN npm install

COPY --chown=${MFE_NAME}:${MFE_NAME} . .
RUN npm run build
