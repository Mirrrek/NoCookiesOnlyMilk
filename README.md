# NoCookiesOnlyMilk

Remove annoying cookie popups from websites.

This extension only hides the popups, it does not reject or block cookies.

## Installation

Currently, no release is available. To use the extension, [import it unpacked in Chrome](https://knowledge.workspace.google.com/kb/load-unpacked-extensions-000005962).

## Development

1. Clone this repo
    ```
    git clone https://github.com/Mirrrek/fuck-you-tube.git
    ```
2. Install dependencies
   ```
   npm i
   ```
3. Build the project (development)
   ```
   npm run dev
   ```
   This command will start webpack under watch mode, so saving a change to any source file will rebuild the extension automatically.
   You can now add the `dist` folder as an extension to Chrome.
4. Build the project (production)
   ```
   npm run build
   ```
   The extension files will be generated in the `dist` directory.
