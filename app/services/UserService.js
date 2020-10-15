import { generateApiClient } from 'app/utils/apiUtils';

const configApi = generateApiClient('configApi');
export const fetchBankData = query =>
  configApi.get(`${query}`).then(res => res);
