## Traveling Shopper

An algorithmic solution to determine purchasing power across multiple international currencies by normalising data to a common base.

### The Challenge

Given a starting budget and a list of desired items (each with different currenty codes like USD, EUR, JPY, or CAD), determine how many items can be purchased **in the specific order provided**.

### Technical Strategy: Currency Normalisation

The core difficulty of this challenge is the inability to compare "apples to oranges" (e.g., subtracting Japanese Yen from a US Dollar budget). The solution uses a **Common Base** strategy:

    1.  **Lookup Table**: A constant object stores exchange rates relative to a single base currency (USD).

    2.  **Normalization Helper**: A `converter` function takes any `[value, currency]` pair and returns a standard numerical USD value.

    3. **Sequential Processing**:

        -   The budget is converted to USD.
        -   A loop iterates through the shopping list, converting each item's price to USD.
        -   A running balance is maintained; if an item's price exceeds the balance, the loop **breaks** immediately to satisfy the "purchase in order" requirement.

### Key Code Snippet

```JavaScript

// Normalisation Helper
function converter(value, curr) {
    return Number(value) * convTable[curr];
}

// Sequential Budget Check
for (let i = 0; i < convertedList.length; i++) {
    if (balance >= convertedlist[i]) {
        balance -= convertedList[i]
        count++
    } else {
        break; // stop shopping if funds are insufficient for the next item
    }
}
```

### Complexity Anaylsis

    - **Time Complexity**: O(N) - We iterate through the list of items once to convert prices and once to check the budget.

    - **Space Complexity**: O(N) - We store the converted USD prices in a new array to keep the original data immutable.

### Lessons Learned

    -   **Data Types Matter**: Learned that calculations involving `toFixed()` or string inputs must be cast back to `Number` to avoid logical errors in comparisons.

    -   **Early Exit Pattern**: Used the `break` statement to optimize the code, preventing unnecessary calculations once the budget limit is reached.

    - **Abstraction**: Build a reusable helper function (`converter`) to handle the transformation logic, making the main function much easier to read and degub.
