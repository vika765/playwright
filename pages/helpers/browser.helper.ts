// @ts-ignore

import {Page} from "@playwright/test";

export class BrowserHelper {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async openPage(url: string): Promise<void> {
        await this.page.goto(url);
    }
}