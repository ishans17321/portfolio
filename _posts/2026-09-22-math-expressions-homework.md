---
layout: post
title: "Math Expressions Homework: Recovery Center Cost Report"
description: Calculate weekly, monthly, and average daily session costs using Python mathematical expressions.
permalink: /homework/math-expressions
---

## Recovery Center Cost Report

```python
# Recovery Center Cost Report
# This program uses variables and mathematical expressions to calculate
# the weekly, monthly, and average daily cost of attending sessions.

cost_per_session = 35
sessions_per_week = 3
weeks_per_month = 4
enrollment_fee = 75

# 1. Calculate the weekly cost.
# Each session costs $35 and there are 3 sessions every week.
# Multiplication lets the program calculate the cost automatically.
weekly_cost = cost_per_session * sessions_per_week

# 2. Calculate the monthly cost.
# We multiply the weekly cost by the number of weeks in a month.
# This uses the result from the previous calculation instead of
# manually entering 105, making the program easier to modify.
monthly_cost = weekly_cost * weeks_per_month

# 3. Calculate the total cost with the enrollment fee.
# The enrollment fee is a one-time cost, so it is added to the
# regular monthly cost rather than multiplied by the number of weeks.
total_cost_with_fee = monthly_cost + enrollment_fee

# 4. Calculate the average daily cost.
# We divide the monthly cost by 30 days to estimate the average
# amount spent per day during a 30-day month.
average_daily_cost = monthly_cost / 30

# Print every result with a clear label so the user can understand
# what each calculated value represents.
print("Weekly Cost: $", weekly_cost)
print("Monthly Cost: $", monthly_cost)
print("Total Cost with Enrollment Fee: $", total_cost_with_fee)
print("Average Daily Cost: $", average_daily_cost)
```
