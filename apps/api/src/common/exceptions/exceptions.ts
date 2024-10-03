export const exceptions = {
  AUTH: {
    WRONG_PASSWORD: 'Mot de passe erroné',
    EMPTY_REFRESH_TOKEN: 'Refresh token cannot be empty',
    INVALID_TOKEN: 'Invalid/Expired token',
    OTP_CODE_EXPIRED: 'Code Otp expiré',
    WRONG_OTP_CODE: 'Code otp erroné',
    ACTIVATED: 'ACTIVER',
    UNACTIVATED: 'NON ACTIVER',
  },
  USER: {
    NOT_FOUND: 'Utilisateur non trouvé',
    DELETED: 'L\'utilisateur a été supprimé',
    EMAIL_ALREADY_REGISTERED: (email: string) => {
      return `Email ${email} déjà enregistré`
    },
    USERNAME_ALREADY_REGISTERED: (username: string) => {
      return `Username ${username} déjà enregistré`
    },
    WRONG_OLD_PASSWORD: `L'ancien mot de passe ne correspond pas`,
  },
  EVENT: {
    NOT_FOUND: 'Événement non trouvé',
  },
  TICKET: {
    NOT_FOUND: 'Ticket non trouvé',
    INVALID: 'Événement non valide',
    INSUFFICIENT_STOCK: 'Stock de ticket insuffisant',
    SALES_NOT_YET_OPEN: 'La vente de billets n\'est pas encore commencé',
    SALES_CLOSED: 'La vente de tickets est terminée',
    DELETE_PUBLISHED_TICKET: 'Impossible de supprimer un ticket publié',
    DELETE_PURCHASED_TICKET: 'Impossible de supprimer le ticket acheté',
  },
  PURCHASE: {
    NOT_FOUND: 'Achat non trouvé',
    INVALID: 'Ticket non valide',
    TICKET_USED: 'Le ticket a été utilisé',
  },
  VALIDATION: {
    CONTAINS_INVALID_JSON: (e: string) => `${e} contains invalid JSON`,
    CONTAINS_INVALID_DATETIME: (e: string) => `${e} contains invalid DateTime`,
  },
  FILE: {
    NOT_FOUND: 'Le fichier n\'a pas été trouvé',
    UPLOAD_FAILED: 'Échec du téléchargement du fichier',
  },
  WITHDRAW: {
    INSUFFICIENT_BALANCE: 'Solde insuffisant',
  },
  MAIL: {
    SENDING_FAILED: 'Échec de l\'envoi du courrier électronique',
  },
}
