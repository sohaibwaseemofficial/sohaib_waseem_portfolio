// Type shims for Next.js modules — only needed when next package type declarations
// are missing (e.g., corrupted/incomplete npm install). Safe to delete once
// `npm install` completes cleanly and node_modules/next/*.d.ts are restored.
declare module "next" {
  export interface NextConfig {
    [key: string]: unknown;
  }
  export type Metadata = {
    title?: string;
    description?: string;
    keywords?: string[];
    authors?: Array<{ name: string }>;
    openGraph?: {
      title?: string;
      description?: string;
      type?: string;
      locale?: string;
    };
    twitter?: {
      card?: string;
      title?: string;
      description?: string;
    };
  };
}

declare module "next/font/google" {
  interface FontOptions {
    subsets: string[];
    variable?: string;
    display?: string;
  }
  type FontResult = {
    className: string;
    variable: string;
    style: { fontFamily: string };
  };
  export function Inter(options: FontOptions): FontResult;
  export function JetBrains_Mono(options: FontOptions): FontResult;
}

declare module "next/types.js" {
  export {};
}
