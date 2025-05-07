---
sidebar_label: 'Welcome to Longsight'
sidebar_position: 1
---

# Welcome to Longsight

## Getting Started
- Longsight works through the **Longsight sidebar** and our **template sheets**.
- **Longsight sidebar**: You can install it from the [Google Workspace Marketplace](https://workspace.google.com/marketplace/search/longsight).
- **Template sheets**: Download them from our [official website](https://www.longsightsheets.com/category/Sheets/56).
<!-- ![alt text](/figs/download.jpg) -->
- Open any template sheet, then click `Extensions > Longsight > Run analysis` to launch the add-on.
![alt text](/figs/start.png)
- Enter the stock information (ticker, country, and name) into the template sheet, and click `Run`. That’s it!
![alt text](/figs/CAGR.png)

## How to View Stock Information
- By downloading the template sheets with `THIS SHEET + TICKERS` from our website, you’ll also get a list of tickers (ETFs and individual stocks) for US and JP.
![alt text](/figs/csv.png)
- You can click the `Run` button in the Longsight add-on to update the data to the latest version.
![alt text](/figs/update_csv.jpg)

## What the Cell Colors Mean
- <span style={{ border: '1px solid #D9D9D9', padding: '4px', color: 'white', backgroundColor: '#274E13' }}>Dark Green</span>: Instruction area. Please don’t change these cells. You can use dropdowns if available.
- <span style={{ border: '1px solid #D9D9D9', padding: '4px', color: 'black', backgroundColor: '#D9D9D9' }}>Gray</span>: Input area. Copy and paste stock info from the ticker sheet here.
- <span style={{ border: '1px solid #D9D9D9', padding: '4px', color: 'black', backgroundColor: '#FFE599' }}>Yellow</span> or 
  <span style={{ border: '1px solid #D9D9D9', padding: '4px', color: 'black', backgroundColor: '#B6D7A8' }}>Green</span>: Output area. Your analysis results will show up here.
- <span style={{ border: '1px solid #D9D9D9', padding: '4px', color: 'black', backgroundColor: 'white' }}>White</span>: Empty space. Feel free to use it however you like.

## What Each Sidebar Button Does
- <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '30px', padding: '4px', borderRadius: '8px', color: 'white', backgroundColor: '#274E13'}}>Run</span>: Starts the analysis for the current sheet. What it does may vary depending on the sheet.
- <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '30px', padding: '4px', borderRadius: '8px', color: 'white', backgroundColor: '#CC0000'}}>Stop</span>: If you close the popup window while it’s running, the process might still continue in the background. Click this button to fully stop it.
- <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '30px', padding: '4px', borderRadius: '8px', color: 'white', backgroundColor: '#0B5394'}}>Subscribe</span>: Opens the subscription page.
- <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '30px', padding: '4px', borderRadius: '8px', color: 'white', backgroundColor: '#F1C232'}}>README</span>: Takes you back to this guide.

## Naming Tips
- **Spreadsheet name**: You can rename the whole file however you like (e.g., Longsight → MySheets).
- 🌟**Sheet names inside the file**:
  <!-- - Korean sheets have their names inside 【 】, while English sheets use 〖 〗 (e.g., 〖CAGR〗, 〖Ratio〗, 〖Corr〗). -->
  - Default sheet names are closed within special brackets〖 〗(e.g., 〖CAGR〗, 〖Ratio〗, 〖Corr〗)
  - 🔥**Don’t change** the brackets or the names inside them (e.g., 〖CAGR〗 → CAGR ❌, 〖CAGR〗 → [CAGR] ❌, etc.).
  - You can add extra words outside the brackets (e.g.,〖CAGR〗IT,〖CAGR〗F&B, etc.).

## A Few Extra Notes
- The〖Ratio〗sheet doesn’t support ETF analysis.