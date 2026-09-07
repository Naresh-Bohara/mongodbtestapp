import { StudentDocument } from '../student.schema';

export class DeleteStudentResponseDto {
  message: string;
  student: StudentDocument;
}