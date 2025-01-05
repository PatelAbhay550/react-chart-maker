import Ajv from "ajv";

const ajv = new Ajv();

const validateSchema = (data, schema) => {
  const validate = ajv.compile(schema);
  const isValid = validate(data);

  if (!isValid) {
    console.error("Schema validation errors:", validate.errors);
    throw new Error("Invalid chart configuration.");
  }

  return true;
};

export default validateSchema;
