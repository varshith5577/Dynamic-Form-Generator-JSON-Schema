import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FormSchema, FormField } from "../types/form";
import { downloadJson } from "../utils/fileUtils";

interface FormPreviewProps {
  schema: FormSchema | null;
}

const FormPreview: React.FC<FormPreviewProps> = ({ schema }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [submissions, setSubmissions] = useState<any[]>([]);
  const watchedFields = watch();

  const renderField = (field: FormField) => {
    try {
      if (!field.id) {
        throw new Error("Field id is required");
      }

      const commonProps = {
        ...register(field.id, {
          required: field.required,
          pattern: field.validation?.pattern
            ? {
                value: new RegExp(field.validation.pattern),
                message: field.validation.message || "", // Set a default empty string if message is undefined
              }
            : undefined,
        }),
        placeholder: field.placeholder,
        className:
          "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white",
      };
      switch (field.type) {
        case "textarea":
          return <textarea {...commonProps} rows={4} />;

        case "select":
          return (
            <select {...commonProps}>
              <option value="">Select an option</option>
              {field.options?.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          );

        case "radio":
          return (
            <div className="space-y-2">
              {field.options?.map((opt) => (
                <label key={opt.value} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    {...register(field.id, { required: field.required })}
                    value={opt.value}
                    className="form-radio"
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    {opt.label}
                  </span>
                </label>
              ))}
            </div>
          );

        default:
          return <input {...commonProps} type={field.type} />;
      }
    } catch (error) {
      console.error(error);
      return (
        <div className="text-red-500">
          <p>
            Error: Each field must include an "id" for the preview to be
            generated.
          </p>
        </div>
      );
    }
  };

  const onSubmit = (data: any) => {
    const submission = {
      timestamp: new Date().toISOString(),
      data,
    };
    setSubmissions([...submissions, submission]);
    console.log("Form submitted:", submission);
    alert("Form submitted successfully!");
  };

  if (!schema) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
        <p className="text-gray-600 dark:text-gray-300">
          Enter a valid JSON Schema to generate the Dynamic Form according to the Schema
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          {schema.formTitle}
        </h2>
        {schema.formDescription && (
          <p className="text-gray-600 dark:text-gray-300">
            {schema.formDescription}
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {schema.fields.map((field) => (
          <div key={field.id} className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>

            {renderField(field)}

            {errors[field.id] && (
              <p className="text-red-500 text-sm">
                {field.validation?.message || "This field is required"}
              </p>
            )}

            {watchedFields[field.id] && (
              <p className="text-green-500 text-sm">
                Current value: {watchedFields[field.id]}
              </p>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>

      {submissions.length > 0 && (
        <div className="mt-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Submissions ({submissions.length})
            </h3>
            <button
              onClick={() => downloadJson(submissions, "form-submissions.json")}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Download All
            </button>
          </div>
          <div className="max-h-40 overflow-y-auto">
            {submissions.map((sub, idx) => (
              <div
                key={idx}
                className="text-sm text-gray-600 dark:text-gray-300 mb-2 p-2 bg-gray-50 dark:bg-gray-700 rounded"
              >
                {new Date(sub.timestamp).toLocaleString()}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FormPreview;
