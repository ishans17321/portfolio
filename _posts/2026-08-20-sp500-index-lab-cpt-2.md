---
layout: post
codemirror: true
title: "S&P 500 Index Lab: CPT 2.0"
description: Learn AP CSP Create Performance Task concepts by matching current S&P 500 constituents to their real GICS sectors.
permalink: /sp500-index-lab
search_exclude: false
---

<!--
THESIS: Turn current constituent classifications into a hands-on matching problem instead of a generic finance dashboard.
OWN-WORLD: A dark exchange board, restrained market green, amber sector cues, and compact constituent cards.
STORY: The student learns the code concepts, checks the visible data source, then completes a live sector challenge.
FIRST VIEWPORT: Existing lesson heading and code-runner format remain unchanged; the prototype opens as a two-column watchlist and sector board.
FORM: Read/Operate extension of the established lesson structure; interaction is the memorable proof.
-->

# S&P 500 Index Lab: CPT 2.0

**Team:** Adhvay Iyer, Rohan Chandra, Ishan Shrivastava, Ishan Jha, Ishan Khandelwal, and Vayun Shekhar

This notebook uses one theme throughout: exploring the real S&P 500 through company sectors. The interactive prototype downloads the current constituent table, samples eight companies, and asks the analyst to match each company to its GICS sector. A correct match enters the sector board; an incorrect match returns to the watchlist. Every example below connects that idea to a CPT requirement.

> **Live-data note:** The prototype reads the community-maintained [List of S&P 500 companies](https://en.wikipedia.org/wiki/List_of_S%26P_500_companies) through the [MediaWiki API](https://www.mediawiki.org/wiki/API:Parsing_wikitext). If the request fails, it clearly switches to a verified eight-company snapshot so the assignment remains usable. This independent classroom project is not affiliated with S&P Global and is not investment advice.

# Code Runner Concepts

Each runner starts in College Board pseudocode. Use the language dropdown to switch the entire example between Pseudocode, Python, and Java. Each language keeps its own edited draft while you switch.

---

## Output

**CPT Requirement:** Your program must produce output visible to the user. College Board pseudocode uses `DISPLAY()` to show results. Here, the output identifies a real constituent and its GICS sector.

{% capture sp_output_challenge %}
Display Apple's ticker and GICS sector from the verified constituent snapshot.
{% endcapture %}

{% capture sp_output_code %}
currentCompany ← "AAPL"
currentSector ← "Information Technology"

DISPLAY("Current company: " + currentCompany)
DISPLAY("GICS sector: " + currentSector)
{% endcapture %}

{% capture sp_output_python %}
current_company = "AAPL"
current_sector = "Information Technology"

print("Current company:", current_company)
print("GICS sector:", current_sector)
{% endcapture %}

{% capture sp_output_java %}
public class Main {
    public static void main(String[] args) {
        String currentCompany = "AAPL";
        String currentSector = "Information Technology";

        System.out.println("Current company: " + currentCompany);
        System.out.println("GICS sector: " + currentSector);
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
Current company: AAPL
GICS sector: Information Technology
```

---

## Input

**CPT Requirement:** Your program must get input from the user. College Board pseudocode uses `INPUT()` to collect data. Here, the analyst supplies a ticker and the sector they think it belongs to.

{% capture sp_input_challenge %}
Ask the analyst to choose a ticker and GICS sector, then display both choices.
{% endcapture %}

{% capture sp_input_code %}
selectedTicker ← INPUT("Choose a ticker:")
selectedSector ← INPUT("Choose its GICS sector:")

DISPLAY("Selected ticker: " + selectedTicker)
DISPLAY("Selected sector: " + selectedSector)
{% endcapture %}

{% capture sp_input_python %}
# These sample values represent the analyst's input.
selected_ticker = "AAPL"
selected_sector = "Information Technology"

print("Selected ticker:", selected_ticker)
print("Selected sector:", selected_sector)
{% endcapture %}

{% capture sp_input_java %}
public class Main {
    public static void main(String[] args) {
        // These sample values represent the analyst's input.
        String selectedTicker = "AAPL";
        String selectedSector = "Information Technology";

        System.out.println("Selected ticker: " + selectedTicker);
        System.out.println("Selected sector: " + selectedSector);
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

**Example output (if the user chose AAPL and Information Technology)**

```text
Selected ticker: AAPL
Selected sector: Information Technology
```

---

## List

**CPT Requirement:** Your program must use a list to manage multiple related values. The `companies` list stores eight real S&P 500 securities without requiring a separate variable for each ticker.

{% capture sp_list_challenge %}
Store eight current constituent tickers and display each one with a loop.
{% endcapture %}

{% capture sp_list_code %}
companies ← ["AAPL", "JPM", "XOM", "JNJ", "PG", "CAT", "NEE", "AMZN"]

DISPLAY("Snapshot companies: " + LENGTH(companies))

FOR EACH company IN companies
{
  DISPLAY(company)
}
{% endcapture %}

{% capture sp_list_python %}
companies = ["AAPL", "JPM", "XOM", "JNJ", "PG", "CAT", "NEE", "AMZN"]

print("Snapshot companies:", len(companies))
for company in companies:
    print(company)
{% endcapture %}

{% capture sp_list_java %}
public class Main {
    public static void main(String[] args) {
        String[] companies = {"AAPL", "JPM", "XOM", "JNJ", "PG", "CAT", "NEE", "AMZN"};

        System.out.println("Snapshot companies: " + companies.length);
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
Snapshot companies: 8
AAPL
JPM
XOM
JNJ
PG
CAT
NEE
AMZN
```

---

## Procedure

**CPT Requirement:** You must create at least one student-developed procedure with parameters. This procedure accepts a selected and expected sector, then returns whether they match.

{% capture sp_procedure_challenge %}
Create and call a procedure that checks whether AAPL was matched to Information Technology.
{% endcapture %}

{% capture sp_procedure_code %}
PROCEDURE isCorrectSector(selectedSector, expectedSector)
{
  RETURN(selectedSector = expectedSector)
}

correctMatch ← isCorrectSector("Information Technology", "Information Technology")
DISPLAY("Correct sector: " + correctMatch)
{% endcapture %}

{% capture sp_procedure_python %}
def is_correct_sector(selected_sector, expected_sector):
    return selected_sector == expected_sector

correct_match = is_correct_sector("Information Technology", "Information Technology")
print("Correct sector:", correct_match)
{% endcapture %}

{% capture sp_procedure_java %}
public class Main {
    static boolean isCorrectSector(String selectedSector, String expectedSector) {
        return selectedSector.equals(expectedSector);
    }

    public static void main(String[] args) {
        boolean correctMatch = isCorrectSector("Information Technology", "Information Technology");
        System.out.println("Correct sector: " + correctMatch);
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
Correct sector: true
```

---

## Sequence

**AP CSP Concept:** Sequencing means statements execute in order. The live challenge loads the public table, parses constituent fields, samples sectors, and then starts the match.

{% capture sp_sequence_challenge %}
Display the four live-data preparation steps in the order they occur.
{% endcapture %}

{% capture sp_sequence_code %}
step ← 1
DISPLAY("Step " + step + ": Request constituent table")

step ← step + 1
DISPLAY("Step " + step + ": Parse company sectors")

step ← step + 1
DISPLAY("Step " + step + ": Sample eight sectors")

step ← step + 1
DISPLAY("Step " + step + ": Start the challenge")
{% endcapture %}

{% capture sp_sequence_python %}
steps = ["Request constituent table", "Parse company sectors", "Sample eight sectors", "Start the challenge"]

for step, action in enumerate(steps, start=1):
    print("Step " + str(step) + ": " + action)
{% endcapture %}

{% capture sp_sequence_java %}
public class Main {
    public static void main(String[] args) {
        String[] steps = {"Request constituent table", "Parse company sectors", "Sample eight sectors", "Start the challenge"};

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
Step 1: Request constituent table
Step 2: Parse company sectors
Step 3: Sample eight sectors
Step 4: Start the challenge
```

---

## Selection

**CPT Requirement:** Your algorithm must include selection with `IF` or `IF/ELSE`. Selection accepts a correct sector match or returns an incorrect company to the watchlist.

{% capture sp_selection_challenge %}
Check a selected sector. If it matches Apple's expected sector, add the company to the board; otherwise return it to the watchlist.
{% endcapture %}

{% capture sp_selection_code %}
expectedSector ← "Information Technology"
selectedSector ← INPUT("Choose AAPL's GICS sector:")

IF (selectedSector = expectedSector)
{
  DISPLAY("Correct! AAPL matched Information Technology.")
}
ELSE
{
  DISPLAY("Incorrect. AAPL returned to the watchlist.")
}
{% endcapture %}

{% capture sp_selection_python %}
expected_sector = "Information Technology"
selected_sector = "Information Technology"

if selected_sector == expected_sector:
    print("Correct! AAPL matched Information Technology.")
else:
    print("Incorrect. AAPL returned to the watchlist.")
{% endcapture %}

{% capture sp_selection_java %}
public class Main {
    public static void main(String[] args) {
        String expectedSector = "Information Technology";
        String selectedSector = "Information Technology";

        if (selectedSector.equals(expectedSector)) {
            System.out.println("Correct! AAPL matched Information Technology.");
        } else {
            System.out.println("Incorrect. AAPL returned to the watchlist.");
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

**Example output (if the user selected Information Technology)**

```text
Correct! AAPL matched Information Technology.
```

---

## Iteration

**CPT Requirement:** Your algorithm must include iteration using a loop. Iteration lets one block of code process every sampled ticker instead of repeating similar statements eight times.

{% capture sp_iteration_challenge %}
Loop through the snapshot and display one watchlist position for each real ticker.
{% endcapture %}

{% capture sp_iteration_code %}
companies ← ["AAPL", "JPM", "XOM", "JNJ", "PG", "CAT", "NEE", "AMZN"]
position ← 1

FOR EACH company IN companies
{
  DISPLAY("Card " + position + ": " + company)
  position ← position + 1
}
{% endcapture %}

{% capture sp_iteration_python %}
companies = ["AAPL", "JPM", "XOM", "JNJ", "PG", "CAT", "NEE", "AMZN"]

for position, company in enumerate(companies, start=1):
    print("Card " + str(position) + ": " + company)
{% endcapture %}

{% capture sp_iteration_java %}
public class Main {
    public static void main(String[] args) {
        String[] companies = {"AAPL", "JPM", "XOM", "JNJ", "PG", "CAT", "NEE", "AMZN"};

        for (int index = 0; index < companies.length; index++) {
            System.out.println("Card " + (index + 1) + ": " + companies[index]);
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
Card 1: AAPL
Card 2: JPM
Card 3: XOM
Card 4: JNJ
Card 5: PG
Card 6: CAT
Card 7: NEE
Card 8: AMZN
```

---

## Complete Algorithm

**CPT Requirement:** Your main algorithm must integrate sequencing, selection, and iteration to solve a meaningful problem. This procedure processes simulated sector choices and returns the number of correct matches.

{% capture sp_algorithm_challenge %}
Run a sector-matching algorithm that combines a list, procedure, sequence, selection, iteration, and a return value.
{% endcapture %}

{% capture sp_algorithm_code %}
PROCEDURE matchSectors(expectedSectors, selectedSectors)
{
  matchedCount ← 0
  position ← 1

  FOR EACH selectedSector IN selectedSectors
  {
    expectedSector ← expectedSectors[position]

    IF (selectedSector = expectedSector)
    {
      DISPLAY("Company " + position + " matched " + selectedSector + ".")
      matchedCount ← matchedCount + 1
    }
    ELSE
    {
      DISPLAY("Company " + position + " returned. Expected " + expectedSector + ".")
    }
    position ← position + 1
  }

  RETURN(matchedCount)
}

expected ← ["Information Technology", "Financials", "Energy", "Health Care"]
attempts ← ["Financials", "Financials", "Energy", "Health Care"]
matched ← matchSectors(expected, attempts)
DISPLAY("Matched correctly: " + matched + " of " + LENGTH(expected))
{% endcapture %}

{% capture sp_algorithm_python %}
def match_sectors(expected_sectors, selected_sectors):
    matched_count = 0

    for position, selected_sector in enumerate(selected_sectors):
        expected_sector = expected_sectors[position]
        if selected_sector == expected_sector:
            print("Company " + str(position + 1) + " matched " + selected_sector + ".")
            matched_count += 1
        else:
            print("Company " + str(position + 1) + " returned. Expected " + expected_sector + ".")

    return matched_count

expected = ["Information Technology", "Financials", "Energy", "Health Care"]
attempts = ["Financials", "Financials", "Energy", "Health Care"]
matched = match_sectors(expected, attempts)
print("Matched correctly:", matched, "of", len(expected))
{% endcapture %}

{% capture sp_algorithm_java %}
public class Main {
    static int matchSectors(String[] expectedSectors, String[] selectedSectors) {
        int matchedCount = 0;

        for (int position = 0; position < selectedSectors.length; position++) {
            String selectedSector = selectedSectors[position];
            String expectedSector = expectedSectors[position];
            if (selectedSector.equals(expectedSector)) {
                System.out.println("Company " + (position + 1) + " matched " + selectedSector + ".");
                matchedCount++;
            } else {
                System.out.println("Company " + (position + 1) + " returned. Expected " + expectedSector + ".");
            }
        }
        return matchedCount;
    }

    public static void main(String[] args) {
        String[] expected = {"Information Technology", "Financials", "Energy", "Health Care"};
        String[] attempts = {"Financials", "Financials", "Energy", "Health Care"};
        int matched = matchSectors(expected, attempts);
        System.out.println("Matched correctly: " + matched + " of " + expected.length);
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
Company 1 returned. Expected Information Technology.
Company 2 matched Financials.
Company 3 matched Energy.
Company 4 matched Health Care.
Matched correctly: 3 of 4
```

---

## List Operations

**AP CSP Concept:** `APPEND`, `INSERT`, `REMOVE`, and `LENGTH` modify and measure lists. These operations update the real-ticker watchlist as companies enter or leave a challenge.

{% capture sp_list_operations_challenge %}
Modify a market watchlist with all four College Board list operations.
{% endcapture %}

{% capture sp_list_operations_code %}
watchlist ← ["AAPL", "JPM"]
DISPLAY("Initial watchlist: " + watchlist)

APPEND(watchlist, "XOM")
DISPLAY("After APPEND: " + watchlist)

INSERT(watchlist, 2, "JNJ")
DISPLAY("After INSERT: " + watchlist)

REMOVE(watchlist, 1)
DISPLAY("After matching AAPL: " + watchlist)

DISPLAY("Companies remaining: " + LENGTH(watchlist))
{% endcapture %}

{% capture sp_list_operations_python %}
watchlist = ["AAPL", "JPM"]
print("Initial watchlist:", watchlist)

watchlist.append("XOM")
print("After append:", watchlist)

watchlist.insert(1, "JNJ")
print("After insert:", watchlist)

watchlist.pop(0)
print("After matching AAPL:", watchlist)
print("Companies remaining:", len(watchlist))
{% endcapture %}

{% capture sp_list_operations_java %}
import java.util.ArrayList;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> watchlist = new ArrayList<>(Arrays.asList("AAPL", "JPM"));
        System.out.println("Initial watchlist: " + watchlist);

        watchlist.add("XOM");
        System.out.println("After append: " + watchlist);

        watchlist.add(1, "JNJ");
        System.out.println("After insert: " + watchlist);

        watchlist.remove(0);
        System.out.println("After matching AAPL: " + watchlist);
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
Initial watchlist: AAPL,JPM
After APPEND: AAPL,JPM,XOM
After INSERT: AAPL,JNJ,JPM,XOM
After matching AAPL: JNJ,JPM,XOM
Companies remaining: 3
```

---

## Search Algorithm

**AP CSP Concept:** A linear search checks every list item until it finds a target. This algorithm searches the watchlist and returns its 1-based position, or `-1` when the ticker is absent.

{% capture sp_search_challenge %}
Search the watchlist for NEE and display its position.
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

watchlist ← ["AAPL", "JPM", "XOM", "NEE"]
result ← findTicker(watchlist, "NEE")
DISPLAY("NEE position: " + result)
{% endcapture %}

{% capture sp_search_python %}
def find_ticker(watchlist, target_ticker):
    for position, ticker in enumerate(watchlist, start=1):
        if ticker == target_ticker:
            return position
    return -1

watchlist = ["AAPL", "JPM", "XOM", "NEE"]
result = find_ticker(watchlist, "NEE")
print("NEE position:", result)
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
        String[] watchlist = {"AAPL", "JPM", "XOM", "NEE"};
        int result = findTicker(watchlist, "NEE");
        System.out.println("NEE position: " + result);
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
NEE position: 4
```

---

## Boolean Logic

**AP CSP Concept:** `AND`, `OR`, and `NOT` combine Boolean conditions. A company enters the board only when both its ticker and sector are correct. The challenge is not finished while unmatched companies remain.

{% capture sp_boolean_challenge %}
Use AND and NOT to decide whether AAPL enters Information Technology and whether the challenge is still in progress.
{% endcapture %}

{% capture sp_boolean_code %}
selectedTicker ← "AAPL"
selectedSector ← "Information Technology"
expectedTicker ← "AAPL"
expectedSector ← "Information Technology"
companiesRemaining ← 7

correctTicker ← selectedTicker = expectedTicker
correctSector ← selectedSector = expectedSector

IF (correctTicker AND correctSector)
{
  DISPLAY("AAPL enters Information Technology.")
}
ELSE
{
  DISPLAY("Return the company to the watchlist.")
}

IF (NOT (companiesRemaining = 0))
{
  DISPLAY("The sector challenge is still in progress.")
}
{% endcapture %}

{% capture sp_boolean_python %}
selected_ticker = "AAPL"
selected_sector = "Information Technology"
expected_ticker = "AAPL"
expected_sector = "Information Technology"
companies_remaining = 7

correct_ticker = selected_ticker == expected_ticker
correct_sector = selected_sector == expected_sector

if correct_ticker and correct_sector:
    print("AAPL enters Information Technology.")
else:
    print("Return the company to the watchlist.")

if not companies_remaining == 0:
    print("The sector challenge is still in progress.")
{% endcapture %}

{% capture sp_boolean_java %}
public class Main {
    public static void main(String[] args) {
        String selectedTicker = "AAPL";
        String selectedSector = "Information Technology";
        String expectedTicker = "AAPL";
        String expectedSector = "Information Technology";
        int companiesRemaining = 7;

        boolean correctTicker = selectedTicker.equals(expectedTicker);
        boolean correctSector = selectedSector.equals(expectedSector);

        if (correctTicker && correctSector) {
            System.out.println("AAPL enters Information Technology.");
        } else {
            System.out.println("Return the company to the watchlist.");
        }

        if (!(companiesRemaining == 0)) {
            System.out.println("The sector challenge is still in progress.");
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
AAPL enters Information Technology.
The sector challenge is still in progress.
```

---

# JavaScript Prototype

The JavaScript version turns the algorithm into a live constituent-classification challenge. It requests the current public table, samples companies from eight distinct sectors, and shows the exact source revision. Drag a company to its GICS sector, or select both controls for keyboard and touch use. Correct choices fill the sector board; incorrect choices return to the watchlist.

{% capture sp_javascript_challenge %}
Load the live constituent challenge. Try a wrong sector first, then match all eight companies. Identify the input, output, lists, procedure, selection, iteration, Boolean expression, and fallback path in the code.
{% endcapture %}

{% capture sp_javascript_code %}
outputElement.innerHTML = '';

const DATA_URL = 'https://en.wikipedia.org/w/api.php?action=parse&page=List_of_S%26P_500_companies&prop=text%7Crevid&format=json&origin=*';
const SOURCE_PAGE = 'https://en.wikipedia.org/wiki/List_of_S%26P_500_companies';
const OFFICIAL_PAGE = 'https://www.spglobal.com/spdji/en/indices/equity/sp-500/';
const FALLBACK_REVISION = '1370105675';
const fallbackCompanies = [
  { ticker: 'AAPL', name: 'Apple Inc.', sector: 'Information Technology', subIndustry: 'Technology Hardware, Storage & Peripherals', headquarters: 'Cupertino, California', dateAdded: '1982-11-30' },
  { ticker: 'JPM', name: 'JPMorgan Chase', sector: 'Financials', subIndustry: 'Diversified Banks', headquarters: 'New York City, New York', dateAdded: '1975-06-30' },
  { ticker: 'XOM', name: 'ExxonMobil', sector: 'Energy', subIndustry: 'Integrated Oil & Gas', headquarters: 'Spring, Texas', dateAdded: '1957-03-04' },
  { ticker: 'JNJ', name: 'Johnson & Johnson', sector: 'Health Care', subIndustry: 'Pharmaceuticals', headquarters: 'New Brunswick, New Jersey', dateAdded: '1973-06-30' },
  { ticker: 'PG', name: 'Procter & Gamble', sector: 'Consumer Staples', subIndustry: 'Personal Care Products', headquarters: 'Cincinnati, Ohio', dateAdded: '1957-03-04' },
  { ticker: 'CAT', name: 'Caterpillar Inc.', sector: 'Industrials', subIndustry: 'Construction Machinery & Heavy Transportation Equipment', headquarters: 'Irving, Texas', dateAdded: '1957-03-04' },
  { ticker: 'NEE', name: 'NextEra Energy', sector: 'Utilities', subIndustry: 'Multi-Utilities', headquarters: 'Juno Beach, Florida', dateAdded: '1976-06-30' },
  { ticker: 'AMZN', name: 'Amazon', sector: 'Consumer Discretionary', subIndustry: 'Broadline Retail', headquarters: 'Seattle, Washington', dateAdded: '2005-11-18' }
];

let sourceCompanies = fallbackCompanies.slice();
let challengeCompanies = [];
let sectorTargets = [];
let attempts = [];
let matchedCount = 0;
let selectedCompany = -1;
let challengeNumber = 0;
let activeController = null;

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

const styleElement = createElement('style');
styleElement.textContent = [
  '.market-lab{--ink:#edf5ef;--muted:#a9b9ad;--line:#3d5545;--panel:#111a15;--deep:#090e0b;--green:#78d398;--amber:#f1c568;--red:#ff9a86;box-sizing:border-box;max-width:100%;overflow:hidden;color:var(--ink);background:#0c130f;border:1px solid #33483a;border-radius:14px;padding:18px;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;box-shadow:0 12px 30px rgba(0,0,0,.3)}',
  '.market-header{display:flex;justify-content:space-between;gap:18px;align-items:flex-end}.market-title-group{max-width:65ch}.market-title-group h3{margin:0 0 6px;font-size:1.45rem;letter-spacing:-.025em}.market-title-group p{margin:0;color:var(--muted);line-height:1.45}.market-controls{display:flex;gap:8px;flex-wrap:wrap}.market-action{min-height:40px;border:1px solid #66806d;border-radius:8px;background:#1a2820;color:var(--ink);padding:8px 12px;font-weight:750;cursor:pointer}.market-action:hover{border-color:var(--green);background:#213227}.market-action:disabled{cursor:wait;opacity:.55}',
  '.market-source-row{display:flex;justify-content:space-between;gap:14px;align-items:center;margin:16px 0 10px;padding:10px 12px;background:#17231c;border:1px solid #3c5344;border-radius:10px}.market-source-copy{min-width:0}.market-source-badge{display:inline-block;margin-right:8px;border:1px solid #5e856a;border-radius:999px;padding:3px 8px;color:#a7edbb;font-size:.7rem;font-weight:850;letter-spacing:.05em;text-transform:uppercase}.market-source-badge[data-state="fallback"]{border-color:#8a7444;color:#f5d889}.market-source-detail{color:var(--muted);font-size:.75rem}.market-source-links{display:flex;gap:10px;flex-wrap:wrap}.market-source-links a{color:#a9e7bc;font-size:.74rem;text-underline-offset:3px}',
  '.market-live-row{display:flex;justify-content:space-between;gap:14px;align-items:center;margin-bottom:12px;padding:10px 12px;border:1px solid #344a3b;background:#101a14}.market-status{margin:0;color:#f3d990;font-weight:750}.market-progress{margin:0;color:#9ee0b5;font-size:.9rem;white-space:nowrap}',
  '.market-layout{display:grid;grid-template-columns:minmax(280px,.95fr) minmax(390px,1.25fr);gap:16px}.market-layout>*{min-width:0}.market-panel-title{margin:0 0 8px;color:#dce8de;font-size:.9rem}.market-panel-help{margin:-3px 0 10px;color:#87998c;font-size:.72rem;line-height:1.4}.market-company-grid{display:grid;min-width:0;max-width:100%;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.market-company{position:relative;min-height:104px;border:1px solid #405747;border-radius:10px;background:#121c16;color:var(--ink);padding:11px;text-align:left;cursor:grab;transition:transform 160ms ease-out,border-color 160ms ease-out,background 160ms ease-out}.market-company:hover{transform:translateY(-2px);border-color:var(--green);background:#17261c}.market-company[aria-pressed="true"]{border-color:var(--amber);box-shadow:0 0 0 2px rgba(241,197,104,.28)}.market-company[disabled]{cursor:not-allowed;opacity:.3;transform:none}.market-company-ticker{display:block;color:var(--green);font-size:1rem;font-weight:850;letter-spacing:.04em}.market-company-name{display:block;margin-top:3px;font-size:.78rem;font-weight:750}.market-company-meta{display:block;margin-top:9px;color:var(--muted);font-size:.66rem;line-height:1.35}.market-company:after{content:"";position:absolute;right:10px;top:12px;width:30px;height:15px;border-bottom:2px solid var(--green);clip-path:polygon(0 75%,18% 44%,35% 62%,54% 18%,72% 42%,100% 0,100% 100%,0 100%);background:#234b31}',
  '.market-sector-board{border:1px solid #496250;background:#090f0b;box-shadow:inset 0 0 0 5px #111a15}.market-board-header{display:flex;justify-content:space-between;gap:10px;padding:12px 14px;border-bottom:1px solid #33483a;background:#152219}.market-board-header strong{font-size:1rem;letter-spacing:.07em}.market-board-header span{color:var(--muted);font-size:.7rem}.market-sector-list{display:grid;gap:6px;padding:10px}.market-sector{position:relative;min-height:52px;border:1px dashed #506756;background:#111a15;color:var(--ink);padding:8px 10px;display:grid;grid-template-columns:minmax(145px,.8fr) minmax(0,1.2fr);gap:10px;align-items:center;text-align:left;cursor:pointer}.market-sector:hover{border-style:solid;border-color:var(--green)}.market-sector[disabled]{cursor:default;border-style:solid;border-color:#4f8a61}.market-sector-name{color:var(--amber);font-size:.78rem;font-weight:850}.market-sector-slot{min-width:0;color:#aebdb2;font-size:.74rem;overflow-wrap:anywhere}.market-sector[disabled] .market-sector-slot{color:#a8e8ba}',
  '.market-footnote{margin:9px 0 0;color:#839589;font-size:.68rem;line-height:1.45}.market-company:focus-visible,.market-sector:focus-visible,.market-action:focus-visible,.market-source-links a:focus-visible{outline:3px solid var(--amber);outline-offset:2px}',
  '@media(max-width:760px){.market-header,.market-source-row,.market-live-row{align-items:flex-start;flex-direction:column}.market-layout{grid-template-columns:1fr}.market-company-grid{grid-auto-flow:column;grid-template-columns:none;grid-auto-columns:minmax(158px,72vw);overflow-x:auto;padding-bottom:6px}.market-progress{white-space:normal}}',
  '@media(max-width:480px){.market-lab{padding:12px}.market-controls,.market-action{width:100%}.market-sector{grid-template-columns:1fr;gap:3px}.market-board-header{flex-direction:column}.market-source-links{flex-direction:column;gap:4px}}',
  '@media(prefers-reduced-motion:reduce){.market-company{transition:none}}'
].join('\\n');

const app = createElement('section', 'market-lab');
const header = createElement('div', 'market-header');
const titleGroup = createElement('div', 'market-title-group');
const heading = createElement('h3', '', 'S&P 500 Sector Exchange');
const directions = createElement('p', '', 'Match eight current constituents to their GICS sectors. Drag a company to a sector, or select a company and then a sector.');
const controls = createElement('div', 'market-controls');
const newButton = createElement('button', 'market-action', 'New challenge');
const retryButton = createElement('button', 'market-action', 'Retry live data');
newButton.type = 'button';
retryButton.type = 'button';
titleGroup.appendChild(heading);
titleGroup.appendChild(directions);
controls.appendChild(newButton);
controls.appendChild(retryButton);
header.appendChild(titleGroup);
header.appendChild(controls);

const sourceRow = createElement('div', 'market-source-row');
const sourceCopy = createElement('div', 'market-source-copy');
const sourceBadge = createElement('span', 'market-source-badge', 'Connecting');
const sourceDetail = createElement('span', 'market-source-detail', 'Requesting the current constituent table…');
const sourceLinks = createElement('div', 'market-source-links');
const sourceLink = createElement('a', '', 'View constituent source');
const officialLink = createElement('a', '', 'Official S&P index page');
sourceLink.href = SOURCE_PAGE;
sourceLink.target = '_blank';
sourceLink.rel = 'noopener noreferrer';
officialLink.href = OFFICIAL_PAGE;
officialLink.target = '_blank';
officialLink.rel = 'noopener noreferrer';
sourceCopy.appendChild(sourceBadge);
sourceCopy.appendChild(sourceDetail);
sourceLinks.appendChild(sourceLink);
sourceLinks.appendChild(officialLink);
sourceRow.appendChild(sourceCopy);
sourceRow.appendChild(sourceLinks);

const liveRow = createElement('div', 'market-live-row');
const status = createElement('p', 'market-status');
const progress = createElement('p', 'market-progress');
status.setAttribute('role', 'status');
status.setAttribute('aria-live', 'polite');
liveRow.appendChild(status);
liveRow.appendChild(progress);

const layout = createElement('div', 'market-layout');
const watchlist = createElement('section');
const watchlistTitle = createElement('h4', 'market-panel-title', 'Constituent watchlist');
const watchlistHelp = createElement('p', 'market-panel-help', 'Sector labels stay hidden until you make a match. Company details come from the source table.');
const companyGrid = createElement('div', 'market-company-grid');
watchlist.appendChild(watchlistTitle);
watchlist.appendChild(watchlistHelp);
watchlist.appendChild(companyGrid);

const sectorPanel = createElement('section');
const sectorTitle = createElement('h4', 'market-panel-title', 'GICS sector board');
const board = createElement('div', 'market-sector-board');
const boardHeader = createElement('div', 'market-board-header');
boardHeader.appendChild(createElement('strong', '', 'SECTOR MATCH'));
boardHeader.appendChild(createElement('span', '', 'ONE COMPANY PER SAMPLED SECTOR'));
const sectorList = createElement('div', 'market-sector-list');
board.appendChild(boardHeader);
board.appendChild(sectorList);
const footnote = createElement('p', 'market-footnote', 'Educational constituent classification activity. It does not use prices, predict returns, or provide investment advice.');
sectorPanel.appendChild(sectorTitle);
sectorPanel.appendChild(board);
sectorPanel.appendChild(footnote);
layout.appendChild(watchlist);
layout.appendChild(sectorPanel);

app.appendChild(header);
app.appendChild(sourceRow);
app.appendChild(liveRow);
app.appendChild(layout);
outputElement.appendChild(styleElement);
outputElement.appendChild(app);

function accuracy() {
  if (attempts.length === 0) return 100;
  const correct = attempts.filter(function(result) { return result === true; }).length;
  return Math.round((correct / attempts.length) * 100);
}

function updateProgress() {
  progress.textContent = 'Matched ' + matchedCount + ' of ' + challengeCompanies.length + ' • Accuracy ' + accuracy() + '%';
}

function setStatus(message) {
  status.textContent = message;
}

function chooseChallenge(companies) {
  const groups = new Map();
  companies.forEach(function(company) {
    if (!groups.has(company.sector)) groups.set(company.sector, []);
    groups.get(company.sector).push(company);
  });
  const sectors = Array.from(groups.keys()).sort();
  const chosen = [];
  for (let offset = 0; offset < Math.min(8, sectors.length); offset += 1) {
    const sector = sectors[(challengeNumber + offset) % sectors.length];
    const candidates = groups.get(sector);
    chosen.push(candidates[(challengeNumber + offset) % candidates.length]);
  }
  return chosen;
}

function clearElement(element) {
  while (element.firstChild) element.removeChild(element.firstChild);
}

function selectCompany(index, cards) {
  if (!cards[index] || cards[index].disabled) return;
  selectedCompany = index;
  cards.forEach(function(card, cardIndex) {
    card.setAttribute('aria-pressed', cardIndex === index ? 'true' : 'false');
  });
  setStatus(challengeCompanies[index].ticker + ' selected. Choose its GICS sector.');
}

function renderChallenge() {
  challengeCompanies = chooseChallenge(sourceCompanies);
  sectorTargets = challengeCompanies.map(function(company) { return company.sector; });
  sectorTargets = sectorTargets.slice(3).concat(sectorTargets.slice(0, 3));
  attempts = [];
  matchedCount = 0;
  selectedCompany = -1;
  clearElement(companyGrid);
  clearElement(sectorList);
  const cards = [];
  const sectorButtons = [];

  function placeCompany(companyIndex, sectorIndex) {
    const card = cards[companyIndex];
    const sectorButton = sectorButtons[sectorIndex];
    if (!card || card.disabled) {
      setStatus('Choose a company from the watchlist first.');
      return;
    }
    if (!sectorButton || sectorButton.disabled) {
      setStatus('That sector already has a company. Choose an open sector.');
      return;
    }
    const company = challengeCompanies[companyIndex];
    const correct = company.sector === sectorTargets[sectorIndex];
    attempts.push(correct);
    if (correct) {
      card.disabled = true;
      card.draggable = false;
      sectorButton.disabled = true;
      sectorButton.querySelector('.market-sector-slot').textContent = company.ticker + ' · ' + company.name;
      matchedCount += 1;
      setStatus('Correct! ' + company.ticker + ' matched ' + company.sector + '.');
    } else {
      setStatus('Incorrect. ' + company.ticker + ' returned to the watchlist.');
    }
    selectedCompany = -1;
    cards.forEach(function(item) { item.setAttribute('aria-pressed', 'false'); });
    updateProgress();
    if (matchedCount === challengeCompanies.length) setStatus('Sector challenge complete!');
  }

  challengeCompanies.forEach(function(company, index) {
    const card = createElement('button', 'market-company');
    card.type = 'button';
    card.draggable = true;
    card.setAttribute('data-company-index', String(index));
    card.setAttribute('data-sector', company.sector);
    card.setAttribute('aria-pressed', 'false');
    card.setAttribute('aria-label', company.ticker + ', ' + company.name + '. Choose this company, then select its sector.');
    card.appendChild(createElement('span', 'market-company-ticker', company.ticker));
    card.appendChild(createElement('span', 'market-company-name', company.name));
    card.appendChild(createElement('span', 'market-company-meta', company.subIndustry + ' • ' + company.headquarters));
    card.addEventListener('click', function() { selectCompany(index, cards); });
    card.addEventListener('dragstart', function(event) {
      selectCompany(index, cards);
      event.dataTransfer.setData('text/plain', String(index));
      event.dataTransfer.effectAllowed = 'move';
    });
    cards.push(card);
    companyGrid.appendChild(card);
  });

  sectorTargets.forEach(function(sector, index) {
    const sectorButton = createElement('button', 'market-sector');
    sectorButton.type = 'button';
    sectorButton.setAttribute('data-sector-index', String(index));
    sectorButton.setAttribute('data-sector', sector);
    sectorButton.setAttribute('aria-label', 'Match selected company to ' + sector);
    sectorButton.appendChild(createElement('span', 'market-sector-name', sector));
    sectorButton.appendChild(createElement('span', 'market-sector-slot', 'Open sector'));
    sectorButton.addEventListener('click', function() { placeCompany(selectedCompany, index); });
    sectorButton.addEventListener('dragover', function(event) {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
    });
    sectorButton.addEventListener('drop', function(event) {
      event.preventDefault();
      placeCompany(Number.parseInt(event.dataTransfer.getData('text/plain'), 10), index);
    });
    sectorButtons.push(sectorButton);
    sectorList.appendChild(sectorButton);
  });

  setStatus('Choose a company, then match its GICS sector.');
  updateProgress();
}

function normalizeCell(value) {
  return value
    .split('[')[0]
    .replaceAll(String.fromCharCode(10), ' ')
    .replaceAll(String.fromCharCode(9), ' ')
    .split(' ')
    .filter(Boolean)
    .join(' ')
    .trim();
}

function parseCompanies(tableHtml) {
  const parsed = new DOMParser().parseFromString(tableHtml, 'text/html');
  const table = parsed.querySelector('table.wikitable');
  if (!table) throw new Error('Constituent table was not found.');
  const companies = [];
  table.querySelectorAll('tbody tr').forEach(function(row) {
    const cells = row.querySelectorAll('th, td');
    if (cells.length < 6) return;
    const company = {
      ticker: normalizeCell(cells[0].textContent),
      name: normalizeCell(cells[1].textContent),
      sector: normalizeCell(cells[2].textContent),
      subIndustry: normalizeCell(cells[3].textContent),
      headquarters: normalizeCell(cells[4].textContent),
      dateAdded: normalizeCell(cells[5].textContent)
    };
    const isHeader = company.ticker.toLowerCase() === 'symbol' || company.sector.toLowerCase() === 'gics sector';
    if (!isHeader && company.ticker && company.name && company.sector && company.subIndustry) companies.push(company);
  });
  const sectorCount = new Set(companies.map(function(company) { return company.sector; })).size;
  if (companies.length < 400 || sectorCount < 8) throw new Error('The returned table did not pass validation.');
  return companies;
}

function showFallback(reason) {
  sourceCompanies = fallbackCompanies.slice();
  sourceBadge.textContent = 'Verified snapshot';
  sourceBadge.setAttribute('data-state', 'fallback');
  sourceDetail.textContent = 'Live data unavailable — Wikipedia revision ' + FALLBACK_REVISION + ', checked Aug 21, 2026.';
  retryButton.disabled = false;
  challengeNumber += 1;
  renderChallenge();
  setStatus('Snapshot ready. ' + reason);
}

async function loadLiveData() {
  if (activeController) activeController.abort();
  activeController = new AbortController();
  const timeoutId = setTimeout(function() { activeController.abort(); }, 8000);
  sourceBadge.textContent = 'Connecting';
  sourceBadge.setAttribute('data-state', 'loading');
  sourceDetail.textContent = 'Requesting the current constituent table…';
  retryButton.disabled = true;
  try {
    const response = await fetch(DATA_URL, { signal: activeController.signal });
    if (!response.ok) throw new Error('Source returned HTTP ' + response.status + '.');
    const payload = await response.json();
    if (!payload.parse || !payload.parse.text || !payload.parse.text['*']) throw new Error('Source response was incomplete.');
    sourceCompanies = parseCompanies(payload.parse.text['*']);
    sourceBadge.textContent = 'Live constituents';
    sourceBadge.setAttribute('data-state', 'live');
    sourceDetail.textContent = sourceCompanies.length + ' securities loaded • Wikipedia revision ' + payload.parse.revid;
    challengeNumber += 1;
    renderChallenge();
    setStatus('Live data ready. Match a company to its sector.');
  } catch (error) {
    const reason = error && error.name === 'AbortError' ? 'The live request timed out.' : 'The live request failed.';
    showFallback(reason);
  } finally {
    clearTimeout(timeoutId);
    retryButton.disabled = false;
  }
}

newButton.addEventListener('click', function() {
  challengeNumber += 1;
  renderChallenge();
});
retryButton.addEventListener('click', loadLiveData);

renderChallenge();
loadLiveData();

return {
  stop: function() {
    if (activeController) activeController.abort();
  }
};
{% endcapture %}


{% include runners/ui.html
  runner_id="sp500-javascript"
  challenge=sp_javascript_challenge
  code=sp_javascript_code
  height="1050px"
  output_height="1100px"
%}

**Example output (after data loads)**

```text
Live data ready. Match a company to its sector.
Matched 0 of 8 • Accuracy 100%
```

---

# Full Program Prototype

The full program uses the same verified snapshot, procedure, selection, iteration, Boolean logic, and accuracy calculation. It starts in Python, and the dropdown also provides complete Pseudocode and Java versions. The editable sample sectors supply input because this web runner does not provide terminal standard input.

{% capture sp_python_challenge %}
Run the complete sample sector challenge. Change the sample sectors to test different correct and incorrect choices.
{% endcapture %}

{% capture sp_python_code %}
companies = ["AAPL", "JPM", "XOM", "JNJ", "PG", "CAT", "NEE", "AMZN"]
expected_sectors = [
    "Information Technology", "Financials", "Energy", "Health Care",
    "Consumer Staples", "Industrials", "Utilities", "Consumer Discretionary"
]
attempts = []
current_company = 0

# Change these choices to test a different match sequence.
sample_sectors = [
    "Financials", "Information Technology", "Financials", "Energy",
    "Health Care", "Consumer Staples", "Industrials", "Utilities",
    "Consumer Discretionary",
]

def is_correct_sector(selected_sector, expected_sector):
    return selected_sector.lower() == expected_sector.lower()

for selected_sector in sample_sectors:
    ticker = companies[current_company]
    expected_sector = expected_sectors[current_company]
    print("Company:", ticker)
    print("Selected sector:", selected_sector)
    correct = is_correct_sector(selected_sector, expected_sector)
    attempts.append(correct)

    if correct:
        print(ticker, "matched", expected_sector + "!")
        current_company += 1
    else:
        print("Incorrect sector. The company returned to the watchlist.")

    if current_company == len(companies):
        break

accuracy = round((sum(attempts) / len(attempts)) * 100)
print("Sector challenge complete!")
print("Accuracy:", str(accuracy) + "%")
{% endcapture %}

{% capture sp_prototype_pseudocode %}
companies ← ["AAPL", "JPM", "XOM", "JNJ", "PG", "CAT", "NEE", "AMZN"]
expectedSectors ← ["Information Technology", "Financials", "Energy", "Health Care", "Consumer Staples", "Industrials", "Utilities", "Consumer Discretionary"]
attempts ← []
currentCompany ← 1

sampleSectors ← ["Financials", "Information Technology", "Financials", "Energy", "Health Care", "Consumer Staples", "Industrials", "Utilities", "Consumer Discretionary"]
sampleIndex ← 1

PROCEDURE isCorrectSector(selectedSector, expectedSector)
{
  RETURN(selectedSector = expectedSector)
}

REPEAT UNTIL (currentCompany > LENGTH(companies))
{
  selectedSector ← sampleSectors[sampleIndex]
  expectedSector ← expectedSectors[currentCompany]
  ticker ← companies[currentCompany]
  correct ← isCorrectSector(selectedSector, expectedSector)
  APPEND(attempts, correct)

  IF (correct)
  {
    DISPLAY("Correct: " + ticker + " matched " + expectedSector + ".")
    currentCompany ← currentCompany + 1
  }
  ELSE
  {
    DISPLAY("Incorrect: " + ticker + " returned to the watchlist.")
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

DISPLAY("Sector challenge complete!")
DISPLAY("Accuracy: " + correctAttempts + " of " + LENGTH(attempts))
{% endcapture %}

{% capture sp_prototype_java %}
public class Main {
    static String[] companies = {"AAPL", "JPM", "XOM", "JNJ", "PG", "CAT", "NEE", "AMZN"};
    static String[] expectedSectors = {"Information Technology", "Financials", "Energy", "Health Care", "Consumer Staples", "Industrials", "Utilities", "Consumer Discretionary"};
    static int currentCompany = 0;

    static boolean isCorrectSector(String selectedSector, String expectedSector) {
        return selectedSector.equalsIgnoreCase(expectedSector);
    }

    public static void main(String[] args) {
        String[] selectedSectors = {"Financials", "Information Technology", "Financials", "Energy", "Health Care", "Consumer Staples", "Industrials", "Utilities", "Consumer Discretionary"};
        int correctAttempts = 0;

        for (String selectedSector : selectedSectors) {
            if (currentCompany == companies.length) break;
            String ticker = companies[currentCompany];
            String expectedSector = expectedSectors[currentCompany];
            boolean correct = isCorrectSector(selectedSector, expectedSector);

            if (correct) {
                System.out.println("Correct: " + ticker + " matched " + expectedSector + ".");
                correctAttempts++;
                currentCompany++;
            } else {
                System.out.println("Incorrect: " + ticker + " returned to the watchlist.");
            }
        }

        System.out.println("Sector challenge complete!");
        System.out.println("Accuracy: " + correctAttempts + " of " + selectedSectors.length);
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
Company: AAPL
Selected sector: Financials
Incorrect sector. The company returned to the watchlist.

Company: AAPL
Selected sector: Information Technology
AAPL matched Information Technology!

...
Sector challenge complete!
Accuracy: 89%
```

---

# Reflection

JavaScript felt most natural for the interactive market board because it connects the live table to drag-and-drop, buttons, status updates, and an offline fallback. Python made the sector algorithm shorter and easier to read, while pseudocode showed the lists, procedure, selection, iteration, and Boolean logic without extra syntax.

The main challenge was keeping online data useful without making the assignment depend on the network. The program validates the returned table before using it and labels its source revision. If validation or the request fails, the verified snapshot is shown explicitly so a wrong choice still returns safely and the lesson still works.
