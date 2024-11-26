/**

* Represents a message in the chat.

*/

export class ChatMessage {

    /**

     * The role of the message sender, e.g., "system", "user", "assistant".

     */

    public role: string;
 
    /**

     * The content of the message.

     */

    public content: string;
 
    /**

     * Creates an instance of ChatMessage.

     * @param role - The role of the message sender.

     * @param content - The content of the message.

     */

    constructor(role: string, content: string) {

        this.role = role;

        this.content = content;

    }

}
 
/**
* Represents metadata associated with an embedding.
*/
export class EmbeddingMetaData {
    /**
     * The URI associated with the embedding.
     */
    public uri: string;
 
    /**
     * The date and time when the embedding was created.
     */
    public createdDateTime: Date;
 
    /**
     * The source of the embedding.
     */
    public source: string;
 
    /**
     * A dictionary of tags associated with the embedding.
     */
    public tags: { [key: string]: string };
 
    /**
     * Creates an instance of EmbeddingMetaData.
     * @param uri - The URI associated with the embedding.
     * @param createdDateTime - The creation date and time of the embedding.
     * @param source - The source of the embedding.
     * @param tags - A dictionary of tags associated with the embedding.
     */
    constructor(
        uri: string,
        createdDateTime: Date,
        source: string,
        tags: { [key: string]: string }
    ) {
        this.uri = uri;
        this.createdDateTime = createdDateTime;
        this.source = source;
        this.tags = tags;
    }
}
 
/**

* Represents a retrieved document with various properties.

*/

export class RetrievedDocument {

    /**

     * The URI of the document.

     */

    public uri: string; // Using string to represent URI
 
    /**

     * The name of the table associated with the document.

     */

    public readonly tableName: string;
 
    /**

     * The content of the document.

     */

    public content: string;
 
    /**

     * The title of the document.

     */

    public title: string;
 
    /**

     * Optional metadata associated with the document's embedding.

     */

    public readonly metaData?: EmbeddingMetaData;
 
    /**

     * The chunk identifier for the document.

     */

    public chunkId: string;
 
    /**

     * Optional rerank score for the document.

     */

    public rerankScore?: number;
 
    /**

     * Additional data as key-value pairs.

     */

    public additionalData: { [key: string]: string };
 
    /**

     * Creates an instance of RetrievedDocument.

     * @param uri - The URI of the document.

     * @param tableName - The name of the table.

     * @param content - The content of the document.

     * @param title - The title of the document.

     * @param metaData - Optional embedding metadata.

     * @param chunkId - The chunk identifier.

     * @param rerankScore - Optional rerank score.

     * @param additionalData - Additional key-value data.

     */

    constructor(

        uri: string,

        tableName: string,

        content: string,

        title: string,

        metaData: EmbeddingMetaData | undefined,

        chunkId: string,

        rerankScore: number | undefined,

        additionalData: { [key: string]: string }

    ) {

        this.uri = uri;

        this.tableName = tableName;

        this.content = content;

        this.title = title;

        this.metaData = metaData;

        this.chunkId = chunkId;

        this.rerankScore = rerankScore;

        this.additionalData = additionalData;

    }

}
 
/**

* Represents the response from a chat, including messages, citations, and intent.

*/

export class ChatResponse {

    /**

     * An array of chat messages.

     */

    public chatMessages: ChatMessage[] = [];
 
    /**

     * An array of retrieved documents as citations.

     */

    public citations: RetrievedDocument[] = [];
 
    /**

     * The intent of the chat response.

     */

    public intent: string;
 
    /**

     * Creates an instance of ChatResponse.

     * @param intent - The intent of the response.

     * @param chatMessages - Optional array of chat messages.

     * @param citations - Optional array of retrieved documents.

     */

    constructor(

        intent: string,

        chatMessages: ChatMessage[] = [],

        citations: RetrievedDocument[] = []

    ) {

        this.intent = intent;

        this.chatMessages = chatMessages;

        this.citations = citations;

    }

}

 