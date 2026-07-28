import { RenderMode, ServerRoute } from '@angular/ssr';
import { WORKSHOPS } from './workshops.data';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'workshops/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return WORKSHOPS.map((workshop) => ({ slug: workshop.slug }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
