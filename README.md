# NoCookiesOnlyMilk

Remove annoying cookie popups from websites.

This extension only hides the popups, it does not reject or block cookies.

## Installation

1. Download the [release zip file](https://github.com/Mirrrek/NoCookiesOnlyMilk/releases)
2. Extract it
3. Open Chrome and go to `chrome://extensions`
4. In the top right corner, enable `Developer mode`
5. In the top left corner, click on `Load unpacked` and select the extracted folder

## Development

1. Clone this repo
    ```
    git clone https://github.com/Mirrrek/NoCookiesOnlyMilk.git
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
