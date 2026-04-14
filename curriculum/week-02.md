# Week 2 — Leverage, Margin, and the Mathematics of Risk

**Phase:** PHASE 1 — Compressed Foundations (Weeks 1–4)

---

## Learning objectives
- Understand leverage and margin deeply — this is the single concept that separates forex from stock investing
- Internalize why 1-2% risk per trade is the professional standard
- Understand drawdown mathematics and why it punishes oversizing

## Core concepts

- **Leverage:** The ability to control a large position with a small deposit. "1:500 leverage" means $1 controls $500 of currency. HFM offers leverage up to 1:1000 on some account types. **Leverage is a loaded weapon pointed at your account.** It does not create wealth; it amplifies outcomes — including losses — by the same factor.
- **Margin:** The deposit required to open a leveraged position. If you open a 1-lot EUR/USD position (worth $108,500 at 1.0850) with 1:100 leverage, your required margin is $1,085.
- **Lot size:** The standard unit of forex trading.
  - 1 standard lot = 100,000 units of base currency
  - 1 mini lot = 10,000 units (0.1 standard)
  - 1 micro lot = 1,000 units (0.01 standard)
  **You will trade micro lots for months. This is normal.**
- **Pip value:** What one pip is worth in your account currency, per lot. For EUR/USD on a USD-denominated account:
  - 1 standard lot: $10/pip
  - 1 mini lot: $1/pip
  - 1 micro lot: $0.10/pip
- **Margin call / Stop-out:** When your account equity drops below a certain % of required margin, the broker warns you (margin call) and then force-closes your positions (stop-out). On HFM, know these levels exactly.
- **Drawdown:** The decline from a peak in account equity to a subsequent trough. If your account goes from $2,000 to $1,700, that's a 15% drawdown.

## The drawdown recovery table (memorize this)

| Drawdown | Gain Required to Recover |
|---|---|
| 10% | 11% |
| 20% | 25% |
| 30% | 43% |
| 50% | 100% |
| 75% | 300% |
| 90% | 900% |

This is why professional traders cap risk per trade at 1-2%. Drawdowns compound asymmetrically. A 50% loss requires a 100% gain to recover — which, at 2% per winner, is 50 consecutive perfect trades with no losses. Impossible.

## The 1% risk rule

With 1% risk per trade:
- 10 consecutive losses = ~10% drawdown. Recoverable.
- 20 consecutive losses = ~18% drawdown. Painful but survivable.

With 5% risk per trade:
- 10 consecutive losses = ~40% drawdown. Career-threatening.
- 20 consecutive losses = ~64% drawdown. Account effectively dead.

## Reading
- Van Tharp, *Trade Your Way to Financial Freedom* — chapters on position sizing (you can find summaries online if you don't want the full book yet)
- HFM's margin and leverage documentation for your specific account type

## Practical exercises
1. Calculate your required margin for a 0.1 lot EUR/USD position at 1:500 leverage. Do it by hand.
2. Calculate your required margin for a 0.01 lot EUR/USD position at 1:500 leverage. By hand.
3. Build a drawdown recovery calculator in a spreadsheet. Input: drawdown %. Output: gain required. Use it to understand why 1% risk matters.
4. Look up HFM's exact margin call and stop-out levels. Write them down.

## Trainer check-in topics
- Her actual risk per trade. If she says anything higher than 2%, ask her to walk you through her drawdown history.
- How she handles a losing streak.

## Self-assessment questions
- Can you explain, in under 60 seconds, why risking 5% per trade is mathematically different (not just "riskier") than risking 1%?
- Do you know what happens to your pending orders on HFM if EUR/USD gaps 100 pips on NFP Friday?

## Common pitfalls
- "But bigger size means bigger profits when I'm right!" — True, and bigger losses when you're wrong, and you will be wrong a lot. The asymmetry of drawdown math means oversizing destroys compounding even if your win rate is positive.

## Red flags
- If you catch yourself thinking "I'd rather risk more and make real money faster," re-read the drawdown table. That thought is why most beginners blow up.
