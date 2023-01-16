import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Message} from '../../models/message.model';
import {endpoints} from '../../utils/endpoints';
import {MessageInput} from '../../inputs/message.input';

@Injectable()
export class MessageService {
  private readonly baseUrl: string;

  constructor(
    private readonly httpClient: HttpClient,
  ) {
    this.baseUrl = environment.apiBaseUrl;
  }

  create(input: MessageInput): Observable<Message> {
    return this.httpClient.post<Message>(`${this.baseUrl}${endpoints.messages}`, input);
  }

  findAll(): Observable<Message[]> {
    return this.httpClient.get<Message[]>(`${this.baseUrl}${endpoints.messages}`);
  }

}
