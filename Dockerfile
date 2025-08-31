FROM oven/bun:latest

WORKDIR /app

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

COPY . .

RUN bun install

CMD ["bun", "run", "index.ts"]