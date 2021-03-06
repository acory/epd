type InterventionListData = {
  actual_amount: null;
  all_currencies_are_consistent: boolean;
  budget_currency: null;
  country_programme: number | null;
  cp_outputs: number[];
  cso_contribution: string;
  document_type: string;
  donor_codes: number[];
  donors: number[];
  end: string | null;
  flagged_sections: number[];
  fr_currencies_are_consistent: boolean | null;
  fr_currency: string;
  frs_earliest_start_date: string | null;
  frs_latest_end_date: string | null;
  frs_total_frs_amt: null;
  frs_total_intervention_amt: null;
  frs_total_outstanding_amt: null;
  grants: [];
  id: number;
  location_p_codes: [];
  metadata: {};
  multi_curr_flag: boolean;
  number: string;
  offices: number[];
  offices_names: string[];
  partner_name: string;
  section_names: string[];
  sections: number[];
  start: string | null;
  status: string;
  title: string;
  total_budget: string;
  total_unicef_budget: string;
  unicef_cash: string;
  unicef_focal_points: number[];
};
