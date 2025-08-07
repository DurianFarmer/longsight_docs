---
sidebar_label: 'Welcome to Longsight'
sidebar_position: 1
---

# Welcome to Longsight

## Getting Started
- If you haven’t signed up yet, [join us here](https://longsightsheets.com) using your Google account.
  - Your 7-day free trial starts right away🎉
  - Make sure you log in with the same account you’re using for Google Sheets.
  <p>
    <img 
      src="/figs/sign-in.png" 
      alt="sign-in" 
      style={{ maxWidth: "60%", height: "auto" }} />
  </p>

- Install the Longsight Add-on from the [Google Workspace Marketplace](https://workspace.google.com/marketplace/app/longsight/400612990894?flow_type=2).
  <p>
    <img 
      src="/figs/install-longsight-mini-2.png" 
      alt="install-longsight" 
      style={{ maxWidth: "60%", height: "auto" }} />
  </p>

- Now you're ready for using **Longsight** 🚀

---

## Creating Templates
- Open any Google Spreadsheet, either empty or not, and create template sheets with `Extensions > Longsight > Create Templates`.
- You can generate all templates at once or select individual ones of your choice.
- For this tutorial, let's create `All Templates`. For more about creating templates, [check here](/docs/creating-templates.md).
  <p>
    <img 
      src="/figs/create-templates.png" 
      alt="create-templates" 
      style={{ maxWidth: "100%", height: "auto" }} />
  </p>
- By selecting `All Templates`, you will get the following **Analysis Sheets** and **Stock List Sheets**.
- **Analysis Sheets:**
  - [〖CAGR〗](/docs/Analysis/cagr.md): Assess long-term stock performance to estimate annualized returns. 
  - [〖Ratio〗](/docs/Analysis/ratio.md): Analyze financial ratios within a sector to identify potential undervalued stocks.
  - [〖Corr〗](/docs/Analysis/corr.md): Examine stock correlations to optimize portfolio diversification and risk management.
- **[Stock List Sheets](/docs/stock-lists.md)**:
  - 〖us〗: *Stock identifiers* for US equities, including Nasdaq, NYSE, and AMEX listings.
  - 〖usETF〗: *Stock identifiers* for US-listed ETFs from Nasdaq, NYSE, and AMEX.
  - 〖jp〗: *Stock identifiers* for Japanese equities listed on the Tokyo Stock Exchange (TSE).
  - 〖jpETF〗: *Stock identifiers* for Japanese ETFs listed on the TSE.

---

## Your First Analysis
- **Longsight** provides analysis for US and JP equities and ETFs.
- Let's try running an analysis using the〖CAGR〗sheet.
- Click `Extensions > Longsight > Run analysis` to open the **Longsight Sidebar**.
  <p>
    <img 
      src="/figs/run_analysis.png" 
      alt="cagr" 
      style={{ maxWidth: "100%", height: "auto" }} />
  </p>
- Sample *stock identifiers* are already filled in the〖CAGR〗sheet, so you can simply click the <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '30px', padding: '4px', borderRadius: '8px', color: 'white', backgroundColor: '#274E13'}}>Run</span> button from the **Longsight Sidebar**. That’s it!
  <p>
    <img 
      src="/figs/cagr_gif_2000.gif" 
      alt="cagr" 
      style={{ maxWidth: "100%", height: "auto" }} />
  </p>
- All Analysis Sheets work in the same way. For more details on each one, check out:
  - [〖CAGR〗](/docs/Analysis/cagr.md)
  - [〖Ratio〗](/docs/Analysis/ratio.md)
  - [〖Corr〗](/docs/Analysis/corr.md)

#### Stock Identifiers
- The template sheets use *stock identifiers* in the format `(Ticker, Region, Name)`. 
- You'll see them listed in columns `A`, `B`, and `C` of each template.
- To analyze different equities or ETFs, copy their *stock indentifiers* from the **Stock List Sheets**, paste them into the <span style={{ border: '1px solid #D9D9D9', padding: '4px', color: 'black', backgroundColor: '#D9D9D9' }}>Gray</span> cells in an **Analysis Sheet**, and click <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '30px', padding: '4px', borderRadius: '8px', color: 'white', backgroundColor: '#274E13'}}>Run</span> in the **Longsight Sidebar**.
- For how to fill or update the **Stock List Sheets**, [check here](/docs/stock-lists.md).
---

## Template Colors & Sidebar Buttons

### What the Cell Colors Mean
- <span style={{ border: '1px solid #D9D9D9', padding: '4px', color: 'white', backgroundColor: '#274E13' }}>Dark Green</span>: Instruction area. Don’t change these cells. You can use dropdowns if available.
- <span style={{ border: '1px solid #D9D9D9', padding: '4px', color: 'black', backgroundColor: '#D9D9D9' }}>Gray</span>: Input area. Copy and paste *stock identifiers* from the Stock List Sheets to here.
- <span style={{ border: '1px solid #D9D9D9', padding: '4px', color: 'black', backgroundColor: '#FFE599' }}>Yellow</span> or 
  <span style={{ border: '1px solid #D9D9D9', padding: '4px', color: 'black', backgroundColor: '#B6D7A8' }}>Green</span>: Output area. Your analysis results will show up here.
- <span style={{ border: '1px solid #D9D9D9', padding: '4px', color: 'black', backgroundColor: 'white' }}>White</span>: Empty space. Feel free to use it however you like.

### What Each Sidebar Button Does
- <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '30px', padding: '4px', borderRadius: '8px', color: 'white', backgroundColor: '#274E13'}}>Run</span>: Starts the analysis for the current sheet. The specific action varies depending on the sheet. For Stock List Sheets, the button will update the stock identifiers.
- <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '30px', padding: '4px', borderRadius: '8px', color: 'white', backgroundColor: '#CC0000'}}>Stop</span>: If you close the popup window while it’s running, the process might still continue in the background. Click this button to fully stop it.
- <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '30px', padding: '4px', borderRadius: '8px', color: 'white', backgroundColor: '#0B5394'}}>Subscribe</span>: Opens the subscription page.
- <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '30px', padding: '4px', borderRadius: '8px', color: 'white', backgroundColor: '#F1C232'}}>README</span>: Brings you to this guide.

---

## Naming Tips
### Spreadsheet Name
- You can rename the whole file however you like (e.g., Untitled spreadsheet, Longsight, Whatever, etc.).
  <p>
    <img 
      src="/figs/spreadsheet-name.png" 
      alt="spreadsheet-name" 
      style={{ maxWidth: "80%", height: "auto" }} />
  </p>

### Sheet Names
<!-- - Korean sheets have their names inside 【 】, while English sheets use 〖 〗 (e.g., 〖CAGR〗, 〖Ratio〗, 〖Corr〗). -->
- Template sheets have a default name closed within special brackets〖 〗(e.g., 〖CAGR〗, 〖Ratio〗, 〖Corr〗)
  <p>
    <img 
      src="/figs/sheet-name.png" 
      alt="sheet-name" 
      style={{ maxWidth: "80%", height: "auto" }} />
  </p>
- 🔥**Don’t change** the brackets or the default names inside them (e.g., 〖CAGR〗 → CAGR ❌, 〖CAGR〗 → 〖CAGR2〗 ❌, etc.).
- You can add extra words outside the brackets (e.g.,〖CAGR〗2,〖CAGR〗IT,〖CAGR〗F&B etc.).