// @ts-ignore
import {BrowserHelper} from "../helpers/browser.helper";
import {Page} from "@playwright/test";
import {ActionsHelper} from "../helpers/actions.helper";
import {WaitersHelper} from "../helpers/waiters.helper";
import {ButtonsEnum} from "../data/buttons.enum";
import {sleep} from "../utils/commonUtils.utils";
import {AssertionsHelper} from "../helpers/assertions.helper";

export class LocationPage {

    readonly page: Page;
    readonly browser: BrowserHelper;
    readonly actions: ActionsHelper;
    readonly waiters: WaitersHelper;
    readonly assertions: AssertionsHelper;

    private selectors = {
        cityInput: '#city__front-input'
    };

    constructor(page: Page) {
        this.page = page;
        this.browser = new BrowserHelper(this.page);
        this.actions = new ActionsHelper(this.page);
        this.waiters = new WaitersHelper(this.page);

    }

    public async enterCityName(cityName: string): Promise<void> {
        await this.actions.fillField(this.selectors.cityInput, cityName);
        await sleep(1000);
        await this.actions.pressButton(ButtonsEnum.ENTER);
    }

}