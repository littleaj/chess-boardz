enum ChessPieceType {
  PAWN,
  KNIGHT,
  BISHOP,
  ROOK,
  QUEEN,
  KING,
}

enum ChessColor {
  BLACK, WHITE
}

interface ChessPiece {
  color: ChessColor;
  type: ChessPieceType;
}
