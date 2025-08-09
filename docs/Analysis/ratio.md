---
sidebar_label: '〖Ratio〗'
sidebar_position: 2
---

# 〖Ratio〗

## Overview
- This sheet displays key ratios such as PER, PBR, and ROE for the input stocks.
- Use it to analyze financial ratios within a sector and spot potentially undervalued stocks.

## Provided Ratios and Calculation Methods
- [**PER** (Price to Earnings Ratio)](https://en.wikipedia.org/wiki/Price%E2%80%93earnings_ratio): 
  $$
  \text{PER} = \frac{\text{Stock Price}}{\text{Earnings per Share (EPS)}}
  $$

- [**PBR** (Price to Book Ratio)](https://en.wikipedia.org/wiki/P/B_ratio):

  $$
  \text{PBR} = \frac{\text{Stock Price}}{\text{Book Value per Share (BPS)}}
  $$

- [**PSR** (Price to Sales Ratio)](https://en.wikipedia.org/wiki/Price%E2%80%93sales_ratio):

  $$
  \text{PSR} = \frac{\text{Market Capitalization}}{\text{Revenue}}
  $$

- [**P/FCF** (Price to Free Cash Flow)](https://en.wikipedia.org/wiki/Price-to-cash_flow_ratio):
  $$
  \text{P/FCF} = \frac{\text{Market Capitalization}}{\text{Free Cash Flow}}
  $$

- [**ROE (%)** (Return on Equity)](https://en.wikipedia.org/wiki/Return_on_equity):

  $$
  \text{ROE} = \frac{\text{Net Income}}{\text{Shareholders' Equity}} \times 100
  $$

- [**ROA (%)** (Return on Assets)](https://en.wikipedia.org/wiki/Return_on_assets):

  $$
  \text{ROA} = \frac{\text{Net Income}}{\text{Total Assets}} \times 100
  $$

- [**D/E (%)** (Debt to Equity Ratio)](https://en.wikipedia.org/wiki/Debt-to-equity_ratio):

  $$
  \text{D/E} = \frac{\text{Total Liabilities}}{\text{Shareholders' Equity}} \times 100
  $$

## Notes
- The 〖Ratio〗 sheet does not support ETF analysis.
- Ratios related to income (earnings/returns), revenue (sales), and free cash flow are calculated on a TTM (trailing twelve months) basis.
- Ratios related to equity (book value), assets, and debt are calculated on an MRQ (most recent quarter) basis — except when compared with income, in which case they are calculated on a TTM basis.
- In summary: **PER**, **PSR**, **P/FCF**, **ROE**, and **ROA** are based on **TTM**, while **PBR** and **D/E** are based on **MRQ**.


## Cell Guide
- <span style={{ border: '1px solid #D9D9D9', padding: '4px', color: 'black', backgroundColor: '#D9D9D9' }}>Gray</span>: Enter the *stock identifiers* here.
- <span style={{ border: '1px solid #D9D9D9', padding: '4px', color: 'white', backgroundColor: '#274E13' }}>Dropdowns ▾</span> (`E5`–`H5`): Select the ratios you want to analyze.
- <span style={{ border: '1px solid #D9D9D9', padding: '4px', color: 'black', backgroundColor: '#FFE599' }}>Yellow</span>: Displays today's price. If today is not a trading day, the most recent available data is shown.
- <span style={{ border: '1px solid #D9D9D9', padding: '4px', color: 'black', backgroundColor: '#B6D7A8' }}>Green</span>: Shows the selected ratios for the input stocks.

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
      src="/figs/ratio_paste.png" 
      alt="ratio-paste" 
      style={{ maxWidth: "60%", height: "auto" }} />
  </p>
- In cells `E5` to `H5`, select the ratio you want to analyze.
  <p>
    <img 
      src="/figs/ratio_dropdown.png" 
      alt="cagr-dropdown" 
      style={{ maxWidth: "50%", height: "auto" }} />
  </p>
- Click the <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '30px', padding: '4px', borderRadius: '8px', color: 'white', backgroundColor: '#274E13'}}>Run</span> button in the **Longsight Sidebar** to start the analysis.
  <p>
    <img 
      src="/figs/ratio_gif_2000.gif" 
      alt="cagr" 
      style={{ maxWidth: "100%", height: "auto" }} />
  </p>
