import { Injectable } from "@angular/core";
import { UserDTO } from "../models/user.dto";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";

@Injectable()
export class AuthService {

    constructor(
        public http: HttpClient) {
    }

    authenticate(creds : UserDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/login`, 
            creds,
            {
                observe: 'response',
                responseType: 'text'
            });
    }

    successfulLogin(authorizationValue : string) {
        localStorage.setItem('Authorization', authorizationValue);
    }

    logout() {
        localStorage.removeItem('Authorization');
    }

    /*
    refreshToken() {
        return this.http.post(
            `${API_CONFIG.baseUrl}/auth/refresh_token`, 
            {},
            {
                observe: 'response',
                responseType: 'text'
            });
    }



 */
}