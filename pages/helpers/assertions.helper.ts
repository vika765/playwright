import {expect, Page} from "@playwright/test";
import {ButtonsEnum} from "../data/buttons.enum";
import {ActionsHelper} from "./actions.helper";

export class AssertionsHelper {
    readonly page: Page;
    readonly actions: ActionsHelper;


    constructor(page: Page) {
        this.page = page;
        this.actions = new ActionsHelper(page);
    }

    public async checkText(selector: string, expectedText: string): Promise<void> {
        const text = await this.actions.getText(selector);
        await expect(text).toBe(expectedText);
    }

}