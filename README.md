# Bowling

Usually the candidate share his screen and clone the repository to start quickly with a boilerplate.

- We're not looking for a perfect solution, but we want to see how you approach the problem and how you think.
- If you have any questions, feel free to ask.
- You can use any resource you want.
- We'll be there to guide you if you're stuck.

## Setup

```bash
pnpm install
# You might want to install recommended VSCode extensions
pnpm run test # It will watch
```

## Constraints

- We write tests first, then implement to make them pass.

## Game rules

- A game consists of rounds, where 10 pins are arranged on the board.
- The goal is to knock down the maximum of pins.
- 1 pin down is 1 point.
- Each round consists of maximum 2 rolls.
- If the player knocks down all 10 pins on the first roll it’s called a "strike" and the round ends. The player scores 10 points plus the number of pins knocked down on the next two rolls.
- If the player knocks down some pins on the first roll and the remainder on the second roll it’s called a "spare". The player scores 10 points plus the number of pins knocked down on the next roll.
