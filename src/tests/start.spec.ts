import { test, expect } from "@playwright/test";
import { testUser } from "../resource/user.testdata";

test("login to application", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await page.goto("http://localhost:3000/signin");

  await page.click('input[name="username"]');

  await page.fill('input[name="username"]', testUser.userName);

  await page.click('input[name="password"]');

  await page.fill('input[name="password"]', testUser.password);
  
});
