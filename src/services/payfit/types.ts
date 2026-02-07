export interface PayFitCompany {
  id: string;
  name: string;
  siren: string;
  siret: string;
  address: string;
  postalCode: string;
  city: string;
  country: string;
  nbActiveContracts: number;
}

export interface PayFitCollaborator {
  id: string;
  matricule: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: string;
  terminationDate: string | null;
  emails: { email: string; type: string }[];
  teamName: string | null;
  contracts: {
    id: string;
    startDate: string;
    endDate: string | null;
    status: string;
  }[];
}
