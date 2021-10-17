export interface Bucket {
  id?: number;
  name: string;
  location: string;
  show_storage: boolean;
  files: any[];
}