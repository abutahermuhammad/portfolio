import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { codeInput } from '@sanity/code-input';
import { media } from 'sanity-plugin-media';
import { visionTool } from '@sanity/vision';
import { contentGraphView } from 'sanity-plugin-graph-view';
import { table } from '@sanity/table';
import { imageHotspotArrayPlugin } from "sanity-plugin-hotspot-array";
import schemas from './schemas/schema';

export default defineConfig({
    title: "Abu Taher Muhammad",
    projectId: "1at06ab8",
    dataset: "production",
    plugins: [
        deskTool(),
        codeInput(),
        media(),
        visionTool(),
        contentGraphView(),
        table(),
        imageHotspotArrayPlugin(),
    ],
    schema: {
        types: schemas
    },
});