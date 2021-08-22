import Joi from "joi";
import { CATEGORIES, SUBCATEGORIES } from "@/constants/pin";

const TITLE_MIN_LENGTH = 3;
const TITLE_MAX_LENGTH = 100;
const DESCRIPTION_MIN_LENGTH = 3;
const DESCRIPTION_MAX_LENGTH = 500;

const validationSchema = Joi.object({
  title: Joi.string().min(TITLE_MIN_LENGTH).max(TITLE_MAX_LENGTH).required(),
  description: Joi.string()
    .min(DESCRIPTION_MIN_LENGTH)
    .max(DESCRIPTION_MAX_LENGTH)
    .required(),
  remainingCount: Joi.number().min(0),
  category: Joi.string().valid(...CATEGORIES),
  subcategory: Joi.string().valid(...SUBCATEGORIES),
}).unknown(true);

export default validationSchema;
