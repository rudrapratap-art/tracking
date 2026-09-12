import { BrowserCheck, Frequency, RetryStrategyBuilder } from 'checkly/constructs'

new BrowserCheck('bcece-board-notifications-page-DI5x9SCZ', {
  name: 'BCECE Board - Notifications Page',
  code: {
    entrypoint: './bcece-board-notifications-page.spec.ts',
  },
  activated: true,
  locations: [
    'ap-south-1',
  ],
  frequency: Frequency.EVERY_10M,
  retryStrategy: RetryStrategyBuilder.fixedStrategy({
    maxRetries: 1,
    baseBackoffSeconds: 0,
    maxDurationSeconds: 600,
    sameRegion: false,
  }),
})
