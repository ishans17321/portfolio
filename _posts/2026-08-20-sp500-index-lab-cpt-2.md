---
layout: post
codemirror: true
title: "S&P 500 Index Lab: CPT 2.0"
description: Learn AP CSP Create Performance Task concepts through an interactive S&P 500-style index rebalance lab.
permalink: /sp500-index-lab
search_exclude: false
---

<!--
THESIS: Turn index weighting into a hands-on ranking problem instead of a generic finance dashboard.
OWN-WORLD: A dark exchange board, restrained market green, amber rank cues, and compact watchlist rows.
STORY: The student reads illustrative company data, tests the algorithm, then completes a mini rebalance.
FIRST VIEWPORT: Existing lesson heading and code-runner format remain unchanged; the prototype opens as a two-column watchlist and index board.
FORM: Read/Operate extension of the established lesson structure; interaction is the memorable proof.
-->

# S&P 500 Index Lab: CPT 2.0

**Team:** Adhvay Iyer, Rohan Chandra, Ishan Shrivastava, Ishan Jha, Ishan Khandelwal, and Vayun Shekhar

This notebook uses one theme throughout: rebalancing a miniature S&P 500-style index. Rank eight fictional companies by illustrative market capitalization. A correct company enters the index board; an incorrect company returns to the watchlist. Every example below connects that idea to a CPT requirement.

> **Classroom data only:** Every company name and market-cap value on this page is fictional and does not represent live market information or investment advice.

# Code Runner Concepts

Each runner starts in College Board pseudocode. Use the language dropdown to switch the entire example between Pseudocode, Python, and Java. Each language keeps its own edited draft while you switch.

---

## Output

**CPT Requirement:** Your program must produce output visible to the user. College Board pseudocode uses `DISPLAY()` to show results. In this index lab, output identifies the next company and its illustrative market capitalization.

{% capture sp_output_challenge %}
Display the current candidate company and its illustrative market capitalization.
{% endcapture %}

{% capture sp_output_code %}
currentCompany ← "APX"
marketCap ← 420

DISPLAY("Current company: " + currentCompany)
DISPLAY("Illustrative market cap: $" + marketCap + "B")
{% endcapture %}

{% capture sp_output_python %}
current_company = "APX"
market_cap = 420

print("Current company:", current_company)
print("Illustrative market cap: $" + str(market_cap) + "B")
{% endcapture %}

{% capture sp_output_java %}
public class Main {
    public static void main(String[] args) {
        String currentCompany = "APX";
        int marketCap = 420;

        System.out.println("Current company: " + currentCompany);
        System.out.println("Illustrative market cap: $" + marketCap + "B");
    }
}
{% endcapture %}

{% include runners/code.html
  runner_id="sp500-output"
  language="pseudocode"
  variants_key="sp_output"
  python_code=sp_output_python
  java_code=sp_output_java
  local_python=true
  challenge=sp_output_challenge
  code=sp_output_code
  height="230px"
%}

**Expected output**

```text
Current company: APX
Illustrative market cap: $420B
```

---

## Input

**CPT Requirement:** Your program must get input from the user. College Board pseudocode uses `INPUT()` to collect data. Here, the analyst supplies a ticker and the rank where it should enter the mini-index.

{% capture sp_input_challenge %}
Ask the analyst to choose a ticker and index rank, then display both choices.
{% endcapture %}

{% capture sp_input_code %}
selectedTicker ← INPUT("Choose a ticker:")
selectedRank ← INPUT("Choose its index rank:")

DISPLAY("Selected ticker: " + selectedTicker)
DISPLAY("Selected rank: " + selectedRank)
{% endcapture %}

{% capture sp_input_python %}
# These sample values represent the analyst's input.
selected_ticker = "APX"
selected_rank = 1

print("Selected ticker:", selected_ticker)
print("Selected rank:", selected_rank)
{% endcapture %}

{% capture sp_input_java %}
public class Main {
    public static void main(String[] args) {
        // These sample values represent the analyst's input.
        String selectedTicker = "APX";
        int selectedRank = 1;

        System.out.println("Selected ticker: " + selectedTicker);
        System.out.println("Selected rank: " + selectedRank);
    }
}
{% endcapture %}

{% include runners/code.html
  runner_id="sp500-input"
  language="pseudocode"
  variants_key="sp_input"
  python_code=sp_input_python
  java_code=sp_input_java
  local_python=true
  challenge=sp_input_challenge
  code=sp_input_code
  height="240px"
%}

**Example output (if the user chose "APX" and rank `1`)**

```text
Selected ticker: APX
Selected rank: 1
```

---

## List

**CPT Requirement:** Your program must use a list to manage multiple related values. The ordered `companies` list stores every ticker without requiring a separate variable for each one. College Board pseudocode lists begin at index 1.

{% capture sp_list_challenge %}
Store the candidate tickers in market-cap order and display each one with a loop.
{% endcapture %}

{% capture sp_list_code %}
companies ← ["APX", "NVA", "UFN", "CRST", "FRGE", "ORBT", "HBR", "SOLR"]

DISPLAY("Companies in the mini-index: " + LENGTH(companies))

FOR EACH company IN companies
{
  DISPLAY(company)
}
{% endcapture %}

{% capture sp_list_python %}
companies = ["APX", "NVA", "UFN", "CRST", "FRGE", "ORBT", "HBR", "SOLR"]

print("Companies in the mini-index:", len(companies))
for company in companies:
    print(company)
{% endcapture %}

{% capture sp_list_java %}
public class Main {
    public static void main(String[] args) {
        String[] companies = {"APX", "NVA", "UFN", "CRST", "FRGE", "ORBT", "HBR", "SOLR"};

        System.out.println("Companies in the mini-index: " + companies.length);
        for (String company : companies) {
            System.out.println(company);
        }
    }
}
{% endcapture %}

{% include runners/code.html
  runner_id="sp500-list"
  language="pseudocode"
  variants_key="sp_list"
  python_code=sp_list_python
  java_code=sp_list_java
  local_python=true
  challenge=sp_list_challenge
  code=sp_list_code
  height="310px"
%}

**Expected output**

```text
Companies in the mini-index: 8
APX
NVA
UFN
CRST
FRGE
ORBT
HBR
SOLR
```

---

## Procedure

**CPT Requirement:** You must create at least one student-developed procedure with parameters. The procedure must be called and contribute to the program. This procedure accepts a ticker and a rank, then returns whether they match the expected first holding.

{% capture sp_procedure_challenge %}
Create and call a procedure that checks whether APX was assigned to rank 1.
{% endcapture %}

{% capture sp_procedure_code %}
PROCEDURE isCorrectRank(ticker, rank)
{
  RETURN(ticker = "APX" AND rank = 1)
}

correctPlacement ← isCorrectRank("APX", 1)
DISPLAY("Correct rank: " + correctPlacement)
{% endcapture %}

{% capture sp_procedure_python %}
def is_correct_rank(ticker, rank):
    return ticker == "APX" and rank == 1

correct_placement = is_correct_rank("APX", 1)
print("Correct rank:", correct_placement)
{% endcapture %}

{% capture sp_procedure_java %}
public class Main {
    static boolean isCorrectRank(String ticker, int rank) {
        return ticker.equals("APX") && rank == 1;
    }

    public static void main(String[] args) {
        boolean correctPlacement = isCorrectRank("APX", 1);
        System.out.println("Correct rank: " + correctPlacement);
    }
}
{% endcapture %}

{% include runners/code.html
  runner_id="sp500-procedure"
  language="pseudocode"
  variants_key="sp_procedure"
  python_code=sp_procedure_python
  java_code=sp_procedure_java
  local_python=true
  challenge=sp_procedure_challenge
  code=sp_procedure_code
  height="390px"
%}

**Expected output**

```text
Correct rank: true
```

---

## Sequence

**AP CSP Concept:** Sequencing means statements execute in order. An index rebalance also follows a sequence: load candidate data, sort by market cap, calculate weights, and publish the new order.

{% capture sp_sequence_challenge %}
Display four index-rebalance steps in the order they occur.
{% endcapture %}

{% capture sp_sequence_code %}
step ← 1
DISPLAY("Step " + step + ": Load candidate data")

step ← step + 1
DISPLAY("Step " + step + ": Sort by market cap")

step ← step + 1
DISPLAY("Step " + step + ": Calculate index weights")

step ← step + 1
DISPLAY("Step " + step + ": Publish the rebalance")
{% endcapture %}

{% capture sp_sequence_python %}
steps = ["Load candidate data", "Sort by market cap", "Calculate index weights", "Publish the rebalance"]

for step, action in enumerate(steps, start=1):
    print("Step " + str(step) + ": " + action)
{% endcapture %}

{% capture sp_sequence_java %}
public class Main {
    public static void main(String[] args) {
        String[] steps = {"Load candidate data", "Sort by market cap", "Calculate index weights", "Publish the rebalance"};

        for (int index = 0; index < steps.length; index++) {
            System.out.println("Step " + (index + 1) + ": " + steps[index]);
        }
    }
}
{% endcapture %}

{% include runners/code.html
  runner_id="sp500-sequence"
  language="pseudocode"
  variants_key="sp_sequence"
  python_code=sp_sequence_python
  java_code=sp_sequence_java
  local_python=true
  challenge=sp_sequence_challenge
  code=sp_sequence_code
  height="340px"
%}

**Expected output**

```text
Step 1: Load candidate data
Step 2: Sort by market cap
Step 3: Calculate index weights
Step 4: Publish the rebalance
```

---

## Selection

**CPT Requirement:** Your algorithm must include selection with `IF` or `IF/ELSE`. Selection lets the program accept a correctly ranked company or return an incorrect choice to the watchlist.

{% capture sp_selection_challenge %}
Check a selected ticker. If it is the expected company, add it to the index; otherwise return it to the watchlist.
{% endcapture %}

{% capture sp_selection_code %}
expectedTicker ← "APX"
selectedTicker ← INPUT("Choose the largest company:")

IF (selectedTicker = expectedTicker)
{
  DISPLAY("Correct! " + selectedTicker + " entered the index.")
}
ELSE
{
  DISPLAY("Incorrect. " + selectedTicker + " returned to the watchlist.")
  DISPLAY("Rank " + expectedTicker + " first.")
}
{% endcapture %}

{% capture sp_selection_python %}
expected_ticker = "APX"
selected_ticker = "APX"

if selected_ticker == expected_ticker:
    print("Correct! " + selected_ticker + " entered the index.")
else:
    print("Incorrect. " + selected_ticker + " returned to the watchlist.")
    print("Rank " + expected_ticker + " first.")
{% endcapture %}

{% capture sp_selection_java %}
public class Main {
    public static void main(String[] args) {
        String expectedTicker = "APX";
        String selectedTicker = "APX";

        if (selectedTicker.equals(expectedTicker)) {
            System.out.println("Correct! " + selectedTicker + " entered the index.");
        } else {
            System.out.println("Incorrect. " + selectedTicker + " returned to the watchlist.");
            System.out.println("Rank " + expectedTicker + " first.");
        }
    }
}
{% endcapture %}

{% include runners/code.html
  runner_id="sp500-selection"
  language="pseudocode"
  variants_key="sp_selection"
  python_code=sp_selection_python
  java_code=sp_selection_java
  local_python=true
  challenge=sp_selection_challenge
  code=sp_selection_code
  height="370px"
%}

**Example output (if the user selected "APX")**

```text
Correct! APX entered the index.
```

---

## Iteration

**CPT Requirement:** Your algorithm must include iteration using a loop. Iteration lets one block of code process every candidate company instead of repeating similar statements eight times.

{% capture sp_iteration_challenge %}
Loop through the ordered companies list and display one index rank for each ticker.
{% endcapture %}

{% capture sp_iteration_code %}
companies ← ["APX", "NVA", "UFN", "CRST", "FRGE", "ORBT", "HBR", "SOLR"]
rank ← 1

FOR EACH company IN companies
{
  DISPLAY("Rank " + rank + ": " + company)
  rank ← rank + 1
}
{% endcapture %}

{% capture sp_iteration_python %}
companies = ["APX", "NVA", "UFN", "CRST", "FRGE", "ORBT", "HBR", "SOLR"]

for rank, company in enumerate(companies, start=1):
    print("Rank " + str(rank) + ": " + company)
{% endcapture %}

{% capture sp_iteration_java %}
public class Main {
    public static void main(String[] args) {
        String[] companies = {"APX", "NVA", "UFN", "CRST", "FRGE", "ORBT", "HBR", "SOLR"};

        for (int index = 0; index < companies.length; index++) {
            System.out.println("Rank " + (index + 1) + ": " + companies[index]);
        }
    }
}
{% endcapture %}

{% include runners/code.html
  runner_id="sp500-iteration"
  language="pseudocode"
  variants_key="sp_iteration"
  python_code=sp_iteration_python
  java_code=sp_iteration_java
  local_python=true
  challenge=sp_iteration_challenge
  code=sp_iteration_code
  height="330px"
%}

**Expected output**

```text
Rank 1: APX
Rank 2: NVA
Rank 3: UFN
Rank 4: CRST
Rank 5: FRGE
Rank 6: ORBT
Rank 7: HBR
Rank 8: SOLR
```

---

## Complete Algorithm

**CPT Requirement:** Your main algorithm must integrate sequencing, selection, and iteration to solve a meaningful problem. This procedure processes simulated analyst choices in order and returns the number of successful rankings.

{% capture sp_algorithm_challenge %}
Run a complete index-rebalance algorithm that combines a list, procedure, sequence, selection, iteration, and a return value.
{% endcapture %}

{% capture sp_algorithm_code %}
PROCEDURE rebalanceIndex(companies, selectedCompanies)
{
  rankedCount ← 0
  rank ← 1

  FOR EACH selectedCompany IN selectedCompanies
  {
    expectedCompany ← companies[rank]

    IF (selectedCompany = expectedCompany)
    {
      DISPLAY(selectedCompany + " ranked correctly.")
      rankedCount ← rankedCount + 1
      rank ← rank + 1
    }
    ELSE
    {
      DISPLAY(selectedCompany + " returned. Next company is " + expectedCompany + ".")
    }
  }

  RETURN(rankedCount)
}

companies ← ["APX", "NVA", "UFN", "CRST"]
attempts ← ["HBR", "APX", "NVA", "UFN", "CRST"]
ranked ← rebalanceIndex(companies, attempts)
DISPLAY("Ranked correctly: " + ranked + " of " + LENGTH(companies))
{% endcapture %}

{% capture sp_algorithm_python %}
def rebalance_index(companies, selected_companies):
    ranked_count = 0
    rank = 0

    for selected_company in selected_companies:
        expected_company = companies[rank]
        if selected_company == expected_company:
            print(selected_company + " ranked correctly.")
            ranked_count += 1
            rank += 1
        else:
            print(selected_company + " returned. Next company is " + expected_company + ".")

    return ranked_count

companies = ["APX", "NVA", "UFN", "CRST"]
attempts = ["HBR", "APX", "NVA", "UFN", "CRST"]
ranked = rebalance_index(companies, attempts)
print("Ranked correctly:", ranked, "of", len(companies))
{% endcapture %}

{% capture sp_algorithm_java %}
public class Main {
    static int rebalanceIndex(String[] companies, String[] selectedCompanies) {
        int rankedCount = 0;
        int rank = 0;

        for (String selectedCompany : selectedCompanies) {
            String expectedCompany = companies[rank];
            if (selectedCompany.equals(expectedCompany)) {
                System.out.println(selectedCompany + " ranked correctly.");
                rankedCount++;
                rank++;
            } else {
                System.out.println(selectedCompany + " returned. Next company is " + expectedCompany + ".");
            }
        }
        return rankedCount;
    }

    public static void main(String[] args) {
        String[] companies = {"APX", "NVA", "UFN", "CRST"};
        String[] attempts = {"HBR", "APX", "NVA", "UFN", "CRST"};
        int ranked = rebalanceIndex(companies, attempts);
        System.out.println("Ranked correctly: " + ranked + " of " + companies.length);
    }
}
{% endcapture %}

{% include runners/code.html
  runner_id="sp500-algorithm"
  language="pseudocode"
  variants_key="sp_algorithm"
  python_code=sp_algorithm_python
  java_code=sp_algorithm_java
  local_python=true
  challenge=sp_algorithm_challenge
  code=sp_algorithm_code
  height="610px"
%}

**Expected output**

```text
HBR returned. Next company is APX.
APX ranked correctly.
NVA ranked correctly.
UFN ranked correctly.
CRST ranked correctly.
Ranked correctly: 4 of 4
```

---

## List Operations

**AP CSP Concept:** `APPEND`, `INSERT`, `REMOVE`, and `LENGTH` modify and measure lists. These operations can update the watchlist as candidate companies are added or ranked.

{% capture sp_list_operations_challenge %}
Modify a market watchlist with all four College Board list operations.
{% endcapture %}

{% capture sp_list_operations_code %}
watchlist ← ["APX", "NVA"]
DISPLAY("Initial watchlist: " + watchlist)

APPEND(watchlist, "UFN")
DISPLAY("After APPEND: " + watchlist)

INSERT(watchlist, 2, "CRST")
DISPLAY("After INSERT: " + watchlist)

REMOVE(watchlist, 1)
DISPLAY("After ranking APX: " + watchlist)

DISPLAY("Companies remaining: " + LENGTH(watchlist))
{% endcapture %}

{% capture sp_list_operations_python %}
watchlist = ["APX", "NVA"]
print("Initial watchlist:", watchlist)

watchlist.append("UFN")
print("After append:", watchlist)

watchlist.insert(1, "CRST")
print("After insert:", watchlist)

watchlist.pop(0)
print("After ranking APX:", watchlist)
print("Companies remaining:", len(watchlist))
{% endcapture %}

{% capture sp_list_operations_java %}
import java.util.ArrayList;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> watchlist = new ArrayList<>(Arrays.asList("APX", "NVA"));
        System.out.println("Initial watchlist: " + watchlist);

        watchlist.add("UFN");
        System.out.println("After append: " + watchlist);

        watchlist.add(1, "CRST");
        System.out.println("After insert: " + watchlist);

        watchlist.remove(0);
        System.out.println("After ranking APX: " + watchlist);
        System.out.println("Companies remaining: " + watchlist.size());
    }
}
{% endcapture %}

{% include runners/code.html
  runner_id="sp500-list-operations"
  language="pseudocode"
  variants_key="sp_list_operations"
  python_code=sp_list_operations_python
  java_code=sp_list_operations_java
  local_python=true
  challenge=sp_list_operations_challenge
  code=sp_list_operations_code
  height="390px"
%}

**Expected output**

```text
Initial watchlist: APX,NVA
After APPEND: APX,NVA,UFN
After INSERT: APX,CRST,NVA,UFN
After ranking APX: CRST,NVA,UFN
Companies remaining: 3
```

---

## Search Algorithm

**AP CSP Concept:** A linear search checks every list item until it finds a target. This algorithm searches the watchlist and returns its 1-based position, or `-1` when the ticker is absent.

{% capture sp_search_challenge %}
Search the watchlist for HBR and display its position.
{% endcapture %}

{% capture sp_search_code %}
PROCEDURE findTicker(watchlist, targetTicker)
{
  position ← 1

  FOR EACH ticker IN watchlist
  {
    IF (ticker = targetTicker)
    {
      RETURN(position)
    }
    position ← position + 1
  }

  RETURN(-1)
}

watchlist ← ["APX", "NVA", "UFN", "HBR"]
result ← findTicker(watchlist, "HBR")
DISPLAY("HBR position: " + result)
{% endcapture %}

{% capture sp_search_python %}
def find_ticker(watchlist, target_ticker):
    for position, ticker in enumerate(watchlist, start=1):
        if ticker == target_ticker:
            return position
    return -1

watchlist = ["APX", "NVA", "UFN", "HBR"]
result = find_ticker(watchlist, "HBR")
print("HBR position:", result)
{% endcapture %}

{% capture sp_search_java %}
public class Main {
    static int findTicker(String[] watchlist, String targetTicker) {
        for (int index = 0; index < watchlist.length; index++) {
            if (watchlist[index].equals(targetTicker)) {
                return index + 1;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        String[] watchlist = {"APX", "NVA", "UFN", "HBR"};
        int result = findTicker(watchlist, "HBR");
        System.out.println("HBR position: " + result);
    }
}
{% endcapture %}

{% include runners/code.html
  runner_id="sp500-search"
  language="pseudocode"
  variants_key="sp_search"
  python_code=sp_search_python
  java_code=sp_search_java
  local_python=true
  challenge=sp_search_challenge
  code=sp_search_code
  height="490px"
%}

**Expected output**

```text
HBR position: 4
```

---

## Boolean Logic

**AP CSP Concept:** `AND`, `OR`, and `NOT` combine Boolean conditions. A company enters the next rank only when both its ticker and destination are correct. The rebalance is not finished while required companies remain.

{% capture sp_boolean_challenge %}
Use AND and NOT to decide whether APX enters rank 1 and whether the rebalance is still in progress.
{% endcapture %}

{% capture sp_boolean_code %}
selectedTicker ← "APX"
selectedRank ← 1
expectedTicker ← "APX"
expectedRank ← 1
companiesRemaining ← 7

correctTicker ← selectedTicker = expectedTicker
correctRank ← selectedRank = expectedRank

IF (correctTicker AND correctRank)
{
  DISPLAY("APX enters the index at rank 1.")
}
ELSE
{
  DISPLAY("Return the company to the watchlist.")
}

IF (NOT (companiesRemaining = 0))
{
  DISPLAY("The rebalance is still in progress.")
}
{% endcapture %}

{% capture sp_boolean_python %}
selected_ticker = "APX"
selected_rank = 1
expected_ticker = "APX"
expected_rank = 1
companies_remaining = 7

correct_ticker = selected_ticker == expected_ticker
correct_rank = selected_rank == expected_rank

if correct_ticker and correct_rank:
    print("APX enters the index at rank 1.")
else:
    print("Return the company to the watchlist.")

if not companies_remaining == 0:
    print("The rebalance is still in progress.")
{% endcapture %}

{% capture sp_boolean_java %}
public class Main {
    public static void main(String[] args) {
        String selectedTicker = "APX";
        int selectedRank = 1;
        String expectedTicker = "APX";
        int expectedRank = 1;
        int companiesRemaining = 7;

        boolean correctTicker = selectedTicker.equals(expectedTicker);
        boolean correctRank = selectedRank == expectedRank;

        if (correctTicker && correctRank) {
            System.out.println("APX enters the index at rank 1.");
        } else {
            System.out.println("Return the company to the watchlist.");
        }

        if (!(companiesRemaining == 0)) {
            System.out.println("The rebalance is still in progress.");
        }
    }
}
{% endcapture %}

{% include runners/code.html
  runner_id="sp500-boolean"
  language="pseudocode"
  variants_key="sp_boolean"
  python_code=sp_boolean_python
  java_code=sp_boolean_java
  local_python=true
  challenge=sp_boolean_challenge
  code=sp_boolean_code
  height="510px"
%}

**Expected output**

```text
APX enters the index at rank 1.
The rebalance is still in progress.
```

---

# JavaScript Prototype

The JavaScript version turns the algorithm into a market-rebalance interaction. Drag each fictional company from the watchlist to its matching rank in descending illustrative market-cap order. Clicking a company and then a rank provides the same interaction for keyboard and touch users. Correct choices enter the index; incorrect choices return to the watchlist. The program records every attempt and displays the current accuracy.

{% capture sp_javascript_challenge %}
Run the index-rebalance prototype. Try a wrong company first, then rank all eight companies. Identify the input, output, lists, procedure, selection, iteration, and Boolean expression in the code.
{% endcapture %}

{% capture sp_javascript_code %}
outputElement.innerHTML = '';

const companies = [
  { ticker: 'APX', name: 'Apex Systems', sector: 'Technology', marketCap: 420 },
  { ticker: 'NVA', name: 'Nova Health', sector: 'Health Care', marketCap: 360 },
  { ticker: 'UFN', name: 'Union Financial', sector: 'Financials', marketCap: 300 },
  { ticker: 'CRST', name: 'Crest Consumer', sector: 'Consumer', marketCap: 245 },
  { ticker: 'FRGE', name: 'Forge Industrial', sector: 'Industrials', marketCap: 195 },
  { ticker: 'ORBT', name: 'Orbit Media', sector: 'Communication', marketCap: 155 },
  { ticker: 'HBR', name: 'Harbor Utilities', sector: 'Utilities', marketCap: 110 },
  { ticker: 'SOLR', name: 'Solara Energy', sector: 'Energy', marketCap: 75 }
];

const attempts = [];
let currentRank = 0;
let selectedCompany = -1;

const app = document.createElement('section');
const styleElement = document.createElement('style');
const header = document.createElement('div');
const titleGroup = document.createElement('div');
const heading = document.createElement('h3');
const directions = document.createElement('p');
const controls = document.createElement('div');
const nameLabel = document.createElement('label');
const analystName = document.createElement('input');
const resetButton = document.createElement('button');
const tickerRail = document.createElement('div');
const liveRow = document.createElement('div');
const status = document.createElement('p');
const progress = document.createElement('p');
const layout = document.createElement('div');
const watchlist = document.createElement('div');
const watchlistTitle = document.createElement('h4');
const companyGrid = document.createElement('div');
const indexPanel = document.createElement('div');
const indexTitle = document.createElement('h4');
const indexBoard = document.createElement('div');
const boardHeader = document.createElement('div');
const boardName = document.createElement('strong');
const boardMethod = document.createElement('span');
const rankList = document.createElement('div');

styleElement.textContent = [
  '.market-lab{--ink:#eef5ef;--muted:#a9b9ad;--line:#3b5143;--panel:#111a15;--deep:#090e0b;--green:#78d398;--amber:#f1c568;--red:#f08a78;color:var(--ink);background:#0c130f;border:1px solid #33483a;border-radius:14px;padding:18px;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;box-shadow:0 12px 30px rgba(0,0,0,.3)}',
  '.market-header{display:flex;justify-content:space-between;gap:18px;align-items:flex-end}.market-title-group{max-width:64ch}.market-title-group h3{margin:0 0 5px;font-size:1.4rem;letter-spacing:-.025em}.market-title-group p{margin:0;color:var(--muted);line-height:1.45}.market-controls{display:flex;gap:10px;align-items:flex-end}.market-name-field{min-width:190px}.market-name-field label{display:block;margin-bottom:5px;color:var(--muted);font-size:.78rem}.market-name-field input{width:100%;box-sizing:border-box;border:1px solid #536a59;border-radius:8px;background:#080d0a;color:var(--ink);padding:9px 10px}.market-reset{min-height:40px;border:1px solid #6d8673;border-radius:8px;background:#1a2820;color:var(--ink);padding:8px 12px;font-weight:700;cursor:pointer}',
  '.market-ticker-rail{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;margin:16px 0 0;border:1px solid #33483a;background:#33483a}.market-ticker-rail span{background:#111a15;color:#bfd0c2;padding:8px 10px;font-size:.72rem;letter-spacing:.04em}.market-ticker-rail strong{color:var(--green)}',
  '.market-live-row{display:flex;justify-content:space-between;gap:14px;align-items:center;margin:12px 0;padding:10px 12px;background:#17231c;border:1px solid #3c5344;border-radius:10px}.market-status{margin:0;color:#f3d990;font-weight:750}.market-progress{margin:0;color:#9ee0b5;font-size:.9rem;white-space:nowrap}',
  '.market-layout{display:grid;grid-template-columns:minmax(250px,.9fr) minmax(390px,1.25fr);gap:16px;align-items:stretch}.market-watchlist,.market-index-panel{min-width:0}.market-panel-title{margin:0 0 8px;color:#dce8de;font-size:.88rem}.market-company-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.market-company{position:relative;min-height:88px;border:1px solid #405747;border-radius:10px;background:#121c16;color:var(--ink);padding:11px;text-align:left;cursor:grab;transition:transform 160ms ease-out,border-color 160ms ease-out,background 160ms ease-out}.market-company:hover{transform:translateY(-2px);border-color:#78d398;background:#17261c}.market-company[disabled]{cursor:not-allowed;transform:none}.market-company-ticker{display:block;color:var(--green);font-size:1rem;font-weight:850;letter-spacing:.04em}.market-company-name{display:block;margin-top:3px;font-size:.74rem;font-weight:700}.market-company-meta{display:flex;justify-content:space-between;gap:6px;margin-top:9px;color:var(--muted);font-size:.65rem}.market-company:after{content:"";position:absolute;right:10px;top:12px;width:30px;height:15px;border-bottom:2px solid var(--green);clip-path:polygon(0 75%,18% 44%,35% 62%,54% 18%,72% 42%,100% 0,100% 100%,0 100%);background:#234b31}',
  '.market-index-board{box-sizing:border-box;width:100%;min-height:400px;border:1px solid #496250;background:#090f0b;box-shadow:inset 0 0 0 5px #111a15}.market-board-header{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:12px 14px;border-bottom:1px solid #33483a;background:#152219}.market-board-header strong{font-size:1.05rem;letter-spacing:.08em}.market-board-header span{min-width:0;color:var(--muted);font-size:.7rem;overflow-wrap:anywhere}.market-rank-list{display:grid;gap:5px;padding:10px}.market-rank{position:relative;min-width:0;min-height:39px;overflow:hidden;border:1px dashed #506756;background:#111a15;color:var(--ink);padding:7px 10px;display:grid;grid-template-columns:42px minmax(0,1fr) auto;gap:8px;align-items:center;text-align:left;cursor:pointer}.market-rank:hover{border-style:solid;border-color:#78d398}.market-rank-number{position:relative;z-index:2;color:var(--amber);font-weight:850}.market-rank-label{position:relative;z-index:2;min-width:0;color:#c8d7cb;font-size:.78rem;font-weight:700;overflow-wrap:anywhere}.market-rank-cap{position:relative;z-index:2;color:#8fa394;font-size:.7rem}.market-rank-bar{position:absolute;inset:0;background:#1f5632;transform:scaleX(0);transform-origin:left center;transition:transform 260ms cubic-bezier(.16,1,.3,1)}',
  '.market-company:focus-visible,.market-rank:focus-visible,.market-reset:focus-visible,.market-name-field input:focus-visible{outline:3px solid var(--amber);outline-offset:2px}.market-note{margin:8px 0 0;color:#839589;font-size:.67rem}',
  '@media(max-width:760px){.market-header{align-items:stretch;flex-direction:column}.market-controls{align-items:stretch}.market-name-field{flex:1}.market-ticker-rail{grid-template-columns:1fr}.market-layout{grid-template-columns:1fr}.market-company-grid{grid-auto-flow:column;grid-template-columns:none;grid-auto-columns:minmax(150px,72vw);overflow-x:auto;padding-bottom:5px}.market-index-board{min-height:390px}.market-live-row{align-items:flex-start;flex-direction:column}.market-progress{white-space:normal}}',
  '@media(max-width:480px){.market-lab{padding:12px}.market-controls{flex-direction:column}.market-reset{width:100%}.market-board-header{align-items:flex-start;flex-direction:column}.market-rank{grid-template-columns:36px minmax(0,1fr)}.market-rank-cap{display:none}}',
  '@media(prefers-reduced-motion:reduce){.market-company,.market-rank-bar{transition:none}}'
].join('\\n');

heading.textContent = 'Mini 500 Rebalance Desk';
directions.textContent = 'Rank the fictional companies from largest to smallest illustrative market cap. Drag a company to its rank, or select both controls.';
nameLabel.textContent = 'Analyst name';
nameLabel.htmlFor = 'market-analyst-name';
analystName.id = 'market-analyst-name';
analystName.type = 'text';
analystName.placeholder = 'Enter your name';
analystName.autocomplete = 'name';
resetButton.type = 'button';
resetButton.textContent = 'Reset rebalance';
watchlistTitle.textContent = 'Market watchlist';
indexTitle.textContent = 'Capitalization-ranked index';
status.setAttribute('role', 'status');
status.setAttribute('aria-live', 'polite');

app.className = 'market-lab';
header.className = 'market-header';
titleGroup.className = 'market-title-group';
controls.className = 'market-controls';
liveRow.className = 'market-live-row';
status.className = 'market-status';
progress.className = 'market-progress';
resetButton.className = 'market-reset';
layout.className = 'market-layout';
watchlistTitle.className = 'market-panel-title';
watchlist.className = 'market-watchlist';
companyGrid.className = 'market-company-grid';
indexTitle.className = 'market-panel-title';
indexPanel.className = 'market-index-panel';
indexBoard.className = 'market-index-board';
boardHeader.className = 'market-board-header';
rankList.className = 'market-rank-list';

function calculateAccuracy(results) {
  let correctAttempts = 0;
  for (const result of results) {
    if (result === true) correctAttempts += 1;
  }
  return Math.round((correctAttempts / results.length) * 100);
}

function isCorrectRank(companyIndex, rankIndex) {
  return companyIndex === currentRank && rankIndex === currentRank;
}

function updateProgress() {
  const accuracy = attempts.length === 0 ? 100 : calculateAccuracy(attempts);
  progress.textContent = 'Ranked ' + currentRank + ' of ' + companies.length + ' • Accuracy ' + accuracy + '%';
}

function updateStatus(message) {
  const name = analystName.value.trim();
  status.textContent = name === '' ? message : name + ': ' + message;
}

const companyCards = [];
const rankButtons = [];
const rankLabels = [];
const rankCaps = [];
const rankBars = [];

function selectCompany(index) {
  if (index < currentRank || companyCards[index].disabled) return;
  selectedCompany = index;
  companyCards.forEach(function(card, cardIndex) {
    card.style.outline = cardIndex === index ? '3px solid #f1c568' : 'none';
    card.setAttribute('aria-pressed', cardIndex === index ? 'true' : 'false');
  });
  updateStatus(companies[index].ticker + ' selected. Choose its index rank.');
}

function updateRankGuidance() {
  rankButtons.forEach(function(rankButton, index) {
    if (rankButton.disabled) return;
    const isNext = index === currentRank;
    rankButton.style.borderColor = isNext ? '#f1c568' : '#506756';
    rankButton.setAttribute('aria-current', isNext ? 'step' : 'false');
  });
}

function placeCompany(companyIndex, rankIndex) {
  const validCompany = Number.isInteger(companyIndex) && companyIndex >= 0 && companyIndex < companies.length;
  if (!validCompany || companyCards[companyIndex].disabled) {
    updateStatus('Choose a company from the watchlist first.');
    return;
  }

  const correct = isCorrectRank(companyIndex, rankIndex);
  attempts.push(correct);

  if (correct) {
    const company = companies[companyIndex];
    companyCards[companyIndex].disabled = true;
    companyCards[companyIndex].draggable = false;
    companyCards[companyIndex].style.opacity = '0.34';
    rankButtons[rankIndex].disabled = true;
    rankLabels[rankIndex].textContent = company.ticker + ' · ' + company.name;
    rankCaps[rankIndex].textContent = '$' + company.marketCap + 'B';
    rankBars[rankIndex].style.transform = 'scaleX(' + (company.marketCap / companies[0].marketCap) + ')';
    rankButtons[rankIndex].style.borderColor = '#78d398';
    rankButtons[rankIndex].style.pointerEvents = 'none';
    currentRank += 1;
    updateStatus('Correct! ' + company.ticker + ' entered the index.');
  } else {
    updateStatus('Incorrect. ' + companies[companyIndex].ticker + ' returned to the watchlist. Rank ' + companies[currentRank].ticker + ' next.');
  }

  selectedCompany = -1;
  companyCards.forEach(function(card) {
    card.style.outline = 'none';
    card.setAttribute('aria-pressed', 'false');
  });
  updateProgress();
  updateRankGuidance();
  if (currentRank === companies.length) updateStatus('Index rebalance complete!');
}

companies.forEach(function(company, index) {
  const card = document.createElement('button');
  const ticker = document.createElement('span');
  const name = document.createElement('span');
  const meta = document.createElement('span');
  const sector = document.createElement('span');
  const cap = document.createElement('span');
  card.type = 'button';
  card.className = 'market-company';
  card.draggable = true;
  card.setAttribute('data-company-index', String(index));
  card.setAttribute('aria-label', 'Candidate company ' + company.ticker + ', illustrative market cap $' + company.marketCap + ' billion');
  card.setAttribute('aria-pressed', 'false');
  ticker.className = 'market-company-ticker';
  ticker.textContent = company.ticker;
  name.className = 'market-company-name';
  name.textContent = company.name;
  meta.className = 'market-company-meta';
  sector.textContent = company.sector;
  cap.textContent = '$' + company.marketCap + 'B';
  meta.appendChild(sector);
  meta.appendChild(cap);
  card.appendChild(ticker);
  card.appendChild(name);
  card.appendChild(meta);
  card.addEventListener('click', function() { selectCompany(index); });
  card.addEventListener('dragstart', function(event) {
    selectCompany(index);
    event.dataTransfer.setData('text/plain', String(index));
    event.dataTransfer.effectAllowed = 'move';
  });
  companyCards.push(card);
  companyGrid.appendChild(card);

  const rankButton = document.createElement('button');
  const bar = document.createElement('span');
  const rankNumber = document.createElement('span');
  const rankLabel = document.createElement('span');
  const rankCap = document.createElement('span');
  rankButton.type = 'button';
  rankButton.className = 'market-rank';
  rankButton.setAttribute('data-rank-index', String(index));
  rankButton.setAttribute('aria-label', 'Place a company at index rank ' + (index + 1));
  bar.className = 'market-rank-bar';
  rankNumber.className = 'market-rank-number';
  rankNumber.textContent = '#' + (index + 1);
  rankLabel.className = 'market-rank-label';
  rankLabel.textContent = index === 0 ? 'Largest market cap' : 'Next-largest market cap';
  rankCap.className = 'market-rank-cap';
  rankCap.textContent = 'Open rank';
  rankButton.appendChild(bar);
  rankButton.appendChild(rankNumber);
  rankButton.appendChild(rankLabel);
  rankButton.appendChild(rankCap);
  rankButton.addEventListener('click', function() { placeCompany(selectedCompany, index); });
  rankButton.addEventListener('dragover', function(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  });
  rankButton.addEventListener('drop', function(event) {
    event.preventDefault();
    placeCompany(Number.parseInt(event.dataTransfer.getData('text/plain'), 10), index);
  });
  rankButtons.push(rankButton);
  rankLabels.push(rankLabel);
  rankCaps.push(rankCap);
  rankBars.push(bar);
  rankList.appendChild(rankButton);
});

resetButton.addEventListener('click', function() {
  attempts.length = 0;
  currentRank = 0;
  selectedCompany = -1;
  companyCards.forEach(function(card) {
    card.disabled = false;
    card.draggable = true;
    card.style.opacity = '1';
    card.style.outline = 'none';
    card.setAttribute('aria-pressed', 'false');
  });
  rankButtons.forEach(function(rankButton, index) {
    rankButton.disabled = false;
    rankButton.style.borderColor = '#506756';
    rankButton.style.pointerEvents = 'auto';
    rankLabels[index].textContent = index === 0 ? 'Largest market cap' : 'Next-largest market cap';
    rankCaps[index].textContent = 'Open rank';
    rankBars[index].style.transform = 'scaleX(0)';
  });
  updateStatus('Next company: ' + companies[0].ticker);
  updateProgress();
  updateRankGuidance();
});

const nameField = document.createElement('div');
nameField.className = 'market-name-field';
nameField.appendChild(nameLabel);
nameField.appendChild(analystName);
titleGroup.appendChild(heading);
titleGroup.appendChild(directions);
controls.appendChild(nameField);
controls.appendChild(resetButton);
header.appendChild(titleGroup);
header.appendChild(controls);
['<strong>SAMPLE SESSION</strong> · not live market data', '<strong>METHOD</strong> · capitalization ranked', '<strong>TARGET</strong> · 8 holdings'].forEach(function(item) {
  const railItem = document.createElement('span');
  railItem.innerHTML = item;
  tickerRail.appendChild(railItem);
});
tickerRail.className = 'market-ticker-rail';
liveRow.appendChild(status);
liveRow.appendChild(progress);
watchlist.appendChild(watchlistTitle);
watchlist.appendChild(companyGrid);
boardName.textContent = 'MINI 500';
boardMethod.textContent = 'ILLUSTRATIVE MARKET-CAP ORDER';
boardHeader.appendChild(boardName);
boardHeader.appendChild(boardMethod);
indexBoard.appendChild(boardHeader);
indexBoard.appendChild(rankList);
const note = document.createElement('p');
note.className = 'market-note';
note.textContent = 'All company names and market-cap values are fictional classroom data, not investment information.';
indexPanel.appendChild(indexTitle);
indexPanel.appendChild(indexBoard);
indexPanel.appendChild(note);
layout.appendChild(watchlist);
layout.appendChild(indexPanel);
app.appendChild(header);
app.appendChild(tickerRail);
app.appendChild(liveRow);
app.appendChild(layout);
outputElement.appendChild(styleElement);
outputElement.appendChild(app);

updateStatus('Next company: ' + companies[currentRank].ticker);
updateProgress();
updateRankGuidance();
{% endcapture %}

{% include runners/ui.html
  runner_id="sp500-javascript"
  challenge=sp_javascript_challenge
  code=sp_javascript_code
  height="1050px"
  output_height="1100px"
%}

**Example output (initial UI state)**

```text
Next company: APX
Ranked 0 of 8 • Accuracy 100%
```

---

# Full Program Prototype

The full program uses the same lists, procedure, selection, iteration, Boolean logic, and accuracy calculation. It starts in Python, and the dropdown also provides complete Pseudocode and Java versions. The editable sample attempts supply input because this web runner does not provide terminal standard input.

{% capture sp_python_challenge %}
Run the complete sample rebalance. Change the sample attempts to test different correct and incorrect choices.
{% endcapture %}

{% capture sp_python_code %}
companies = ["APX", "NVA", "UFN", "CRST", "FRGE", "ORBT", "HBR", "SOLR"]
ranks = [1, 2, 3, 4, 5, 6, 7, 8]
attempts = []
current_rank = 0

# Change these sample choices to test a different rebalance.
sample_attempts = [
    ("HBR", 7),
    ("APX", 1),
    ("NVA", 2),
    ("UFN", 3),
    ("CRST", 4),
    ("FRGE", 5),
    ("ORBT", 6),
    ("HBR", 7),
    ("SOLR", 8),
]

def is_correct_rank(company_name, rank_number):
    correct_company = company_name.lower() == companies[current_rank].lower()
    correct_rank = rank_number == ranks[current_rank]
    return correct_company and correct_rank

for selected_company, selected_rank in sample_attempts:
    print("Next company:", companies[current_rank])
    print("Choose a ticker:", selected_company)
    print("Choose its index rank:", selected_rank)
    correct = is_correct_rank(selected_company, selected_rank)
    attempts.append(correct)

    if correct:
        print(selected_company, "entered the index!")
        current_rank += 1
    else:
        print("Incorrect ranking. The company returned to the watchlist.")

    if current_rank == len(companies):
        break

accuracy = round((sum(attempts) / len(attempts)) * 100)
print("Index rebalance complete!")
print("Accuracy:", str(accuracy) + "%")
{% endcapture %}

{% capture sp_prototype_pseudocode %}
companies ← ["APX", "NVA", "UFN", "CRST", "FRGE", "ORBT", "HBR", "SOLR"]
ranks ← [1, 2, 3, 4, 5, 6, 7, 8]
attempts ← []
currentRank ← 1

sampleCompanies ← ["HBR", "APX", "NVA", "UFN", "CRST", "FRGE", "ORBT", "HBR", "SOLR"]
sampleRanks ← [7, 1, 2, 3, 4, 5, 6, 7, 8]
sampleIndex ← 1

PROCEDURE isCorrectRank(companyName, rankNumber)
{
  RETURN(companyName = companies[currentRank] AND rankNumber = ranks[currentRank])
}

REPEAT UNTIL (currentRank > LENGTH(companies))
{
  selectedCompany ← sampleCompanies[sampleIndex]
  selectedRank ← sampleRanks[sampleIndex]
  correct ← isCorrectRank(selectedCompany, selectedRank)
  APPEND(attempts, correct)

  IF (correct)
  {
    DISPLAY("Correct: " + selectedCompany + " entered rank " + selectedRank + ".")
    currentRank ← currentRank + 1
  }
  ELSE
  {
    DISPLAY("Incorrect: " + selectedCompany + " returned to the watchlist.")
  }
  sampleIndex ← sampleIndex + 1
}

correctAttempts ← 0
FOR EACH result IN attempts
{
  IF (result)
  {
    correctAttempts ← correctAttempts + 1
  }
}

DISPLAY("Index rebalance complete!")
DISPLAY("Accuracy: " + correctAttempts + " of " + LENGTH(attempts))
{% endcapture %}

{% capture sp_prototype_java %}
public class Main {
    static String[] companies = {"APX", "NVA", "UFN", "CRST", "FRGE", "ORBT", "HBR", "SOLR"};
    static int currentRank = 0;

    static boolean isCorrectRank(String ticker, int rank) {
        return ticker.equalsIgnoreCase(companies[currentRank]) && rank == currentRank + 1;
    }

    public static void main(String[] args) {
        String[] selectedCompanies = {"HBR", "APX", "NVA", "UFN", "CRST", "FRGE", "ORBT", "HBR", "SOLR"};
        int[] selectedRanks = {7, 1, 2, 3, 4, 5, 6, 7, 8};
        int correctAttempts = 0;

        for (int index = 0; index < selectedCompanies.length && currentRank < companies.length; index++) {
            String selectedCompany = selectedCompanies[index];
            int selectedRank = selectedRanks[index];
            boolean correct = isCorrectRank(selectedCompany, selectedRank);

            if (correct) {
                System.out.println("Correct: " + selectedCompany + " entered rank " + selectedRank + ".");
                correctAttempts++;
                currentRank++;
            } else {
                System.out.println("Incorrect: " + selectedCompany + " returned to the watchlist.");
            }
        }

        System.out.println("Index rebalance complete!");
        System.out.println("Accuracy: " + correctAttempts + " of " + selectedCompanies.length);
    }
}
{% endcapture %}

{% include runners/code.html
  runner_id="sp500-python"
  language="python"
  variants_key="sp_prototype"
  python_code=sp_python_code
  java_code=sp_prototype_java
  pseudocode_code=sp_prototype_pseudocode
  local_python=true
  challenge=sp_python_challenge
  code=sp_python_code
  height="760px"
%}

**Example output (shortened)**

```text
Next company: APX
Choose a ticker: HBR
Choose its index rank: 7
Incorrect ranking. The company returned to the watchlist.

Next company: APX
Choose a ticker: APX
Choose its index rank: 1
APX entered the index!

...
Index rebalance complete!
Accuracy: 89%
```

---

# Reflection

JavaScript felt most natural for the interactive market board because it connects directly to drag-and-drop, buttons, and visible status updates. Python made the rebalance algorithm shorter and easier to read, while pseudocode showed the lists, procedure, selection, iteration, and Boolean logic without extra syntax.

The main challenge was keeping the correct rank synchronized with the ordered company list. The program solves this with `currentRank`: it changes only after both the selected ticker and rank are correct. That single rule makes wrong choices return safely without skipping a company.
