import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Contact} from "../../models/contact.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {endpoints} from "../../utils/endpoints";

@Injectable()
export class ContactService {
  private readonly baseUrl: string;
  constructor(private readonly httpClient: HttpClient) {
    this.baseUrl = environment.apiBaseUrl;
  }
  findAll(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(`${this.baseUrl}${endpoints.contacts}`);
  }

  findOne(id: string): Observable<Contact> {
    return this.httpClient.get<Contact>(`${this.baseUrl}${endpoints.contacts}/${id}`);
  }
}
