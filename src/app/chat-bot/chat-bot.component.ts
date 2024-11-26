import { Component } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { last } from 'rxjs';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.scss'
})
export class ChatBotComponent {
  userData = {
    message: '',
    file: {
      data: null,
      mime_type: ''
    }
  };
  chatHistory: Array<{ role: string, parts: Array<any> }> = [];
  chatMessages: { role: string; content: string; }[] = [];
  isEmojiPickerVisible: boolean = false;

  constructor(private chatService: ChatService) {}

  onEmojiClick(event: any) {
    this.userData.message += event.emoji.native;
  }

  async sendMessage() {
    if (!this.userData.message.trim()) return;

    // Lägg till användarmeddelandet i historiken
    this.chatMessages.push({
      role: 'user',
      content: this.userData.message
    });
    
    // Nollställ meddelandet
    const userMessage = this.userData.message;
    this.userData.message = '';

    // Visa botens svar
    try {
      const response = await this.chatService.getBotResponse(this.chatMessages);
      this.chatMessages.push(response.chatMessages[response.chatMessages.length - 1]); 
      
    } catch (error) {
      console.error(error);
      this.chatMessages.push({
        role: 'Assistant',
        content: 'An error occurred: ' + (error as any).message 
      });
      
    }
  }
}
