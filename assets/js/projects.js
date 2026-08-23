// assets/js/projects.js
// Project data — controls grid display order, filter categories,
// hero images, GLightbox galleries, and delivery page links.
// 08/26/2026
// me an' Claude.ai
// MAINTENANCE:
//   - Change 'priority' to reorder the grid (lower = earlier)
//   - Add images to 'gallery' array as photos become available
//   - Set 'featured: true' on up to 5 projects for hero slideshow
//   - Set 'delivery_url' when a cost study page exists
//   - 'type' drives filter buttons: 'current' | 'new-construction' | 'renovation'
//
// Image paths are relative to index.html (project root).
// All portfolio images live in assets/img/portfolio/

export const projects = [

  // ── Current / In Progress ─────────────────────────────────────

  {
    id: 13,
    priority: 1,
    name: 'Modern Bungalow',
    type: 'current',
    year: 2026,
    location: 'Camden, ME',
    featured: true,
    hero: 'assets/img/portfolio/modern-bungalow-camden-hero.webp',
    delivery_url: null,
    gallery: [
      // Add detail photos as they become available
      // { src: 'assets/img/portfolio/modern-bungalow-camden-01.webp', caption: 'Caption here' },
    ],
  },

  {
    id: 14,
    priority: 2,
    name: 'Modern Bungalow',
    type: 'current',
    year: 2026,
    location: 'Phillips, ME',
    featured: true,
    hero: 'assets/img/portfolio/modern-bungalow-phillips-hero.webp',
    delivery_url: null,
    gallery: [],
  },

  // ── Recent Completed ──────────────────────────────────────────

  {
    id: 10,
    priority: 3,
    name: 'Modernist Greek Revival Cottage',
    type: 'new-construction',
    year: 2024,
    location: 'Belfast, ME',
    featured: true,
    hero: 'assets/img/portfolio/greek-revival-belfast-hero.webp',
    delivery_url: null,
    gallery: [
      { src: 'assets/img/portfolio/greek-revival-belfast-01.webp', caption: 'Framing complete' },
      { src: 'assets/img/portfolio/greek-revival-belfast-02.webp', caption: '' },
      { src: 'assets/img/portfolio/greek-revival-belfast-03.webp', caption: '' },
      { src: 'assets/img/portfolio/greek-revival-belfast-04.webp', caption: '' },
      { src: 'assets/img/portfolio/greek-revival-belfast-05.webp', caption: '' },
    ],
  },

  {
    id: 12,
    priority: 4,
    name: 'Modern Colonial',
    type: 'new-construction',
    year: 2024,
    location: 'Liberty, ME',
    featured: true,
    hero: 'assets/img/portfolio/modern-colonial-liberty-hero.webp',
    delivery_url: null,
    gallery: [
      { src: 'assets/img/portfolio/modern-colonial-liberty-01.webp', caption: '' },
      { src: 'assets/img/portfolio/modern-colonial-liberty-02.webp', caption: '' },
      { src: 'assets/img/portfolio/modern-colonial-liberty-03.webp', caption: '' },
    ],
  },

  {
    id: 17,
    priority: 5,
    name: 'Modern A-Frame',
    type: 'new-construction',
    year: 2024,
    location: 'Lincolnville, ME',
    featured: false,
    hero: 'assets/img/portfolio/modern-aframe-lincolnville-hero.webp',
    delivery_url: null,
    gallery: [
      { src: 'assets/img/portfolio/modern-aframe-lincolnville-01.webp', caption: '' },
      { src: 'assets/img/portfolio/modern-aframe-lincolnville-02.webp', caption: '' },
    ],
  },

  {
    id: 16,
    priority: 6,
    name: 'Modern Bungalow',
    type: 'new-construction',
    year: 2025,
    location: 'Swanville, ME',
    featured: false,
    hero: 'assets/img/portfolio/modern-bungalow-swanville-hero.webp',
    delivery_url: null,
    gallery: [],
  },

  {
    id: 15,
    priority: 7,
    name: 'Pool Enclosure',
    type: 'new-construction',
    year: 2025,
    location: 'Camden, ME',
    featured: false,
    hero: 'assets/img/portfolio/pool-enclosure-camden-hero.webp',
    delivery_url: null,
    gallery: [ 
      { src: 'assets/img/portfolio/pool-enclosure-camden-01.webp', caption: 'Endless Pool' },
      { src: 'assets/img/portfolio/pool-enclosure-camden-02.webp', caption: 'Endless Pool ' },
    ],
  },

  {
    id: 11,
    priority: 8,
    name: 'Modern Bungalow',
    type: 'new-construction',
    year: 2023,
    location: 'Lincolnville, ME',
    featured: true,
    hero: 'assets/img/portfolio/modern-bungalow-lincolnville-hero.webp',
    delivery_url: null,
    gallery: [
      { src: 'assets/img/portfolio/modern-bungalow-lincolnville-01.webp', caption: 'Framing and structural system' },
      { src: 'assets/img/portfolio/modern-bungalow-lincolnville-02.webp', caption: 'Dense-pack cellulose insulation' },
      { src: 'assets/img/portfolio/modern-bungalow-lincolnville-03.webp', caption: 'Standing seam metal roof' },
      { src: 'assets/img/portfolio/modern-bungalow-lincolnville-04.webp', caption: 'Exterior complete' },
      { src: 'assets/img/portfolio/modern-bungalow-lincolnville-05.webp', caption: 'Interior finishes' },
    ],
  },

  {
    id: 9,
    priority: 9,
    name: 'Modern Bungalow with ADU',
    type: 'new-construction',
    year: 2022,
    location: 'Lincolnville, ME',
    featured: false,
    hero: 'assets/img/portfolio/modern-bungalow-adu-lincolnville-2-hero.webp',
    delivery_url: null,
    gallery: [
      { src: 'assets/img/portfolio/modern-bungalow-adu-lincolnville-2-01.webp', caption: '' },
      { src: 'assets/img/portfolio/modern-bungalow-adu-lincolnville-2-02.webp', caption: '' },
      { src: 'assets/img/portfolio/modern-bungalow-adu-lincolnville-2-03.webp', caption: '' },
    ],
  },

  {
    id: 6,
    priority: 10,
    name: 'Sauna',
    type: 'new-construction',
    year: 2022,
    location: 'Camden, ME',
    featured: false,
    hero: 'assets/img/portfolio/sauna-camden-hero.webp',
    delivery_url: null,
    gallery: [
      { src: 'assets/img/portfolio/sauna-camden-01.webp', caption: '' },
      { src: 'assets/img/portfolio/sauna-camden-02.webp', caption: '' },
    ],
  },

  {
    id: 5,
    priority: 11,
    name: 'Modern Bungalow with ADU',
    type: 'new-construction',
    year: 2020,
    location: 'Lincolnville, ME',
    featured: false,
    hero: 'assets/img/portfolio/modern-bungalow-adu-lincolnville-hero.webp',
    delivery_url: null,
    gallery: [
      { src: 'assets/img/portfolio/modern-bungalow-adu-lincolnville-01.webp', caption: '' },
      { src: 'assets/img/portfolio/modern-bungalow-adu-lincolnville-02.webp', caption: '' },
      { src: 'assets/img/portfolio/modern-bungalow-adu-lincolnville-03.webp', caption: '' },
    ],
  },

  {
    id: 3,
    priority: 12,
    name: 'Modern Colonial',
    type: 'new-construction',
    year: 2021,
    location: 'Lincolnville, ME',
    featured: false,
    hero: 'assets/img/portfolio/modern-colonial-lincolnville-hero.webp',
    delivery_url: null,
    gallery: [
      { src: 'assets/img/portfolio/modern-colonial-lincolnville-01.webp', caption: '' },
      { src: 'assets/img/portfolio/modern-colonial-lincolnville-02.webp', caption: '' },
      { src: 'assets/img/portfolio/modern-colonial-lincolnville-03.webp', caption: '' },
      { src: 'assets/img/portfolio/modern-colonial-lincolnville-04.webp', caption: '' },
    ],
  },

  // ── Secondary — available for grid expansion ───────────────────
  // Set priority > 12 to keep out of default 12-card grid.
  // Reduce priority to promote into the main grid.

  {
    id: 18,
    priority: 13,
    name: 'Renovation & Addition',
    type: 'renovation',
    year: 2025,
    location: 'Belfast, ME',
    featured: false,
    hero: 'assets/img/portfolio/renovation-addition-belfast-hero.webp',
    delivery_url: null,
    gallery: [],
  },

  {
    id: 4,
    priority: 14,
    name: 'Modern Barn',
    type: 'new-construction',
    year: 2019,
    location: 'Palermo, ME',
    featured: false,
    hero: 'assets/img/portfolio/modern-barn-palermo-hero.webp',
    delivery_url: null,
    gallery: [
      { src: 'assets/img/portfolio/modern-barn-palermo-01.webp', caption: '' },
      { src: 'assets/img/portfolio/modern-barn-palermo-02.webp', caption: '' },
      { src: 'assets/img/portfolio/modern-barn-palermo-03.webp', caption: '' },
    ],
  },

  {
    id: 8,
    priority: 15,
    name: 'Modern Barn',
    type: 'new-construction',
    year: 2020,
    location: 'Somerville, ME',
    featured: false,
    hero: 'assets/img/portfolio/modern-barn-somerville-hero.webp',
    delivery_url: null,
    gallery: [
      { src: 'assets/img/portfolio/modern-barn-somerville-01.webp', caption: '' },
      { src: 'assets/img/portfolio/modern-barn-somerville-02.webp', caption: '' },
    ],
  },

  {
    id: 2,
    priority: 16,
    name: 'Modern Cottage',
    type: 'new-construction',
    year: 2021,
    location: 'Northport, ME',
    featured: false,
    hero: 'assets/img/portfolio/modern-cottage-northport-hero.webp',
    delivery_url: null,
    gallery: [
      { src: 'assets/img/portfolio/modern-cottage-northport-01.webp', caption: '' },
      { src: 'assets/img/portfolio/modern-cottage-northport-02.webp', caption: '' },
      { src: 'assets/img/portfolio/modern-cottage-northport-03.webp', caption: '' },
    ],
  },

  {
    id: 1,
    priority: 17,
    name: 'Renovation & Addition',
    type: 'renovation',
    year: 2018,
    location: 'Liberty, ME',
    featured: false,
    hero: 'assets/img/portfolio/renovation-addition-liberty-hero.webp',
    delivery_url: null,
    gallery: [
      { src: 'assets/img/portfolio/renovation-addition-liberty-01.webp', caption: '' },
      { src: 'assets/img/portfolio/renovation-addition-liberty-02.webp', caption: '' },
      { src: 'assets/img/portfolio/renovation-addition-liberty-03.webp', caption: '' },
    ],
  },

];

// ── Helpers ──────────────────────────────────────────────────────

// Projects sorted by priority
export const projectsSorted = [...projects].sort((a, b) => a.priority - b.priority);

// Top 12 for default grid display
export const projectsGrid = projectsSorted.filter(p => p.priority <= 18);

// Featured projects for hero slideshow (up to 5)
export const projectsFeatured = projectsSorted
  .filter(p => p.featured)
  .slice(0, 5);

// Filter by type
export function projectsByType(type) {
  return projectsSorted.filter(p => p.type === type);
}

// Projects with delivery pages
export function projectsWithDelivery() {
  return projectsSorted.filter(p => p.delivery_url);
}
