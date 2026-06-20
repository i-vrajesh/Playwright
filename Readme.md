# Playwright TypeScript Automation Project

This project uses Playwright with TypeScript for end-to-end test automation.

## Prerequisites

Before getting started, ensure the following are installed:

- Node.js (LTS version recommended)
- npm (comes with Node.js)
- Visual Studio Code (optional but recommended)

## Clone the Repository

```bash
git clone <repository-url>
cd <project-folder>
```

## Install Dependencies

Install all project dependencies:

```bash
npm install
```

## Install Playwright Browsers

Install the required browsers:

```bash
npx playwright install
```

To install browsers with OS dependencies (Linux environments):

```bash
npx playwright install --with-deps
```

## Open Project in VS Code

```bash
code .
```

## Run Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/example.spec.ts
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run tests in a specific browser:

```bash
npx playwright test --project=chromium
```

## View Test Report

After test execution:

```bash
npx playwright show-report
```

## Record New Test

Launch Playwright Codegen:

```bash
npx playwright codegen <application-url>
```

Example:

```bash
npx playwright codegen https://example.com
```

## Project Structure

```text
project-root/
│
├── tests/                 # Test files
├── pages/                 # Page Object Models
├── utils/                 # Utility functions
├── test-data/             # Test data files
├── playwright.config.ts   # Playwright configuration
├── package.json
├── tsconfig.json
└── README.md
```

## Useful Commands

| Command | Description |
|----------|------------|
| `npm install` | Install project dependencies |
| `npx playwright install` | Install Playwright browsers |
| `npx playwright test` | Run all tests |
| `npx playwright test --headed` | Run tests with browser UI |
| `npx playwright show-report` | Open Playwright report |
| `npx playwright codegen <url>` | Record test scripts |

## Troubleshooting

### Clean Install

If dependencies become corrupted:

```bash
rm -rf node_modules
rm package-lock.json
npm install
npx playwright install
```

### Verify Playwright Installation

```bash
npx playwright --version
```

## Notes

- Do not commit the `node_modules` folder.
- Ensure `.env` files containing secrets are not committed.
- Commit `package.json` and `package-lock.json` to maintain consistent dependencies.

---

Happy Testing 🚀