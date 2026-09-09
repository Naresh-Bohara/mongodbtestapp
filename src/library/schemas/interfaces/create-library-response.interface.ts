import { Library } from '../library.schema';

export interface CreateLibraryResponse {
  message: string;
  library: Library;
}
