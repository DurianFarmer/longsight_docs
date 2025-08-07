---
sidebar_label: '〖Corr〗'
sidebar_position: 3
---

# 〖Corr〗

## Overview
- This sheet displays the correlation between two stocks over a selected time period.
- You’ll get key metrics such as their **combined average CAGR**, **correlation coefficient**, and two visualizations:
  <p>
    <img 
      src="/figs/corr_figs.png" 
      alt="corr-figs" 
      style={{ maxWidth: "100%", height: "auto" }} />
  </p>
  - **Left Figure**: Shows how their prices moved over the selected period.
  - **Right Figure**: Shows the correlation between the two stocks.
- Use this sheet to explore how closely two stocks move together—helpful for optimizing **portfolio diversification** and **risk management**.

  
## Cell Guide
- <span style={{ border: '1px solid #D9D9D9', padding: '4px', color: 'black', backgroundColor: '#D9D9D9' }}>Gray</span>: Enter the *stock identifiers* here.
- <span style={{ border: '1px solid #D9D9D9', padding: '4px', color: '#FFD966', backgroundColor: '#274E13',  fontFamily: '"Gowun Batang", serif'}}>Period</span> (`E6`): Use the dropdown to select the time period for correlation analysis.
- <span style={{ border: '1px solid #D9D9D9', padding: '4px', color: '#FFD966', backgroundColor: '#274E13', fontFamily: '"Gowun Batang", serif'}}>Fig. Type</span> (`E7`): Choose how the Left Figure should be displayed:
  - **Rescale (recommended)**: Plots both stock prices **rescaled so that their average during the selected period equals 100**.  This makes comparisons easier, especially when the stocks have large price differences or are in different currencies.
  - **Original**: Plots the actual price movements over the selected period. This may be harder to compare when prices or currencies differ significantly.
- <span style={{ border: '1px solid #D9D9D9', padding: '4px', color: 'black', backgroundColor: '#B6D7A8' }}>Green</span>: Display the analysis results:
  
  - <span style={{ border: '1px solid #D9D9D9', padding: '4px', color: '#FFD966', backgroundColor: '#274E13', fontFamily: '"Gowun Batang", serif'}}>Avg. CAGR</span>(`G6`): The average of the two stocks' annualized returns over the selected period.
  - <span style={{ border: '1px solid #D9D9D9', padding: '4px', color: '#FFD966', backgroundColor: '#274E13', fontFamily: '"Gowun Batang", serif'}}>Correlation</span>(`G7`): The correlation coefficient between the two stocks during that period.

## How to Use
- Copy *stock identifiers* from the [Stock List Sheets](/docs/stock-lists.md) and paste them into the <span style={{ border: '1px solid #D9D9D9', padding: '4px', color: 'black', backgroundColor: '#D9D9D9' }}>Gray</span> cells.
  - Copy from〖us〗
  <p>
    <img 
      src="/figs/corr_apple.png" 
      alt="corr" 
      style={{ maxWidth: "50%", height: "auto" }} />
  </p>
  <p>
    <img 
      src="/figs/corr_mcdonald.png" 
      alt="corr" 
      style={{ maxWidth: "50%", height: "auto" }} />
  </p>
  - Paste to〖Corr〗
  <p>
    <img 
      src="/figs/corr_paste.png" 
      alt="corr" 
      style={{ maxWidth: "50%", height: "auto" }} />
  </p>
  *Note: You must enter two stocks — leaving one blank will result in an error.*
- Use the dropdowns to select <span style={{ border: '1px solid #D9D9D9', padding: '4px', color: '#FFD966', backgroundColor: '#274E13',  fontFamily: '"Gowun Batang", serif'}}>Period</span> and <span style={{ border: '1px solid #D9D9D9', padding: '4px', color: '#FFD966', backgroundColor: '#274E13',  fontFamily: '"Gowun Batang", serif'}}>Fig. Type</span>.
  <p>
    <div style={{ display: 'inline-block', verticalAlign: 'top', marginRight: '0%' }}>
    <img 
      src="/figs/corr_period.png" 
      alt="corr" 
      style={{ maxWidth: "70%", height: "auto" }} />
    </div>

    <div style={{ display: 'inline-block', verticalAlign: 'top', marginRight: '0%' }}>
      <img 
      src="/figs/corr_figtype.png" 
      alt="corr" 
      style={{ maxWidth: "70%", height: "auto" }} />
    </div>
  </p>
- Click the <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '30px', padding: '4px', borderRadius: '8px', color: 'white', backgroundColor: '#274E13'}}>Run</span> button in the **Longsight Sidebar** to start the analysis.
  <p>
    <img 
      src="/figs/corr_gif_2000.gif" 
      alt="corr" 
      style={{ maxWidth: "100%", height: "auto" }} />
  </p>
  
