export interface GuildsListConfig {
    type: string;
  
    filters: {
      stat?: string,
      limit?: number,
      offset?: number
    };
  }