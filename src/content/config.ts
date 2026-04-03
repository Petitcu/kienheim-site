import { defineCollection, z } from 'astro:content';

// ── Actualités ───────────────────────────────────────────────────────
const actualites = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    date:        z.coerce.date(),
    description: z.string(),
    categorie:   z.enum(['Information', 'Événement', 'Travaux', 'Associations']),
    image:       z.string().optional(),
  }),
});

// ── Événements ───────────────────────────────────────────────────────
const evenements = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    date_debut:  z.coerce.date(),
    date_fin:    z.coerce.date().optional(),
    lieu:        z.string().optional(),
    description: z.string(),
    image:       z.string().optional(),
  }),
});

// ── Conseil municipal ────────────────────────────────────────────────
const conseil = defineCollection({
  type: 'content',
  schema: z.object({
    title:        z.string(),
    date:         z.coerce.date(),
    document_pdf: z.string().optional(),
  }),
});

// ── Bulletins (KienheiMAG) ───────────────────────────────────────────
const bulletins = defineCollection({
  type: 'content',
  schema: z.object({
    title:            z.string(),
    numero:           z.number().int().positive(),
    date:             z.coerce.date(),
    fichier_pdf:      z.string(),
    image_couverture: z.string().optional(),
  }),
});

// ── Élus ─────────────────────────────────────────────────────────────
const elus = defineCollection({
  type: 'content',
  schema: z.object({
    nom:        z.string(),
    fonction:   z.enum([
      'Maire',
      '1er Adjoint',
      '2ème Adjoint',
      '3ème Adjoint',
      'Conseiller municipal',
      'Conseillère municipale',
    ]),
    ordre:      z.number().int().positive(),
    commission: z.string().optional(),
    photo:      z.string().optional(),
  }),
});

// ── Pages fixes ──────────────────────────────────────────────────────
const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  actualites,
  evenements,
  conseil,
  bulletins,
  elus,
  pages,
};
