import { environment } from '@environment';


export class TokenManager {
    private static _instance: TokenManager;
    static get instance() {
        if (!TokenManager._instance) {
            TokenManager._instance = new TokenManager();
        }
        return TokenManager._instance;
    }
    get token(): string | null {
        const _token = localStorage.getItem(environment.tokenKey);
        if (this.isOneTimeToken) {
            this.rememberToken();
            this.forgetToken();
        }
        return _token;
    }
    set token(_token: string) {
        localStorage.setItem(environment.tokenKey, _token);
    }
    get hasToken(): boolean {
        return !!this.token;
    }
    get isOneTimeToken(): boolean {
        return !!localStorage.getItem(environment.tokenRememberKey);
    }
    rememberToken() {
        localStorage.setItem(environment.tokenRememberKey, 'true');
    }
    forgetToken() {
        localStorage.removeItem(environment.tokenRememberKey);
    }
    removeToken() {
        localStorage.removeItem(environment.tokenKey);
    }
}
