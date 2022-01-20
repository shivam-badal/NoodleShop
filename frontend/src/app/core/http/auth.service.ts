import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {LoginDTO} from "./dto/login.dto";
import {User} from "../../modules/authentication/models/user.model";
import {tap, map} from "rxjs/operators";
import {VerificationInfoDTO} from "./dto/verification-info.dto";
import {RegisterDTO} from "./dto/register.dto";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  loginInformation: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(undefined);

  logout(): Observable<any> {
    this.loginInformation.next(undefined);
    return this.http.delete("/api/auth/logout");
  }

  login(loginDto: LoginDTO): Observable<User>{
    return this.http.post<User>("/api/auth/login", loginDto)
      .pipe(
        tap((loginInfo: User): void => {
          console.log("Login", loginInfo);
          this.handleAuthentication(loginInfo);
        }),
        map((loginInfo: User): User => loginInfo)
    );
  }

  register(registerDto: RegisterDTO): Observable<User> {
    return this.http.post<User>("/api/auth/register", registerDto);
  }

  isLoggedIn(): boolean {
    console.log('Login Value: ', !!this.loginInformation.getValue())
    return !!this.loginInformation.getValue()
  }

  verify(): Observable<any> {
    return this.http.get("/api/auth/verify")
  }

  autoLogin(): void {
    this.verify().subscribe((loginInformation: VerificationInfoDTO) => {
      if (!loginInformation.loggedIn) {
        this.loginInformation.next(undefined)
      }

      this.loginInformation.next(loginInformation.user)
    });
  }

  handleAuthentication(user: User) {
    this.loginInformation.next(user);
  }
}
