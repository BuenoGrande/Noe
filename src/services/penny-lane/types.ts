export interface PennyLaneUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  company_name: string;
}

export interface PennyLaneInvoice {
  id: number;
  invoice_number: string;
  label: string;
  status: string;
  date: string;
  deadline: string;
  currency: string;
  amount: number;
  customer_id: number;
}

export interface PennyLaneCustomer {
  id: number;
  name: string;
  email: string | null;
  phone: string | null;
  address: string | null;
  billing_iban: string | null;
}

export interface PennyLanePaginatedResponse<T> {
  invoices?: T[];
  customers?: T[];
  total_pages: number;
  current_page: number;
  total_invoices?: number;
  total_customers?: number;
}
