
type ChessBoardFile = "a"|"b"|"c"|"d"|"e"|"f"|"g"|"h";
type ChessBoardRank = 1|2|3|4|5|6|7|8;

enum PlayerAction {
  MOVE, OFFER_DRAW, ACCEPT_DRAW, REJECT_DRAW, RESIGN
}

enum ChessMoveType {
  MOVE, CAPTURE, CASTLE_QUEEN, CASTLE_KING, EN_PASSANT, PROMOTE_QUEEN, PROMOTE_ROOK, PROMOTE_BISHOP, PROMOTE_KNIGHT
}

enum ChessMoveEvent {
  CHECK, CHECKMATE, STALEMATE, PROMOTION
}

enum WinType {
  CHECKMATE, RESIGNATION
}

enum DrawType {
  STALEMATE, MOVE_LIMIT, REPETITION, AGREEMENT, MATERIAL
}

enum GameResultState {
  WHITE_WINS, BLACK_WINS, DRAW
}

type SpaceIndicator = {
  file?: ChessBoardFile;
  rank?: ChessBoardRank;
}

interface ChessMove {
  piece: ChessPiece;
  start?: SpaceIndicator;
  destination: SpaceIndicator;
  captured?: {
    piece: ChessPiece;
    location?: SpaceIndicator;
  };
  type: ChessMoveType;
}

interface ChessNotation<T> {
  encodeMove(move: ChessMove): T;
}

const StandardChessNotation = new class implements ChessNotation<string> {
  private pieceMap: string[] = ["", "N", "B", "R", "Q", "K"];
  private encodeSquare(square: SpaceIndicator): string {
    if (!square) {
      return "";
    }
    return `${square?.file || ""}${square?.rank || ""}`;
  }

  private encodePiece(piece: ChessPiece): string {
    return this.pieceMap[piece.type];
  }

  private encodeNormalMove(piece: ChessPiece, destination: SpaceIndicator, start?: SpaceIndicator): string {
    return `${this.encodePiece(piece)}${this.encodeSquare(start)}${this.encodeSquare(destination)}`;
  }

  encodeMove(move: ChessMove): string {
    switch (move.type) {
      case ChessMoveType.MOVE:
        return this.encodeNormalMove(move.piece, move.destination);
      case ChessMoveType.EN_PASSANT:
      case ChessMoveType.CAPTURE:
        // TODO
        break;
      case ChessMoveType.CASTLE_QUEEN:
        // TODO
        break;
      case ChessMoveType.CASTLE_KING:
        // TODO
        break;
    }
  }

};
