from playwright.sync_api import sync_playwright, Page, expect

def run(playwright):
    firefox = playwright.firefox
    browser = firefox.launch(headless=True)
    page = browser.new_page()
    test_caminho_fix(page)
    browser.close()

def test_caminho_fix(page: Page):
    """
    This test verifies that the 'Caminho' field is not duplicated in the biography tab.
    """
    # 1. Arrange: Go to the test page.
    page.goto("file:///app/jules-scratch/verification/test.html")

    # 2. Assert: Check that the biography tab does not contain the 'Caminho' field.
    # We need to click the biography tab first.
    page.get_by_role("link", name="Biografia").click()

    # Now, check that the 'Caminho' field is not present in the biography tab.
    # We can do this by checking the number of textarea elements.
    # There are 13 fields in the biografia object, so we expect 12 textareas after removing 'caminho'.
    expect(page.locator(".tab[data-tab='biografia'] textarea")).to_have_count(12)

    # 3. Screenshot: Capture the final result for visual verification.
    page.screenshot(path="jules-scratch/verification/verification.png")
    print("Screenshot created successfully.")

with sync_playwright() as playwright:
    run(playwright)