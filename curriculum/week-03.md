# Week 3 — Position Sizing and Broker Mechanics

**Phase:** PHASE 1 — Compressed Foundations (Weeks 1–4)

---

## Learning objectives
- Master the position-sizing formula for any pair, any account size
- Know HFM's exact mechanics cold
- Configure MT5 correctly for your trading

## Core concepts

### The position-sizing formula

```
Position size (lots) = (Account balance × Risk %) / (Stop distance in pips × Pip value per lot)
```

**Worked example:**
- Account: $2,000
- Risk: 1% = $20
- Trade: Long EUR/USD, entry 1.0850, stop 1.0820
- Stop distance: 30 pips
- Pip value per standard lot EUR/USD: $10

Position size = $20 / (30 × $10) = $20 / $300 = **0.067 lots** (round down to 0.06)

### JPY pair gotcha

- Pip value per standard lot for JPY pairs depends on the current rate and is approximately $8-10, but the pip itself is the 2nd decimal (0.01), not the 4th.
- Use a pip value calculator (HFM provides one; so does myfxbook) until the math is second nature.

### Order types you need to know
- **Market order:** Buy/sell immediately at current price. Fast but subject to slippage.
- **Limit order:** Buy below current price, or sell above. For planned entries.
- **Stop order:** Buy above current price, or sell below. For breakout entries.
- **Stop-loss (SL):** Automatic exit order to cap your loss. **Every trade has one. Always. No exceptions.**
- **Take-profit (TP):** Automatic exit order to capture profit.

### Swap / Rollover
- Overnight fee (credit or debit) for holding a leveraged position past 5pm NY time
- Based on the interest rate differential between the two currencies
- **Wednesday night is triple swap** — to account for weekend settlement. This is the #1 "surprise cost" for beginners.

### Spreads — what to expect on HFM for EUR/USD
- Standard account: ~1.0-1.5 pips typical
- Premium/Zero account: ~0.0-0.3 pips + commission
- Widens significantly during news events and Asian session

## Practical exercises
1. Calculate position size for 5 different trade scenarios your trainer gives you. By hand. Then verify with a calculator.
2. On MT5 demo, practice placing: market order, limit order, stop order, adding SL/TP to an existing position, closing a partial position.
3. Set up your MT5 charts the way your trainer uses them (timeframes, drawing tools, colors). Save as a template.
4. Find and screenshot HFM's swap rates for EUR/USD on your account type. Calculate the cost of holding 0.1 lot long for one week, including Wednesday triple.

## Trainer check-in topics
- Her MT5 setup — screenshot and replicate
- Her specific order-entry routine
- Her rules for managing a trade once it's open

## Self-assessment questions
- Can you calculate position size in under 30 seconds for any pair, any account, any stop distance?
- Do you know the difference between a stop-loss order and a stop order (for entry)?
- Can you explain Wednesday triple swap to someone who's never heard of it?

## Common pitfalls
- Forgetting to set a stop-loss "just this once"
- Mis-calculating pip value on JPY pairs
- Not accounting for spread when calculating stop distance

## Red flags
- If you open a trade and realize 5 minutes later you didn't set a stop, close it. That's a rule violation. Log it.
