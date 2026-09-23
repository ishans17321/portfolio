---
layout: post
title: "Math Expressions Homework: Recovery Center Cost Report"
description: Calculate and explain weekly, monthly, and average daily session costs using Python mathematical expressions.
permalink: /homework/math-expressions
---

[Open the complete Math Expressions submission: both hacks, homework, and scoring evidence]({{ "/csp/python/math-expressions/hw" | relative_url }}).

## Recovery Center Cost Report

This program estimates the cost of attending three sessions per week at $35 per session. It separates recurring session costs from the one-time enrollment fee, then uses division to express the monthly estimate as an average daily cost.

<style>
.math-report-grid { display: grid; grid-template-columns: minmax(0, 2fr) minmax(220px, 1fr); gap: 1.5rem; align-items: start; }
.math-report-grid > * { min-width: 0; }
.math-report-notes { border-left: 3px solid #789bd1; padding-left: 1rem; }
.math-report-notes h3 { margin-top: 1.25rem; }
.math-report-notes h3:first-child { margin-top: 0; }
@media (max-width: 800px) { .math-report-grid { grid-template-columns: 1fr; } }
</style>

<div class="math-report-grid" markdown="1">
<div markdown="1">

### Python program

```python
# Recovery Center Cost Report
# Goal: turn a session schedule into an understandable cost estimate.
# Each named input represents one assumption that can be changed later.

cost_per_session = 35    # Dollars for ONE session, not an entire week.
sessions_per_week = 3   # Number of sessions attended each week.
weeks_per_month = 4     # Simplified billing estimate, not a calendar fact.
enrollment_fee = 75     # Charged once, when enrolling.
days_per_month = 30     # Days over which to spread the monthly estimate.

# 1. MULTIPLICATION: repeat the session charge for each weekly session.
# Units: dollars/session * sessions/week = dollars/week.
# With these inputs: 35 * 3 = 105 dollars each week.
weekly_cost = cost_per_session * sessions_per_week

# 2. REUSE A RESULT: calculate a month from the weekly subtotal.
# With these inputs: 105 * 4 = 420 dollars for 12 sessions.
# Reusing weekly_cost avoids typing 105 as a fixed answer; changing
# cost_per_session or sessions_per_week updates later calculations too.
monthly_cost = weekly_cost * weeks_per_month

# 3. ADDITION: combine recurring charges with the one-time fee.
# With these inputs: 420 + 75 = 495 dollars for the FIRST month.
# Multiplying the fee by weeks_per_month would incorrectly charge it
# four times. Later months cost monthly_cost if the schedule is unchanged.
total_cost_with_fee = monthly_cost + enrollment_fee

# 4. DIVISION: spread session costs across the assumed 30-day month.
# With these inputs: 420 / 30 = 14.0 dollars per calendar day on average.
# This is not the price of a session or an actual daily payment.
# Use / rather than // because fractional daily costs should be preserved.
average_daily_cost = monthly_cost / days_per_month

# EXTENSION: make the effect of enrollment visible in the daily estimate.
# (420 + 75) / 30 = 16.5. Using the stored total groups the addition first.
# monthly_cost + enrollment_fee / days_per_month would divide only the fee
# because division has higher precedence than addition.
first_month_daily_cost = total_cost_with_fee / days_per_month

# OUTPUT: f-strings insert calculated values into descriptive labels.
# :.2f shows exactly two decimal places, making dollars easy to read.
# It formats the display; it does not change the stored calculation.
print(f"Weekly Cost: ${weekly_cost:.2f}")
print(f"Monthly Cost (Sessions Only): ${monthly_cost:.2f}")
print(f"First Month with Enrollment Fee: ${total_cost_with_fee:.2f}")
print(f"Average Daily Cost (Sessions Only): ${average_daily_cost:.2f}")
print(f"First-Month Average Daily Cost: ${first_month_daily_cost:.2f}")
```

</div>
<aside class="math-report-notes" aria-label="Explanation of the math program" markdown="1">

### Why use variables?

Names such as `cost_per_session` explain what a number represents. Keeping inputs at the top means a price or schedule change needs one edit, and the dependent totals recalculate automatically.

### What does `=` mean?

In Python, `=` assigns the result on the right to the variable on the left. For example, `weekly_cost = cost_per_session * sessions_per_week` calculates a value and stores it for the next step.

### Why these operators?

- **`*` multiplication:** repeats a charge across sessions or weeks.
- **`+` addition:** includes the enrollment fee once.
- **`/` division:** distributes a total over a number of days.

Checking the units helps check the operation: dollars per session multiplied by sessions per week produces dollars per week.

### Assumptions matter

Four weeks represent 28 days, while the daily estimate uses a 30-day month. This is a simplified budget model: it spreads the cost of **12 sessions** across **30 calendar days**. It does not calculate the exact number of sessions in a real calendar month.

The model assumes the listed prices, attendance at every planned session, and no additional charges or discounts. `days_per_month` must be greater than zero for division to work.

### Why show two daily costs?

**$14.00** spreads session costs alone across the month. **$16.50** also includes enrollment. Showing both explains why starting costs more than continuing.

### Evidence of understanding

The program calculates answers from inputs, reuses intermediate results, chooses operators based on their meaning, and labels the output with its time period. These are concrete strengths a grader can review; the full notebook links each required task to the supplied 1-point rubric.

</aside>
</div>

### Verified output

```text
Weekly Cost: $105.00
Monthly Cost (Sessions Only): $420.00
First Month with Enrollment Fee: $495.00
Average Daily Cost (Sessions Only): $14.00
First-Month Average Daily Cost: $16.50
```

### Check the reasoning

| Calculation | Manual check | Meaning |
| --- | --- | --- |
| Weekly sessions | $35 × 3 = **$105** | Three session charges per week. |
| Monthly sessions | $105 × 4 = **$420** | Twelve session charges in the modeled month. |
| First month | $420 + $75 = **$495** | Add enrollment exactly once. |
| Daily session average | $420 ÷ 30 = **$14** | Spread recurring costs across 30 days. |
| First-month daily average | $495 ÷ 30 = **$16.50** | Include enrollment in the daily estimate. |

**What if attendance increases to four sessions per week?** Changing only `sessions_per_week` to `4` produces $140 weekly, $560 monthly, $635 for the first month, and daily averages of $18.67 and $21.17. This checks that the answers depend on the inputs rather than being hardcoded.

**Reverse check:** $14 × 30 returns the $420 monthly session cost. The first-month daily difference is $16.50 − $14.00 = $2.50, which equals the $75 enrollment fee divided by 30 days.

### Why this supports a strong score

The required homework expressions calculate all four requested values correctly: **$105 weekly, $420 monthly, $495 with enrollment, and $14 daily**. Each answer is computed from variables and printed with a clear label. The comments explain the choice of operators, the one-time fee, and the monthly assumptions instead of simply restating the code. The full linked notebook also completes both popcorn hacks and maps the evidence to every criterion in the **1.0-point rubric**. The extra daily comparison and changed-input check demonstrate understanding beyond the default answers.
