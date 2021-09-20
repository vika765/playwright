import {Page} from "@playwright/test";

export class WaitersHelper {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async waitForVisible(selector: string, timeout: number = 10000): Promise<void> {
        await this.page.waitForSelector(selector, {state: "visible", timeout: timeout})
    }
}