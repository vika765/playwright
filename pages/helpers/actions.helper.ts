import {Page} from "@playwright/test";
import {ButtonsEnum} from "../data/buttons.enum";

export class ActionsHelper {
    readonly page: Page;


    constructor(page: Page) {
        this.page = page;
    }

    public async click(selector: string): Promise<void> {
        await this.page.click(selector);
    }

    public async fillField(selector: string, text: string): Promise<void> {
        await this.page.fill(selector, text);
    }

    public async getText(selector: string): Promise<string> {
        return await this.page.innerText(selector);
    }

    public async getTextAll(selector: string): Promise<string[]> {
        const text = await this.page.innerText(selector);

    }

    public async pressButton(button: ButtonsEnum): Promise<void> {
        await this.page.keyboard.press(button);
    }

    public async beVisible(selector: string) : Promise<void> {
        await this.page.isVisible(selector)
    }
}