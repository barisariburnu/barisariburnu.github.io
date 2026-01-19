export interface Project {
  title: string;
  description: string;
  icon: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'Next.js E-commerce Monorepo',
    description:
      'A modern e-commerce monorepo featuring Next.js apps, Node.js microservices, Kafka event streaming, Stripe payments, and dual databases (PostgreSQL + MongoDB), secured by Clerk. Built with pnpm and Turborepo for fast, scalable development.',
    icon: 'SiNextdotjs',
    link: 'https://github.com/barisariburnu/nextjs-ecommerce-monorepo',
    slug: 'nextjs-ecommerce-monorepo',
  },
  {
    title: 'Flutter Movie App',
    description:
      'A beautifully designed Flutter movie application showcasing Clean Architecture with BLoC pattern. Browse trending movies, explore detailed information, watch trailers, and discover your next favorite film with this feature-rich app powered by The Movie Database (TMDb) API.',
    icon: 'SiFlutter',
    link: 'https://github.com/barisariburnu/flutter-movie-app',
    slug: 'flutter-movie-app',
  },
  {
    title: 'GeoTIFF Tile Converter',
    description:
      'High-performance asynchronous converter for Web Mercator tile images (JPG) to georeferenced GeoTIFF format with EPSG:3857 projection. Optimized for large-scale geospatial data processing.',
    icon: 'FiMap',
    link: 'https://github.com/barisariburnu/geotiff-tile-converter',
    slug: 'geotiff-tile-converter',
  },
  {
    title: 'Oracle Spatial Deduplicator',
    description:
      'A Python application for detecting and managing geometrically identical records in Oracle Spatial databases. This tool intelligently identifies duplicate spatial features, prioritizes records based on data completeness, and organizes them into appropriate tables for data quality management.',
    icon: 'SiOracle',
    link: 'https://github.com/barisariburnu/oracle-spatial-deduplicator',
    slug: 'oracle-spatial-deduplicator',
  },
  {
    title: 'M3U Content Manager',
    description:
      'An advanced M3U/M3U8 file processing and content management application. Supports parsing, validation, and transformation of playlist files for media streaming applications.',
    icon: 'FiPlay',
    link: 'https://github.com/barisariburnu/m3u-content-manager',
    slug: 'm3u-content-manager',
  },
  {
    title: 'Excel Folder Generator',
    description:
      'A modern web application that automatically creates folder structures from your Excel files and provides them as a downloadable ZIP archive.',
    icon: 'FiFileText',
    link: 'https://github.com/barisariburnu/excel-folder-generator',
    slug: 'excel-folder-generator',
  },
];
