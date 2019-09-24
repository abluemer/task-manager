
  export class Task {
    id: number;
    title?: string;
    description?: string;
  }
    
  export function createInitialTask(): Task {
    return {
      id: null,
    };
  }



  