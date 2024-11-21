interface FormOption {
   value: string;
   label: string;
 }
 
 interface ValidationRule {
   pattern?: string;
   message?: string;
   required?: boolean;
   min?: number;
   max?: number;
 }
 
 interface FormField {
   id: string;
   type: 'text' | 'email' | 'select' | 'radio' | 'textarea' | 'checkbox' | 'number';
   label: string;
   required?: boolean;
   placeholder?: string;
   options?: FormOption[];
   validation?: ValidationRule;
 }
 
 interface FormSchema {
   formTitle: string;
   formDescription?: string;
   fields: FormField[];
 }
 
 export type { FormField, FormSchema, FormOption, ValidationRule };
 