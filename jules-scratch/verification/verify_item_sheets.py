from playwright.sync_api import sync_playwright, Page, expect

def run(playwright):
    firefox = playwright.firefox
    browser = firefox.launch(headless=True)
    page = browser.new_page()
    test_item_sheets(page)
    browser.close()

def test_item_sheets(page: Page):
    """
    This test verifies that the new item sheets are rendered correctly.
    """
    # 1. Arrange: Go to the test page.
    page.goto("file:///app/jules-scratch/verification/test.html")

    # 2. Assert: Check that the sheets are rendered correctly.
    expect(page.get_by_text("Armadura Sheet")).to_be_visible()
    expect(page.get_by_text("Especie Sheet")).to_be_visible()

    # 3. Screenshot: Capture the final result for visual verification.
    page.screenshot(path="jules-scratch/verification/verification.png")
    print("Screenshot created successfully.")

with sync_playwright() as playwright:
    run(playwright)