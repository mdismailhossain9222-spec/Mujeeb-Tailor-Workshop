import { test, expect } from "@playwright/test";

const VIEWPORTS = [
  { name: "iPhone 13", width: 390, height: 844, deviceScaleFactor: 3 },
  { name: "Pixel 5", width: 393, height: 851, deviceScaleFactor: 3 },
];

test.describe("Mobile viewport tests", () => {
  for (const vp of VIEWPORTS) {
    test.describe(`(${vp.name} ${vp.width}x${vp.height})`, () => {
      test.beforeEach(async ({ page }) => {
        await page.setViewportSize({ width: vp.width, height: vp.height });
        await page.goto("/", { waitUntil: "networkidle" });
      });

      test("has zero horizontal scrolling", async ({ page }) => {
        const overflow = await page.evaluate(() => ({
          bodyScrollWidth: document.body.scrollWidth,
          docScrollWidth: document.documentElement.scrollWidth,
          windowWidth: window.innerWidth,
        }));
        // Allow a 1px rounding tolerance from subpixel layout.
        expect(overflow.bodyScrollWidth).toBeLessThanOrEqual(overflow.windowWidth + 1);
        expect(overflow.docScrollWidth).toBeLessThanOrEqual(overflow.windowWidth + 1);

        // Scrolling horizontally should not reveal any hidden content.
        const maxHScroll = await page.evaluate(() => document.documentElement.scrollLeft);
        expect(maxHScroll).toBe(0);
      });

      test("mobile navbar drawer opens and closes", async ({ page }) => {
        const menuBtn = page.getByRole("button", { name: /open menu/i });
        await expect(menuBtn).toBeVisible();

        // Open
        await menuBtn.click();
        const closeBtn = page.getByRole("button", { name: /close menu/i });
        await expect(closeBtn).toBeVisible();

        // Mobile nav panel should be visible
        const mobileNav = page.getByRole("navigation", { name: /mobile navigation/i });
        await expect(mobileNav).toBeVisible();

        // Click a nav link to close the drawer
        await mobileNav.getByRole("link", { name: "Heritage" }).click();
        await expect(page.getByRole("button", { name: /open menu/i })).toBeVisible();
        await expect(page.getByRole("navigation", { name: /mobile navigation/i })).not.toBeVisible();
      });

      test("product lightbox opens and closes on mobile", async ({ page }) => {
        await page.goto("/#products", { waitUntil: "networkidle" });
        await page.locator("#products").scrollIntoViewIfNeeded();

        // Open the first product card
        const firstCard = page.locator(
          'button[aria-label^="View details for"]'
        ).first();
        await expect(firstCard).toBeVisible({ timeout: 8000 });
        await firstCard.click();

        // Lightbox dialog should appear
        const dialog = page.getByRole("dialog");
        await expect(dialog).toBeVisible({ timeout: 8000 });

        // Close via the close button
        await page.getByRole("button", { name: /close details/i }).click();
        await expect(dialog).not.toBeVisible({ timeout: 8000 });
      });
    });
  }
});