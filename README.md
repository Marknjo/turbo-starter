# Turborepo (NestJS + NextJS + React + Tailwind + Typescript + Vitest + Husk + Github CI/CD Pipeline) Starter

This is fullstack Turborepo starter. It comes with the following features.

✅ Turborepo
✅ Nestjs or Express Api Server
✅ NextJS Web app or Vanilla React Web App
✅ Tailwindcss
✅ Testing using Jest for NestJs API and Vitest for All other apps
✅ Github Actions
✅ Package scripts using NPS

## What's inside?

This turborepo uses [pnpm](https://pnpm.io/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- next`: a [Next.js](https://nextjs.org) app. It serves as an example frontend.
- `@mj/api-nest | @mj/api-exp`: a sample NestJS & ExpressJS server.
- `@mj/next-web | @mj/react-web`: nextjs/react setup with tailwindcss.
- `@mj/ui`: a stub React component library shared by both `next-app`
- `@mj/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@mj/tsconfig`: `@mj/tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting

## Setup

This repository is used in the `pnpm create-turbo:latest` command, and selected when choosing which package manager you wish to use with your monorepo (pnpm).

Turborepo is also installed globally with `pnpm install turbo --global`. See further guide on [installing Turborepo globally](https://turbo.build/repo/docs/installing).

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build

or pnpm build -F @mj/<app-name> i.e. @mj/next-web

or turbo dev (turbo must be installed globally)
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm run dev
turbo dev  (turbo must be installed globally)
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching (Beta) you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
turbo login  (turbo must be installed globally)
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
turbo link
```

## Important Info

You don't have to use all 4 apps. Mostly you will need either a @mj/react-web with either @mj/exp-api or @mj/nest-api. Feel free to delete or rename the apps name to match your needs. Also delete the apps you won't be needing in your workflow.

In case need @mj/nest-web as standalone app. You don't need a monorepo. It might be overkill.

That's all happy coding.

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/features/pipelines)
- [Caching](https://turborepo.org/docs/features/caching)
- [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/features/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
