export interface PayFitCompany {
  id: string;
  name: string;
  siret: string;
  address: {
    street: string;
    city: string;
    zipCode: string;
    country: string;
  };
}

export interface PayFitCollaborator {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  department: string;
  startDate: string;
  status: string;
}
