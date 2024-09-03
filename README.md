# chess-boardz
An exploration of chess openings, the resulting board states, and board representation models.

## Motivation
Chess notation records the sequence of moves of a game, but the same board state can be reached through multiple differing opening sequences.
This project primarily aims to determine ways different methods of encode a chess board state.
Also, it explores methods for transforming the board state given an existing board state and a move in standard chess notation.

## Modeling
These sections outline ideas for modeling pieces and the board.

### Pieces
> There are 6 different pieces.

* **Use 1's hex digit of unicode glyphs**:
  * 4 = ♔ (2654)
  * 5 = ♕ (2655)
  * *etc...*
* **1 byte: [Color:1, Type:3]**:
  * `0000` = empty
  * `0001` = ♔
  * `0002` = ♕
  * `1001` = ♚
  * `1002` = ♛

### Board


## Models

### 2D Integer Array


## Chess Unicode Characters
### Pictographs (`2654-265F`, `1FA00-1FA53`)
* White (2654-2659): ♔♕♖♗♘♙
* Black (265A-265F): ♚♛♜♝♞♟
* "Neutral" (1FA00-1FA05): 🨀🨁🨂🨃🨄🨅
* White, 90° (1FA09-1FA0E):
* Black, 90° (1FA0F-1FA14):
* Neutral, 90° (1FA14-1FA1A):
* White, 180° (1FA1E-1FA23):
* Black, 180° (1FA24-1FA29):
* Neutral, 180° (1FA2A-1FA2F):
* White, 270° (1FA33-1FA38):
* Black, 270° (1FA39-1FA3E):
* Neutral, 270° (1FA3F-1FA42):
