// src/schemas/wines-schema.ts
import { z } from 'zod';

const ProducerSchema = z.object({
  id: z.number(),
  name: z.string(),
  title: z.string().nullable(),
  display_name: z.string(),
});

const RegionSchema = z.object({
  id: z.number(),
  name: z.string(),
  country: z.string(),
  language: z.string(),
});

const WineSchema = z.object({
  id: z.number(),
  lwin: z.string(),
  display_name: z.string(),
  color: z.string(),
  type: z.string(),
  sub_type: z.string(),
  residual_sugar: z.number().nullable(),
  producer: ProducerSchema,
  region: RegionSchema,
});

const MetaSchema = z.object({
  current_page: z.number(),
  last_page: z.number(),
  per_page: z.number(),
  total: z.number(),
  from: z.number().nullable(),
  to: z.number().nullable(),
});

export const WinesAPIResponseSchema = z.object({
  data: z.array(WineSchema),
  meta: MetaSchema,
});

// Tipos inferidos, para usar directamente en tus componentes
export type Wine = z.infer<typeof WineSchema>;
export type WinesAPIResponse = z.infer<typeof WinesAPIResponseSchema>;