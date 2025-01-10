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

## Bowling Rules

- A bowling game consists of 10 frames. 
- In each frame, you have two opportunities to knock down 10 pins.
- The score for the frame is the total number of pins knocked down, plus bonuses for strikes and spares.
- A spare is when you knock down all 10 pins in two tries
- A strike is when you knock down all 10 pins on your first try. The frame ends immediately.
- Bonuses are awarded for strikes and spares, based on your next rolls.
- For a spare, the bonus is the number of pins knocked down on your next roll.
- For a strike, the bonus is the number of pins knocked down on your next two rolls.

- For example:
  - If you bowl a spare, then an 8, your score for the spare frame would be: 10 + 8 = 18
  - If you bowl a strike, then an 8 and a 1, your score for the strike frame would be: 10 + 8 + 1 = 19

## Suggested First Steps

1. Start with the simplest case you can think of
2. Build up complexity gradually
3. We can discuss the rules in more detail as we go

Need help? That's perfectly fine! Let's solve this together.

## Technical Setup

You might want to install the recommended VSCode extensions for a better development experience:
- ESLint
- Prettier
- Code Spell Checker
