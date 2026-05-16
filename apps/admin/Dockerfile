FROM node:20-alpine AS base

# Install pnpm
RUN npm install -g pnpm@8

FROM base AS dependencies
WORKDIR /app
COPY package.json pnpm-workspace.yaml ./
COPY apps/admin/package.json ./apps/admin/
COPY packages/types/package.json ./packages/types/
COPY packages/database/package.json ./packages/database/
COPY packages/config/package.json ./packages/config/
RUN pnpm install --no-frozen-lockfile

FROM dependencies AS builder
WORKDIR /app
COPY . .
RUN pnpm --filter @living-library/admin build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/apps/admin/.next/standalone ./
COPY --from=builder /app/apps/admin/.next/static ./apps/admin/.next/static
COPY --from=builder /app/apps/admin/public ./apps/admin/public

USER nextjs
EXPOSE 3001
ENV PORT 3001

CMD ["node", "apps/admin/server.js"]
