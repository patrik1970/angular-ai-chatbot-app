// src/app/services/chat.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ChatResponse } from '../models/chat.models';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private readonly API_URL_GEN = 'https://ragdemoapi20241118085132.azurewebsites.net/generation/get-chat-response'

  constructor(private http: HttpClient) {}

  getBotResponse(chatMessagesArg:{ role: string, content: string  }[]): Promise<ChatResponse> {
    const payload = {chatMessages: chatMessagesArg};

   return this.http.post<ChatResponse>(
      `${this.API_URL_GEN}`,
      payload
    ).pipe(
      map(response => response)
    ).toPromise().then(response => {
      if (!response) {
        throw new Error('Response is undefined');
      }
      return response; // Ensure the response is returned
    }); 
  }
}
