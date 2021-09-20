import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    projects: [
        {
            name: 'Chrome Stable',
            use: {
                browserName: 'chromium',
                screenshot: 'only-on-failure',
            },
        }
    ],
    timeout: 300000,
    reporter: [
        ['list'],
        ['allure-playwright']
    ]
};

export default config;