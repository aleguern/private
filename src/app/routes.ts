export const ROUTES_DEBUT = {
    ROOT: '',
    INFORMATIONS_CLES: 'informations-cles',
}

export const ROUTES_INFORMATIONS = {
    CHOIX_TITULAIRE: 'choix-titulaire',
    INFORMATIONS_PERSONNELLES: 'informations-personnelles',
    ADRESSE: 'adresse',
    CONTACT: 'contact',
    RECAPITULATIF: 'recapitulatif',
};

export const INVESTOR_PROFILE = {
    CUSTKN: 'votre-profile',
    EXPERIENCE: 'votre-experience',
}

export const ROUTES_MANDAT = {
    CHOIX_MANDAT: 'choix-mandat'
}

export const PAYMENT = {
    PAYMENT: 'versement',
    VALIDATION: 'validation',
}

export const CONTRACT = {
    CONTRACT: 'contrats'
}

export const DOCUMENTS = {
    DOCUMENTS: 'documents'
}

export const SIGN = {
    SIGN: 'signature'
}

export const ROADMAP = [
    { name: 'Informations', routes: ROUTES_INFORMATIONS, step: 1, time: 1 },
    { name: 'Profil investisseur', routes: INVESTOR_PROFILE, step: 2, time: 2 },
    { name: 'Mode de gestion', routes: ROUTES_MANDAT, step: 3, time: 2 },
    { name: 'Versement', routes: PAYMENT, step: 4, time: 2 },
    { name: 'Contrat', routes: CONTRACT, step: 5, time: 2 },
    { name: 'Justificatifs', routes: DOCUMENTS, step: 6, time: 2 },
    { name: 'Signature', routes: SIGN, step: 7, time: 2 },
];

export interface RoadmapI {
    name: string,
    routes: object,
    step: number,
    time: number
}
