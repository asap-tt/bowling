# Bowling Game

This is a pair-programming exercise where we'll implement a bowling score calculator together. Don't worry if you're not familiar with bowling - we'll guide you through it!

## Getting Started

1. Clone and setup the project:
```bash
pnpm install
pnpm run test # This will run tests in watch mode
```

## How We'll Work Together

- This is a collaborative exercise - feel free to ask questions at any time
- We use Test-Driven Development (TDD): write a failing test first, then make it pass
- There are no "gotcha" moments - we're here to help you succeed
- We're not looking for a perfect solution, but want to see how you approach the problem
- You can use any resource you want
- We'll be there to guide you if you're stuck

## Bowling Rules (with examples)

1. Basic Scoring:
   - Each game has 10 frames
   - Each frame has up to 2 rolls to knock down 10 pins
   - Each pin knocked down is worth 1 point

2. Special Scores:
   - Strike (X): All 10 pins down in first roll
     Example: [X,5,3] = 10 + (5+3) + (5+3) = 26
   - Spare (/): All 10 pins down in two rolls
     Example: [7,/,4] = 10 + 4 + 4 = 18

## Suggested First Steps

1. Start with the simplest case: scoring a single roll
2. Then handle a complete frame (two rolls)
3. Move on to special cases (spares and strikes) later

Need help? That's perfectly fine! Let's solve this together.

## Technical Setup

You might want to install the recommended VSCode extensions for a better development experience:
- ESLint
- Prettier
- Code Spell Checker
