import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {muxInput} from 'sanity-plugin-mux-input'

export default defineConfig({
  name: 'default',
  title: 'studio-2',

  projectId: 'k2g82q6u',
  dataset: 'production-2',

  plugins: [structureTool(), muxInput({mp4_support: 'standard'}), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
