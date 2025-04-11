import { Observable } from 'rxjs';
import { Injectable, Logger } from '@nestjs/common';
import { ChatOpenAI, AzureChatOpenAI } from '@langchain/openai';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class OpenaiService {
    // https://js.langchain.com/docs/integrations/platforms/openai
    // https://js.langchain.com/docs/integrations/chat/azure

    private readonly logger = new Logger(OpenaiService.name);
    private readonly llm;
    private readonly model_name;
    private readonly llm_server_url = 'http://40.90.197.34:8001';
    constructor(
        private readonly configService: ConfigService
    ) {
        const openAIApiKey = this.configService.get('OPENAI_API_KEY');
        this.model_name = 'gpt-4o-mini';
        this.llm = new ChatOpenAI({
            model: this.model_name,
            temperature: 0,
            openAIApiKey,
            configuration: { baseURL: this.llm_server_url },
        });
    }

    // https://js.langchain.com/docs/integrations/chat/openai
    completion(content: string): Observable<string> {
        return new Observable((subscriber) => {
            this.llm
                .invoke(content)
                .then(async (response) => {
                    console.log(response);
                    for await (const part of response.content) {
                        console.log(part);
                        // subscriber.next(part);
                    }
                })
                .catch((error) => {
                    console.log(error);
                    return subscriber.error(error);
                });
        });
    }
}
