import { test, expect } from "@playwright/test";

test("the index page of the application shows the Next.js logo", async ({ page }) => {
    await page.goto("/");

    // the page should contain the words "auth-js-d1-example"
    await expect(page.locator("text=auth-js-d1-example")).toBeVisible();
});