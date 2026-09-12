import { defineConfig } from 'checkly'

export default defineConfig({
  projectName: 'tracking',
  logicalId: 'tracking',
  checks: {
    locations: ['ap-south-1'],
    checkMatch: '**/*.check.ts',
    browserChecks: { testMatch: '**/*.spec.ts' },
  },
})
