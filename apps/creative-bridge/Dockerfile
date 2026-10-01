FROM node:22-bookworm-slim
ENV NODE_ENV=production HOST=0.0.0.0 PORT=8788
WORKDIR /app
COPY --chown=node:node packages/creative-review ./packages/creative-review
COPY --chown=node:node apps/creative-bridge ./apps/creative-bridge
RUN mkdir -p node_modules/@minds && ln -s ../../packages/creative-review node_modules/@minds/creative-review
USER node
EXPOSE 8788
CMD ["node", "apps/creative-bridge/src/main.js"]
