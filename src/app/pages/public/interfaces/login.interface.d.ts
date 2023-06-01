import { NextStep } from '../constants';

export interface AuthCredential {
  username: string;
  password: string;
  remember?: boolean;
}

export interface AuthSetupResult {
  nextStep: NextStep.Setup;
  mfaToken: string;
  qrUrl: string;
}

export interface AuthVerifyResult {
  nextStep: NextStep.Verify;
  mfaToken: string;
  platform: string;
}

export interface AuthDoneResult {
  nextStep: NextStep.Done;
  accessToken: string;
  refreshToken: string;
}

export type AuthResult = AuthSetupResult | AuthVerifyResult | AuthDoneResult;

export type AuthResp = IApi.Response<AuthResult>;

export type VerifyResp = IApi.Response<{
  refreshToken: string;
  accessToken: string;
}>;
