export interface BurgerInterface {
  isOpen: boolean;
}

interface ErrorMessage {
  error: boolean;
  message: string;
}

export interface ErrorStates {
  inn: ErrorMessage;
  documentsCount: ErrorMessage;
  dates: ErrorMessage;
}
