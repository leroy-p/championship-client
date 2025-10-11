import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'https://championship-server.onrender.com/graphql',
  documents: ['src/**/*.{graphql,ts,tsx}'],
  generates: {
    './src/graphql/generated/': {
      preset: 'client',
      plugins: [],
      config: {
        preResolveTypes: true,
      },
    },
  },
};

export default config