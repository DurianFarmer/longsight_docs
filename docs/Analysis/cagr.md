---
sidebar_label: '〖CAGR〗'
sidebar_position: 1
---

# 〖CAGR〗

## Overview
- This sheet displays historical prices and the Compound Annual Growth Rate (CAGR) of selected stocks.
- Use it to assess long-term stock performance and estimate annualized returns.

#### Why CAGR Matters More Than Total Return
- **Adjusts for time**: Allows fair comparison between investments held for different lengths of time.
- **Benchmark your performance**: CAGR can be directly compared with market indices like the S&P 500 or Nasdaq-100.
- **Compare with interest rates**: As it's annualized, CAGR makes it easy to compare your returns with loan interest rates or other financial costs.

---

## Cell Guide
- <span style={{ border: '1px solid #D9D9D9', padding: '4px', color: 'black', backgroundColor: '#D9D9D9' }}>Gray</span>: Enter the *stock identifiers* here.
- <span style={{ border: '1px solid #D9D9D9', padding: '4px', color: 'black', backgroundColor: '#FFE599' }}>Yellow</span>: Displays today's price and historical prices from past years near the same date. If today is not a trading day, the most recent available data is shown.
- <span style={{ border: '1px solid #D9D9D9', padding: '4px', color: 'black', backgroundColor: '#B6D7A8' }}>Green</span>: Shows the CAGR from each past year to the present.
- <span style={{ border: '1px solid #D9D9D9', padding: '4px', color: 'white', backgroundColor: '#274E13' }}>Dropdowns ▾</span> (`E5`–`H5`): Select the time periods you want to analyze.

---

## How to Use
- Copy *stock identifiers* from the [Stock List Sheets](/docs/stock-lists.md) and paste them into the <span style={{ border: '1px solid #D9D9D9', padding: '4px', color: 'black', backgroundColor: '#D9D9D9' }}>Gray</span> cells.
  - Copy from〖jp〗
  <p>
    <img 
      src="/figs/cagr_copy.png" 
      alt="cagr-copy" 
      style={{ maxWidth: "60%", height: "auto" }} />
  </p>
  - Paste to〖CAGR〗
  <p>
    <img 
      src="/figs/cagr_paste.png" 
      alt="cagr-paste" 
      style={{ maxWidth: "60%", height: "auto" }} />
  </p>
- In cells `E5` to `H5`, select the past years you want to analyze. Cells `I5` to `L5` will update automatically.
  <p>
    <img 
      src="/figs/cagr_dropdown.png" 
      alt="cagr-dropdown" 
      style={{ maxWidth: "50%", height: "auto" }} />
  </p>
- Click the <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '30px', padding: '4px', borderRadius: '8px', color: 'white', backgroundColor: '#274E13'}}>Run</span> button in the **Longsight Sidebar** to start the analysis.
  <p>
    <img 
      src="/figs/cagr_gif_2000.gif" 
      alt="cagr" 
      style={{ maxWidth: "100%", height: "auto" }} />
  </p>